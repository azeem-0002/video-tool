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
import { transformBackendResponse } from "@/lib/response-transformer"

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
        message: "Unsupported platform. We support YouTube, TikTok, Instagram, Facebook, and Twitter.",
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

  // Comprehensive validation for empty/null backend responses
  const validateBackendResponse = (data: any, platform: string): { isValid: boolean; message: string } => {
    console.log("Validating backend response:", { data, platform })

    // Check if data is null, undefined, or empty string
    if (data === null || data === undefined || data === "") {
      return {
        isValid: false,
        message: `No ${platform} video data received from the server. The video might not be available or accessible.`,
      }
    }

    // Check if data is not an object
    if (typeof data !== "object") {
      return {
        isValid: false,
        message: `Invalid ${platform} video data format received from the server.`,
      }
    }

    // Check if data is an empty object
    if (Object.keys(data).length === 0) {
      return {
        isValid: false,
        message: `Empty ${platform} video data received. The video might be private, deleted, or not accessible.`,
      }
    }

    // Platform-specific validation
    switch (platform) {
      case "facebook":
        // Check if all Facebook video properties are null/empty
        const fbVideoProps = ["HD", "Normal_video", "video_url", "url", "video", "download_url"]
        const hasFbVideo = fbVideoProps.some((prop) => {
          const value = data[prop]
          return value !== null && value !== undefined && value !== "" && value !== false
        })

        if (!hasFbVideo) {
          return {
            isValid: false,
            message:
              "This Facebook video is not available for download. The video might be private, age-restricted, or in a format that's not supported. Please try a different Facebook video URL or make sure the video is publicly accessible.",
          }
        }
        break

      case "twitter":
        // Check Twitter URL array
        if (data.url && Array.isArray(data.url)) {
          const hasValidTwitterUrls = data.url.some((item: any) => {
            if (typeof item === "string" && item.trim()) return true
            if (item && typeof item === "object") {
              return !!(item.hd || item.sd || item.url || item.video_url)
            }
            return false
          })

          if (!hasValidTwitterUrls) {
            return {
              isValid: false,
              message:
                "This Twitter video is not available for download. The tweet might be private, deleted, or the video format is not supported. Please try a different Twitter video URL.",
            }
          }
        } else {
          // Check other Twitter properties
          const twitterProps = ["video", "download_url", "media"]
          const hasTwitterVideo = twitterProps.some((prop) => {
            const value = data[prop]
            return value !== null && value !== undefined && value !== ""
          })

          if (!hasTwitterVideo) {
            return {
              isValid: false,
              message:
                "This Twitter content doesn't contain downloadable video. Please make sure the tweet contains a video.",
            }
          }
        }
        break

      case "youtube":
        // Check YouTube video properties
        const ytProps = ["mp4", "mp3", "video_url", "url"]
        const hasYtVideo = ytProps.some((prop) => {
          const value = data[prop]
          return value !== null && value !== undefined && value !== ""
        })

        if (!hasYtVideo) {
          return {
            isValid: false,
            message:
              "This YouTube video is not available for download. The video might be age-restricted, private, or protected by copyright.",
          }
        }
        break

      case "tiktok":
        // Check TikTok video properties - handle multiple possible structures
        let hasTtVideo = false

        // Method 1: Check video array (most common)
        if (data.video && Array.isArray(data.video)) {
          hasTtVideo =
            data.video.length > 0 &&
            data.video.some((url: any) => {
              if (typeof url === "string" && url.trim() !== "") return true
              if (url && typeof url === "object" && url.url && typeof url.url === "string") return true
              return false
            })
        }

        // Method 2: Check direct video URL properties
        if (!hasTtVideo) {
          const ttVideoProps = ["video_url", "download_url", "url", "play", "wmplay", "hdplay"]
          hasTtVideo = ttVideoProps.some((prop) => {
            const value = data[prop]
            return value && typeof value === "string" && value.trim() !== ""
          })
        }

        // Method 3: Check nested video objects
        if (!hasTtVideo && data.video && typeof data.video === "object" && !Array.isArray(data.video)) {
          const videoObj = data.video
          const videoObjProps = ["url", "download_url", "play", "wmplay", "hdplay"]
          hasTtVideo = videoObjProps.some((prop) => {
            const value = videoObj[prop]
            return value && typeof value === "string" && value.trim() !== ""
          })
        }

        // Method 4: Check audio array as backup (for videos with audio only)
        if (!hasTtVideo && data.audio && Array.isArray(data.audio)) {
          hasTtVideo =
            data.audio.length > 0 &&
            data.audio.some((url: any) => {
              if (typeof url === "string" && url.trim() !== "") return true
              if (url && typeof url === "object" && url.url && typeof url.url === "string") return true
              return false
            })
        }

        // Method 5: Check if data has any URL-like properties
        if (!hasTtVideo) {
          const allProps = Object.keys(data)
          hasTtVideo = allProps.some((prop) => {
            const value = data[prop]
            if (typeof value === "string" && value.includes("http") && value.includes("tiktok")) {
              return true
            }
            return false
          })
        }

        if (!hasTtVideo) {
          // Log the actual data structure for debugging
          console.log("TikTok validation failed. Data structure:", JSON.stringify(data, null, 2))
          return {
            isValid: false,
            message:
              "This TikTok video is not available for download. The video might be private, deleted, or protected.",
          }
        }
        break

      case "instagram":
        // Check Instagram data
        if (Array.isArray(data)) {
          const hasIgVideo = data.length > 0 && data.some((item) => item && item.url)
          if (!hasIgVideo) {
            return {
              isValid: false,
              message:
                "This Instagram content is not available for download. The content might be private, expired, or in an unsupported format.",
            }
          }
        } else {
          const igProps = ["url", "video_url", "download_url"]
          const hasIgVideo = igProps.some((prop) => {
            const value = data[prop]
            return value !== null && value !== undefined && value !== ""
          })

          if (!hasIgVideo) {
            return {
              isValid: false,
              message:
                "This Instagram content is not available for download. The content might be private, expired, or in an unsupported format.",
            }
          }
        }
        break

      default:
        return {
          isValid: false,
          message: "This video is not available for download from this platform.",
        }
    }

    return { isValid: true, message: "Valid data received" }
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
        // Read response body only once
        const responseText = await response.text()
        console.error("Response error:", responseText)

        let errorMessage = "Failed to process video"
        try {
          const errorData = JSON.parse(responseText)
          errorMessage = errorData.error || errorMessage
        } catch {
          errorMessage = responseText || errorMessage
        }

        // Check for ngrok offline error
        if (errorMessage.includes("ngrok") && errorMessage.includes("offline")) {
          throw new Error(
            "🚨 Backend service is offline. The ngrok tunnel has expired or stopped. Please restart your backend service and update the ngrok URL.",
          )
        }
        if (errorMessage.includes("ERR_NGROK")) {
          throw new Error(
            "🚨 Backend connection failed. The ngrok tunnel is not accessible. Please check your backend service.",
          )
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
        apiResponse = await response.json()
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError)
        throw new Error("Invalid response from server. Please try again.")
      }

      console.log("API Response:", apiResponse)

      // Check if API response indicates failure
      if (!apiResponse.success) {
        const errorMessage = apiResponse.error || "Failed to process video"

        // Check for ngrok offline error in API response
        if (errorMessage.includes("ngrok") && errorMessage.includes("offline")) {
          throw new Error(
            "🚨 Backend service is offline. The ngrok tunnel has expired or stopped. Please restart your backend service and update the ngrok URL in your environment variables.",
          )
        }
        if (errorMessage.includes("ERR_NGROK")) {
          throw new Error(
            "🚨 Backend connection failed. The ngrok tunnel is not accessible. Please check your backend service and ngrok configuration.",
          )
        }

        throw new Error(errorMessage)
      }

      // Check if response has data property
      if (!apiResponse.hasOwnProperty("data")) {
        throw new Error("No video data received from the server.")
      }

      console.log(`Raw ${platform} backend data:`, JSON.stringify(apiResponse.data, null, 2))

      // Comprehensive validation of backend data
      const dataValidation = validateBackendResponse(apiResponse.data, platform)
      if (!dataValidation.isValid) {
        throw new Error(dataValidation.message)
      }

      // Use the centralized response transformer
      const transformedData = transformBackendResponse(apiResponse.data, platform)
      console.log("Transformed data:", transformedData)

      // Final validation of transformed data
      if (!transformedData.downloadLinks || transformedData.downloadLinks.length === 0) {
        console.error("No download links after transformation:", {
          originalData: apiResponse.data,
          transformedData,
          platform,
        })

        throw new Error(
          `Unable to extract download links from this ${platform} video. The video format might not be supported or the content is protected.`,
        )
      }

      // Validate that download links have actual URLs
      const validLinks = transformedData.downloadLinks.filter((link) => link.url && link.url.trim())
      if (validLinks.length === 0) {
        throw new Error(
          `No valid download URLs found for this ${platform} video. The video might be protected or in an unsupported format.`,
        )
      }

      // Update the result with only valid links
      setResult({
        ...transformedData,
        downloadLinks: validLinks,
      })

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

    <div className="max-w-4xl mx-auto space-y-8">
      {/* Descriptive paragraph */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-sm text-muted-foreground">
          Universal video downloader supporting all major platforms. Our free online video download tool works with
          YouTube, TikTok, Instagram, Facebook, Twitter and more. Fast, secure, and easy to use.
        </p>
      </div>
      {/* Error Alert - Displayed at the top */}
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="font-medium">{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Free Online Video Downloader</CardTitle>
          <CardDescription>
            Paste any video URL from any website - our professional video downloader auto-detects the platform for
            instant online video download
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
                  placeholder="Paste any video URL here to download videos from any website..."
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
          <CardDescription>Check out our platform-specific downloaders for enhanced features</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto place-items-center">
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
