"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Loader2, AlertTriangle, CheckCircle, XCircle, Youtube, Instagram, Facebook } from "lucide-react"
import { VideoResult } from "@/components/video-result"
import { toast } from "sonner"
import Link from "next/link"

interface VideoData {
  title: string
  thumbnail: string
  downloadLinks: Array<{
    quality: string
    url: string
    format: string
  }>
}

export function UniversalDownloader() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<VideoData | null>(null)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const [urlValidation, setUrlValidation] = useState<{
    isValid: boolean
    message: string
    platform?: string
  } | null>(null)

  // Validate URL format and platform support
  const validateUrl = (inputUrl: string): { isValid: boolean; message: string; platform?: string } => {
    if (!inputUrl.trim()) {
      return { isValid: false, message: "Please enter a URL" }
    }

    // Check if it's a valid URL format
    try {
      const urlObj = new URL(inputUrl)
      if (!urlObj.protocol.startsWith("http")) {
        return { isValid: false, message: "URL must start with http:// or https://" }
      }
    } catch {
      return { isValid: false, message: "Invalid URL format. Please enter a valid URL." }
    }

    // Check platform support
    const platform = detectPlatform(inputUrl)
    if (!platform) {
      return {
        isValid: false,
        message: "Unsupported platform. We support YouTube, TikTok, Instagram, Facebook, Twitter, and Pinterest.",
      }
    }

    return {
      isValid: true,
      message: `✓ Valid ${platform.charAt(0).toUpperCase() + platform.slice(1)} URL detected`,
      platform,
    }
  }

  // Auto-detect platform from URL
  const detectPlatform = (url: string): string | null => {
    if (!url) return null

    const urlLower = url.toLowerCase()

    if (urlLower.includes("youtube.com") || urlLower.includes("youtu.be")) {
      return "youtube"
    } else if (urlLower.includes("tiktok.com")) {
      return "tiktok"
    } else if (urlLower.includes("instagram.com")) {
      return "instagram"
    } else if (urlLower.includes("facebook.com") || urlLower.includes("fb.watch")) {
      return "facebook"
    } else if (urlLower.includes("twitter.com") || urlLower.includes("x.com")) {
      return "twitter"
    } else if (urlLower.includes("pinterest.com")) {
      return "pinterest"
    }

    return null
  }

  // Handle URL input change with real-time validation
  const handleUrlChange = (inputUrl: string) => {
    setUrl(inputUrl)
    setError("")
    setResult(null)

    if (inputUrl.trim()) {
      const validation = validateUrl(inputUrl)
      setUrlValidation(validation)
    } else {
      setUrlValidation(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate URL before submission
    const validation = validateUrl(url)
    setUrlValidation(validation)

    if (!validation.isValid) {
      setError(validation.message)
      return
    }

    const platform = validation.platform!

    setLoading(true)
    setError("")
    setResult(null)

    try {
      console.log(`Processing ${platform} URL: ${url}`)

      // Call Next.js API route instead of backend directly
      const response = await fetch("/api/universal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Response error:", errorData)

        // Handle specific error cases
        if (response.status === 404) {
          throw new Error("Video not found. Please check if the URL is correct and the video is publicly accessible.")
        } else if (response.status === 403) {
          throw new Error("Access denied. The video might be private or restricted.")
        } else if (response.status === 429) {
          throw new Error("Too many requests. Please wait a moment and try again.")
        } else if (response.status >= 500) {
          throw new Error("Server error. Please try again later.")
        } else {
          throw new Error(`Failed to process video: ${errorData.error || "Unknown error"}`)
        }
      }

      const apiResponse = await response.json()
      console.log("API Response:", apiResponse)

      if (!apiResponse.success) {
        // Handle backend-specific errors
        const errorMessage = apiResponse.error || "Failed to process video"
        if (errorMessage.toLowerCase().includes("not found") || errorMessage.toLowerCase().includes("404")) {
          throw new Error("Video not found. The video might have been deleted or the URL is incorrect.")
        } else if (
          errorMessage.toLowerCase().includes("private") ||
          errorMessage.toLowerCase().includes("restricted")
        ) {
          throw new Error("Cannot download private or restricted videos. Please use a public video URL.")
        } else {
          throw new Error(errorMessage)
        }
      }

      // Check if we got valid data
      if (!apiResponse.data) {
        throw new Error("No video data received. The video might not be available for download.")
      }

      // Transform the backend response to match our frontend format
      const transformedData = transformBackendResponse(apiResponse.data, platform)

      // Validate transformed data
      if (!transformedData.downloadLinks || transformedData.downloadLinks.length === 0) {
        throw new Error("No download links available for this video. The video format might not be supported.")
      }

      setResult(transformedData)
      toast.success("Video processed successfully!")
    } catch (err) {
      console.error("Processing error:", err)
      let errorMessage = "An unexpected error occurred"

      if (err instanceof TypeError && err.message.includes("fetch")) {
        errorMessage =
          "Network error: Unable to connect to the server. Please check your internet connection and try again."
      } else if (err instanceof Error) {
        errorMessage = err.message
      }

      setError(errorMessage)
      toast.error("Failed to process video")
    } finally {
      setLoading(false)
    }
  }

  // Transform backend responses
  const transformBackendResponse = (data: any, platform: string): VideoData => {
    switch (platform) {
      case "tiktok":
        return {
          title: data.title || data.title_audio || "TikTok Video",
          thumbnail: data.thumbnail || "/placeholder.svg?height=200&width=320",
          downloadLinks: [
            ...(data.video
              ? data.video.map((url: string, index: number) => ({
                  quality: "Video",
                  url,
                  format: "mp4",
                }))
              : []),
            ...(data.audio
              ? data.audio.map((url: string, index: number) => ({
                  quality: "Audio Only",
                  url,
                  format: "mp3",
                }))
              : []),
          ],
        }

      case "facebook":
        return {
          title: data.title || "Facebook Video",
          thumbnail: data.thumbnail || "/placeholder.svg?height=200&width=320",
          downloadLinks: [
            ...(data.HD
              ? [
                  {
                    quality: "HD",
                    url: data.HD,
                    format: "mp4",
                  },
                ]
              : []),
            ...(data.Normal_video
              ? [
                  {
                    quality: "SD",
                    url: data.Normal_video,
                    format: "mp4",
                  },
                ]
              : []),
          ],
        }

      case "youtube":
        return {
          title: data.title || "YouTube Video",
          thumbnail: data.thumbnail || "/placeholder.svg?height=200&width=320",
          downloadLinks: [
            ...(data.mp4
              ? [
                  {
                    quality: "Video",
                    url: data.mp4,
                    format: "mp4",
                  },
                ]
              : []),
            ...(data.mp3
              ? [
                  {
                    quality: "Audio Only",
                    url: data.mp3,
                    format: "mp3",
                  },
                ]
              : []),
          ],
        }

      case "instagram":
        if (Array.isArray(data)) {
          return {
            title: "Instagram Video",
            thumbnail: data[0]?.thumbnail || "/placeholder.svg?height=200&width=320",
            downloadLinks: data.map((item: any, index: number) => ({
              quality: `Video ${index + 1}`,
              url: item.url,
              format: "mp4",
            })),
          }
        }
        return {
          title: "Instagram Video",
          thumbnail: "/placeholder.svg?height=200&width=320",
          downloadLinks: [],
        }

      case "pinterest":
        const result = data.result || data
        return {
          title: result.title || "Pinterest Video",
          thumbnail: result.image || result.images?.orig?.url || "/placeholder.svg?height=200&width=320",
          downloadLinks: [
            ...(result.video_url
              ? [
                  {
                    quality: "Video",
                    url: result.video_url,
                    format: "mp4",
                  },
                ]
              : []),
            ...(result.videos?.V_720P
              ? [
                  {
                    quality: "720p",
                    url: result.videos.V_720P.url,
                    format: "mp4",
                  },
                ]
              : []),
            ...(result.videos?.V_HLSV4
              ? [
                  {
                    quality: "HLS Stream",
                    url: result.videos.V_HLSV4.url,
                    format: "m3u8",
                  },
                ]
              : []),
          ],
        }

      case "twitter":
        return {
          title: data.title || "Twitter Video",
          thumbnail: data.thumbnail || "/placeholder.svg?height=200&width=320",
          downloadLinks: Array.isArray(data.url)
            ? data.url.map((item: any, index: number) => {
                if (item.hd) {
                  return {
                    quality: "HD",
                    url: item.hd,
                    format: "mp4",
                  }
                }
                if (item.sd) {
                  return {
                    quality: "SD",
                    url: item.sd,
                    format: "mp4",
                  }
                }
                return {
                  quality: `Video ${index + 1}`,
                  url: typeof item === "string" ? item : item.url || item,
                  format: "mp4",
                }
              })
            : [],
        }

      default:
        return {
          title: "Video",
          thumbnail: "/placeholder.svg?height=200&width=320",
          downloadLinks: [],
        }
    }
  }

  // Enhanced paste function with multiple fallback methods
  const handlePaste = async () => {
    try {
      // Method 1: Try using the Clipboard API directly
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText()
        if (text) {
          handleUrlChange(text)
          toast.success("URL pasted from clipboard")
          return
        }
      }
    } catch (err) {
      console.log("Primary clipboard method failed, trying alternatives...")
    }

    // Method 2: Focus the input and execute paste command
    try {
      if (inputRef.current) {
        inputRef.current.focus()

        // For mobile browsers that support execCommand
        const successful = document.execCommand("paste")
        if (successful) {
          // The paste event will trigger onChange which calls handleUrlChange
          toast.success("URL pasted from clipboard")
          return
        }
      }
    } catch (err) {
      console.log("Secondary clipboard method failed, trying manual paste prompt...")
    }

    // Method 3: Prompt the user to paste manually
    toast.info("Please paste the URL manually by long-pressing the input field", {
      duration: 3000,
      action: {
        label: "OK",
        onClick: () => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        },
      },
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Error Alert - Displayed at the top */}
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="font-medium">{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Universal Video Downloader</CardTitle>
          <CardDescription>
            Paste any video URL from Instagram, TikTok, YouTube, Facebook, Twitter - we'll auto-detect the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="url">Video URL</Label>
              <div className="flex gap-2">
                <Input
                  id="url"
                  ref={inputRef}
                  type="url"
                  placeholder="Paste any video URL here (YouTube, TikTok, Instagram, Facebook, Twitter)..."
                  value={url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="flex-1"
                />
                <Button type="button" variant="outline" onClick={handlePaste} className="px-3 whitespace-nowrap">
                  Paste
                </Button>
              </div>

              {/* URL Validation Feedback */}
              {urlValidation && (
                <div className="flex items-center gap-2 text-sm">
                  {urlValidation.isValid ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-600 dark:text-green-400">{urlValidation.message}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-red-600 dark:text-red-400">{urlValidation.message}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={loading || !url || (urlValidation && !urlValidation.isValid)}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download Video
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Video Result - Now appears before Prefer Dedicated Tools */}
      {result && <VideoResult data={result} />}

      {/* Prefer Dedicated Tools - Now appears after video result */}
      <Card>
  <CardHeader className="text-center">
    <CardTitle className="text-xl">Prefer Dedicated Tools?</CardTitle>
    <CardDescription>
      Check out our platform-specific downloaders for enhanced features
    </CardDescription>
  </CardHeader>

  <CardContent className="flex flex-col items-center">
    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
      <Link href="/tiktok" className="block">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-black dark:hover:border-white bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white w-64">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <h3 className="font-semibold">TikTok Downloader</h3>
            </div>
            <p className="text-xs text-gray-300 mt-1">No watermark</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/youtube" className="block">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-red-500 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white w-64">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Youtube className="w-5 h-5" />
              <h3 className="font-semibold">YouTube Downloader</h3>
            </div>
            <p className="text-xs text-red-100 mt-1">HD & MP3</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/facebook" className="block">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-64">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Facebook className="w-5 h-5" />
              <h3 className="font-semibold">Facebook Downloader</h3>
            </div>
            <p className="text-xs text-blue-100 mt-1">Posts & Stories</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/instagram" className="block">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white w-64">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" />
              <h3 className="font-semibold">Instagram Saver</h3>
            </div>
            <p className="text-xs text-pink-100 mt-1">Reels & Stories</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/twitter" className="block">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-400 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white w-64">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xs">𝕏</span>
              </div>
              <h3 className="font-semibold">Twitter Downloader</h3>
            </div>
            <p className="text-xs text-blue-100 mt-1">Video clips</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  </CardContent>
</Card>

    </div>
  )
}
