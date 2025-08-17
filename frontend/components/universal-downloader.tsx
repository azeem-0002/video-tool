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

  // Detect platform
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

  // Validate URL
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

  // Submit handler
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
        const response = await fetch("/api/universal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: submittedUrl }),
        })

        if (!response.ok) {
          throw new Error("Failed to process video. Please try again.")
        }

        const apiResponse = await response.json()
        if (!apiResponse.success || !apiResponse.data) {
          throw new Error(apiResponse.error || "Failed to process video")
        }

        const transformedData = transformBackendResponse(apiResponse.data, platform)
        const validLinks = transformedData.downloadLinks.filter((link) => link.url && link.url.trim())
        if (validLinks.length === 0) {
          throw new Error(`No valid download URLs found for this ${platform} video.`)
        }

        setResult({ ...transformedData, downloadLinks: validLinks })
        toast.success(`${platform} video processed successfully!`)
      } catch (err) {
        console.error("Processing error:", err)
        setError(err instanceof Error ? err.message : "Unexpected error occurred")
        toast.error("Failed to process video")
      } finally {
        setLoading(false)
      }
    },
    [validateUrl],
  )

  // ✅ Handle URL input change (auto process if valid)
  const handleUrlChange = useCallback(
    (inputUrl: string) => {
      setUrl(inputUrl)
      setError("")
      setResult(null)
      if (inputUrl.trim()) {
        const validation = validateUrl(inputUrl)
        setUrlValidation(validation)

        // 🚀 Auto-submit if valid
        if (validation.isValid) {
          handleSubmit(inputUrl)
        }
      } else {
        setUrlValidation(null)
      }
    },
    [validateUrl, handleSubmit],
  )

  // ✅ Handle paste (auto process if valid)
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
    } catch {
      console.log("Clipboard read failed")
    }
    toast.info("Please paste the URL manually", {
      duration: 3000,
      action: {
        label: "OK",
        onClick: () => {
          inputRef.current?.focus()
        },
      },
    })
  }, [handleUrlChange])

  // ✅ Detect manual paste (Ctrl+V / right-click paste)
  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    const handleInputPaste = () => {
      const pastedValue = input.value
      handleUrlChange(pastedValue)
    }

    input.addEventListener("paste", handleInputPaste)
    return () => {
      input.removeEventListener("paste", handleInputPaste)
    }
  }, [handleUrlChange])

  // Platform cards
  // const platformCards = useMemo(
  //   () => (
  //     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto place-items-center">
  //       {/* TikTok */}
  //       <Link href="/tiktok-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
  //         <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-black dark:hover:border-white bg-gradient-to-r from-gray-900 to-black text-white">
  //           <CardContent className="p-4 text-center">
  //             <h3 className="font-semibold">TikTok Downloader</h3>
  //           </CardContent>
  //         </Card>
  //       </Link>
  //       {/* YouTube */}
  //       <Link href="/youtube-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
  //         <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-red-500 bg-gradient-to-r from-red-500 to-red-600 text-white">
  //           <CardContent className="p-4 text-center">
  //             <div className="flex items-center justify-center gap-2">
  //               <Youtube className="w-5 h-5" />
  //               <h3 className="font-semibold">YouTube Downloader</h3>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </Link>
  //       {/* Facebook */}
  //       <Link href="/facebook-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
  //         <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
  //           <CardContent className="p-4 text-center">
  //             <div className="flex items-center justify-center gap-2">
  //               <Facebook className="w-5 h-5" />
  //               <h3 className="font-semibold">Facebook Downloader</h3>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </Link>
  //       {/* Instagram */}
  //       <Link href="/instagram-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
  //         <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
  //           <CardContent className="p-4 text-center">
  //             <div className="flex items-center justify-center gap-2">
  //               <Instagram className="w-5 h-5" />
  //               <h3 className="font-semibold">Instagram Saver</h3>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </Link>
  //     </div>
  //   ),
  //   [],
  // )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="font-medium whitespace-pre-line">{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-2 border-dashed">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Free Online Video Downloader</CardTitle>
          <CardDescription>
            Paste any video URL — our tool auto-detects the platform and downloads instantly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="url">Video URL</Label>
              <div className="flex gap-2">
                <Input
                  id="url"
                  ref={inputRef}
                  type="url"
                  placeholder="Paste any video URL here..."
                  value={url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="flex-1"
                />
                <Button type="button" variant="outline" onClick={handlePaste} className="px-3">
                  Paste
                </Button>
              </div>

              {urlValidation && (
                <div className="flex items-center gap-2 text-sm">
                  {urlValidation.isValid ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-600">{urlValidation.message}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-red-600">{urlValidation.message}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <Button
              type="button"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
              disabled
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" /> Auto Processing...
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && <VideoResult data={result} />}

      {/* <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Prefer Dedicated Tools?</CardTitle>
          <CardDescription>Check out platform-specific downloaders</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">{platformCards}</CardContent>
      </Card> */}
    </div>
  )
})

export { UniversalDownloader }
