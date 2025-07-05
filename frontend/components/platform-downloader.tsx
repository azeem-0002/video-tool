"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Download,
  Loader2,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Youtube,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react"
import { VideoResult } from "@/components/video-result"
import { toast } from "sonner"
import Link from "next/link"
import { transformResponse } from "@/lib/response-transformer"

interface PlatformDownloaderProps {
  platform: string
  endpoint: string
  placeholder: string
}

interface VideoData {
  title: string
  thumbnail: string
  downloadLinks: Array<{
    quality: string
    url: string
    format: string
  }>
}

export function PlatformDownloader({ platform, endpoint, placeholder }: PlatformDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<VideoData | null>(null)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const [urlValidation, setUrlValidation] = useState<{
    isValid: boolean
    message: string
  } | null>(null)

  // Validate URL for specific platform
  const validatePlatformUrl = (inputUrl: string, targetPlatform: string): { isValid: boolean; message: string } => {
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

    const urlLower = inputUrl.toLowerCase()

    // Platform-specific validation
    switch (targetPlatform) {
      case "youtube":
        if (urlLower.includes("youtube.com") || urlLower.includes("youtu.be")) {
          return { isValid: true, message: "✓ Valid YouTube URL" }
        }
        return { isValid: false, message: "Please enter a valid YouTube URL (youtube.com or youtu.be)" }

      case "tiktok":
        if (urlLower.includes("tiktok.com")) {
          return { isValid: true, message: "✓ Valid TikTok URL" }
        }
        return { isValid: false, message: "Please enter a valid TikTok URL (tiktok.com)" }

      case "instagram":
        if (urlLower.includes("instagram.com")) {
          return { isValid: true, message: "✓ Valid Instagram URL" }
        }
        return { isValid: false, message: "Please enter a valid Instagram URL (instagram.com)" }

      case "facebook":
        if (urlLower.includes("facebook.com") || urlLower.includes("fb.watch")) {
          return { isValid: true, message: "✓ Valid Facebook URL" }
        }
        return { isValid: false, message: "Please enter a valid Facebook URL (facebook.com or fb.watch)" }

      case "twitter":
        if (urlLower.includes("twitter.com") || urlLower.includes("x.com")) {
          return { isValid: true, message: "✓ Valid Twitter/X URL" }
        }
        return { isValid: false, message: "Please enter a valid Twitter/X URL (twitter.com or x.com)" }

      default:
        return { isValid: true, message: "✓ URL format looks valid" }
    }
  }

  // Handle URL input change with real-time validation
  const handleUrlChange = (inputUrl: string) => {
    setUrl(inputUrl)
    setError("")
    setResult(null)

    if (inputUrl.trim()) {
      const validation = validatePlatformUrl(inputUrl, platform)
      setUrlValidation(validation)
    } else {
      setUrlValidation(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate URL before submission
    const validation = validatePlatformUrl(url, platform)
    setUrlValidation(validation)

    if (!validation.isValid) {
      setError(validation.message)
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      console.log(`Processing ${platform} URL: ${url}`)

      // Call Next.js API route
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      console.log("Response status:", response.status)
      console.log("Response headers:", Object.fromEntries(response.headers.entries()))

      const responseText = await response.text()
      console.log("Raw response:", responseText.substring(0, 500))

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`

        try {
          const errorData = JSON.parse(responseText)
          errorMessage = errorData.error || errorMessage
        } catch {
          errorMessage = responseText || errorMessage
        }

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
          throw new Error(`Failed to process video: ${errorMessage}`)
        }
      }

      let apiResponse
      try {
        apiResponse = JSON.parse(responseText)
      } catch (parseError) {
        console.error("Failed to parse JSON response:", parseError)
        throw new Error("Invalid response from server. Please try again.")
      }

      console.log("API Response:", apiResponse)

      if (!apiResponse.success) {
        const errorMessage = apiResponse.error || "Failed to process video"
        throw new Error(errorMessage)
      }

      // Check if we got valid data
      if (!apiResponse.data) {
        throw new Error("No video data received. The video might not be available for download.")
      }

      // Transform the backend response to match our frontend format
      const transformedData = transformResponse(apiResponse)

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
    <div className="space-y-8">
      {/* Error Alert - Displayed at the top */}
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="font-medium">{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="capitalize">{platform} Video Downloader</CardTitle>
          <CardDescription>Paste the video URL below to start downloading</CardDescription>
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
                  placeholder={placeholder}
                  value={url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePaste}
                  className="px-3 whitespace-nowrap bg-transparent"
                >
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

      {/* Video Result - Now appears before Explore More Tools */}
      {result && <VideoResult data={result} />}

      {/* Explore More Tools - Moved here after the video result */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Explore More Tools</CardTitle>
          <CardDescription>Try our other video downloaders</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto place-items-center">
            {platform !== "tiktok" && (
              <Link href="/tiktok-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-black dark:hover:border-white bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-sm"></div>
                      </div>
                      <h3 className="font-semibold">TikTok Downloader</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
            {platform !== "youtube" && (
              <Link href="/youtube-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-red-500 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Youtube className="w-5 h-5" />
                      <h3 className="font-semibold">YouTube Downloader</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
            {platform !== "facebook" && (
              <Link href="/facebook-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Facebook className="w-5 h-5" />
                      <h3 className="font-semibold">Facebook Downloader</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
            {platform !== "instagram" && (
              <Link href="/instagram-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Instagram className="w-5 h-5" />
                      <h3 className="font-semibold">Instagram Saver</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
            {platform !== "twitter" && (
              <Link href="/twitter-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-400 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-xs">𝕏</span>
                      </div>
                      <h3 className="font-semibold">Twitter Downloader</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
            <Link href="/" className="block w-full md:col-start-2" onClick={() => window.scrollTo(0, 0)}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-purple-500 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" />
                    <h3 className="font-semibold">Universal Downloader</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
