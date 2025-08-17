"use client"

import type React from "react"
import { useState, useRef, memo, useCallback, useMemo, useEffect } from "react"
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

const UniversalDownloader = memo(function UniversalDownloader() {
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
  const [pendingUrl, setPendingUrl] = useState<string | null>(null) // Store URL for deferred processing
  const [isPageLoaded, setIsPageLoaded] = useState(false) // Track page load status

  // Detect platform function (unchanged)
  const detectPlatform = useCallback((url: string): string | null => {
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
  }, [])

  // Validate URL function (unchanged)
  const validateUrl = useCallback(
    (inputUrl: string): { isValid: boolean; message: string; platform?: string } => {
      if (!inputUrl.trim()) {
        return { isValid: false, message: "Please enter a URL" }
      }
      try {
        const urlObj = new URL(inputUrl)
        if (!urlObj.protocol.startsWith("http")) {
          return { isValid: false, message: "URL must start with http:// or https://" }
        }
      } catch {
        return { isValid: false, message: "Invalid URL format. Please enter a valid URL." }
      }
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
    },
    [detectPlatform],
  )

  // Handle URL input change (unchanged)
  const handleUrlChange = useCallback(
    (inputUrl: string) => {
      setUrl(inputUrl)
      setError("")
      setResult(null)
      if (inputUrl.trim()) {
        const validation = validateUrl(inputUrl)
        setUrlValidation(validation)
      } else {
        setUrlValidation(null)
      }
    },
    [validateUrl],
  )

  // Handle submit function (unchanged, but extracted for reuse)
  const handleSubmit = useCallback(
    async (submittedUrl: string) => {
      const validation = validateUrl(submittedUrl)
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
        console.log(`Processing ${platform} URL: ${submittedUrl}`)
        const response = await fetch("/api/universal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: submittedUrl }),
        })

        console.log("Response status:", response.status)

        if (!response.ok) {
          const responseText = await response.text()
          console.error("Response error:", responseText)

          let errorMessage = "Failed to process video"
          try {
            const errorData = JSON.parse(responseText)
            errorMessage = errorData.error || errorMessage
          } catch {
            errorMessage = responseText || errorMessage
          }

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

        if (!apiResponse.success) {
          const errorMessage = apiResponse.error || "Failed to process video"
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

        if (!apiResponse.hasOwnProperty("data")) {
          throw new Error("No video data received from the server.")
        }

        console.log(`Raw ${platform} backend data:`, JSON.stringify(apiResponse.data, null, 2))

        const transformedData = transformBackendResponse(apiResponse.data, platform)
        console.log("Transformed data:", transformedData)

        if (!transformedData.downloadLinks || transformedData.downloadLinks.length === 0) {
          console.error("No download links after transformation:", {
            originalData: apiResponse.data,
            transformedData,
            platform,
          })

          let detailedError = `Unable to extract download links from this ${platform} video.`
          switch (platform) {
            case "youtube":
              detailedError += " This could be due to:"
              detailedError += "\n• Age-restricted content requiring sign-in"
              detailedError += "\n• Private or unlisted video"
              detailedError += "\n• Copyright-protected content"
              detailedError += "\n• Regional restrictions"
              detailedError += "\n• Video format not supported by the backend"
              break
            case "tiktok":
              detailedError += " This could be due to:"
              detailedError += "\n• Private account or video"
              detailedError += "\n• Age-restricted content"
              detailedError += "\n• Regional restrictions"
              detailedError += "\n• Video has been deleted"
              break
            case "instagram":
              detailedError += " This could be due to:"
              detailedError += "\n• Private account"
              detailedError += "\n• Story or reel restrictions"
              detailedError += "\n• Content has expired"
              detailedError += "\n• Login required for viewing"
              break
            case "facebook":
              detailedError += " This could be due to:"
              detailedError += "\n• Private video or page"
              detailedError += "\n• Age or region restrictions"
              detailedError += "\n• Video has been removed"
              detailedError += "\n• Login required for viewing"
              break
            case "twitter":
              detailedError += " This could be due to:"
              detailedError += "\n• Protected account"
              detailedError += "\n• Tweet has been deleted"
              detailedError += "\n• Video format not supported"
              detailedError += "\n• Age-restricted content"
              break
            default:
              detailedError += " The video format might not be supported or the content is protected."
          }

          console.log(`${platform} data structure received:`, Object.keys(apiResponse.data))
          console.log(`Full ${platform} response:`, apiResponse.data)
          throw new Error(detailedError)
        }

        const validLinks = transformedData.downloadLinks.filter((link) => link.url && link.url.trim())
        if (validLinks.length === 0) {
          throw new Error(
            `No valid download URLs found for this ${platform} video. The video might be protected or in an unsupported format.`,
          )
        }

        setResult({
          ...transformedData,
          downloadLinks: validLinks,
        })

        toast.success(`${platform.charAt(0).toUpperCase() + platform.slice(1)} video processed successfully!`)
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
        setPendingUrl(null) // Clear pending URL after processing
      }
    },
    [validateUrl],
  )

  // Handle button click
  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (urlValidation?.isValid) {
        if (isPageLoaded) {
          // If page is loaded, process immediately
          handleSubmit(url)
        } else {
          // Store URL for processing after page load
          setPendingUrl(url)
          toast.info("URL saved. Processing will start once the page is fully loaded.")
        }
      }
    },
    [url, urlValidation, isPageLoaded, handleSubmit],
  )

  // Detect page load completion (changed to DOMContentLoaded for earlier interactivity)
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsPageLoaded(true)
    }

    if (document.readyState === "interactive" || document.readyState === "complete") {
      setIsPageLoaded(true)
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded)
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded)
    }
  }, [])

  // Process pending URL after page load
  useEffect(() => {
    if (isPageLoaded && pendingUrl) {
      handleSubmit(pendingUrl)
    }
  }, [isPageLoaded, pendingUrl, handleSubmit])

  // Handle paste function (unchanged)
  const handlePaste = useCallback(async () => {
    try {
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

    try {
      if (inputRef.current) {
        inputRef.current.focus()
        const successful = document.execCommand("paste")
        if (successful) {
          toast.success("URL pasted from clipboard")
          return
        }
      }
    } catch (err) {
      console.log("Secondary clipboard method failed, trying manual paste prompt...")
    }

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
  }, [handleUrlChange])

  // Platform cards (unchanged)
  const platformCards = useMemo(
    () => (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto place-items-center">
        <Link href="/tiktok-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-black dark:hover:border-white bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white contain-paint">
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
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-red-500 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white contain-paint">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Youtube className="w-5 h-5" />
                <h3 className="font-semibold">YouTube Downloader</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/facebook-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white contain-paint">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Facebook className="w-5 h-5" />
                <h3 className="font-semibold">Facebook Downloader</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/instagram-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white contain-paint">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Instagram className="w-5 h-5" />
                <h3 className="font-semibold">Instagram Saver</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/twitter-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-400 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white contain-paint">
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
    ),
    [],
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8 contain-layout">
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-900/20">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="font-medium whitespace-pre-line">{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors contain-paint">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-balance">Free Online Video Downloader</CardTitle>
          <CardDescription className="text-pretty">
            Paste any video URL from any website - our professional video downloader auto-detects the platform for
            instant online video download
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleButtonClick} className="space-y-6">
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
                  autoComplete="off"
                  spellCheck="false"
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
              disabled={!url || (urlValidation && !urlValidation.isValid)}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" /> Download Video
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && <VideoResult data={result} />}

      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-xl text-muted-foreground text-pretty">
          Universal video downloader supporting all major platforms. Our free online video download tool works with
          YouTube, TikTok, Instagram, Facebook, Twitter and more. Fast, secure, and easy to use.
        </p>
      </div>

      <Card className="contain-paint">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-balance">Prefer Dedicated Tools?</CardTitle>
          <CardDescription className="text-pretty">
            Check out our platform-specific downloaders for enhanced features
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">{platformCards}</CardContent>
      </Card>
    </div>
  )
})

export { UniversalDownloader }