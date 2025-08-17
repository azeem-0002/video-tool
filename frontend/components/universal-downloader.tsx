"use client"

import type React from "react"

import { useState, useRef, memo, useCallback, useMemo, useEffect } from "react"
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
} from "lucide-react"
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

// Memoize the component to prevent unnecessary re-renders
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

  // 🆕 Hydration detection
  const [isClient, setIsClient] = useState(false)
  const [queuedUrl, setQueuedUrl] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
    // अगर hydration complete होते ही koi queued URL है → auto submit
    if (queuedUrl) {
      handleSubmit(new Event("submit") as any)
      setQueuedUrl(null)
    }
  }, [queuedUrl])

  // Memoize platform detection function
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

  // Memoize URL validation function
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

  // 🆕 handleUrlChange with queuedUrl
  const handleUrlChange = useCallback(
    (inputUrl: string) => {
      setUrl(inputUrl)
      setError("")
      setResult(null)

      if (inputUrl.trim()) {
        const validation = validateUrl(inputUrl)
        setUrlValidation(validation)

        // hydration से पहले paste हुआ URL → queue कर दो
        if (!isClient) {
          setQueuedUrl(inputUrl)
        }
      } else {
        setUrlValidation(null)
      }
    },
    [validateUrl, isClient],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

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
        const response = await fetch("/api/universal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        })

        if (!response.ok) {
          const responseText = await response.text()
          let errorMessage = "Failed to process video"
          try {
            const errorData = JSON.parse(responseText)
            errorMessage = errorData.error || errorMessage
          } catch {
            errorMessage = responseText || errorMessage
          }
          throw new Error(errorMessage)
        }

        const apiResponse = await response.json()
        if (!apiResponse.success) throw new Error(apiResponse.error || "Failed to process video")
        if (!apiResponse.data) throw new Error("No video data received from the server.")

        const transformedData = transformBackendResponse(apiResponse.data, platform)

        if (!transformedData.downloadLinks || transformedData.downloadLinks.length === 0) {
          throw new Error(`Unable to extract download links from this ${platform} video.`)
        }

        const validLinks = transformedData.downloadLinks.filter((link) => link.url && link.url.trim())
        if (validLinks.length === 0) {
          throw new Error(`No valid download URLs found for this ${platform} video.`)
        }

        setResult({ ...transformedData, downloadLinks: validLinks })
        toast.success(`${platform.charAt(0).toUpperCase() + platform.slice(1)} video processed successfully!`)
      } catch (err) {
        let errorMessage = "An unexpected error occurred"
        if (err instanceof Error) errorMessage = err.message
        setError(errorMessage)
        toast.error("Failed to process video")
      } finally {
        setLoading(false)
      }
    },
    [url, validateUrl],
  )

  // Paste button handler
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
    } catch { }

    toast.info("Please paste the URL manually by long-pressing the input field")
  }, [handleUrlChange])

  // platformCards unchanged...
  const platformCards = useMemo(
    () => (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto place-items-center">
        {/* TikTok */}
        <Link href="/tiktok-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-black dark:hover:border-white bg-gradient-to-r from-gray-900 to-black text-white contain-paint">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold">TikTok Downloader</h3>
            </CardContent>
          </Card>
        </Link>
        {/* YouTube */}
        <Link href="/youtube-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-red-500 bg-gradient-to-r from-red-500 to-red-600 text-white contain-paint">
            <CardContent className="p-4 text-center flex items-center justify-center gap-2">
              <Youtube className="w-5 h-5" />
              <h3 className="font-semibold">YouTube Downloader</h3>
            </CardContent>
          </Card>
        </Link>
        {/* Facebook */}
        <Link href="/facebook-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 text-white contain-paint">
            <CardContent className="p-4 text-center flex items-center justify-center gap-2">
              <Facebook className="w-5 h-5" />
              <h3 className="font-semibold">Facebook Downloader</h3>
            </CardContent>
          </Card>
        </Link>
        {/* Instagram */}
        <Link href="/instagram-video-downloader" className="block w-full" onClick={() => window.scrollTo(0, 0)}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white contain-paint">
            <CardContent className="p-4 text-center flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" />
              <h3 className="font-semibold">Instagram Saver</h3>
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
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Free Online Video Downloader</CardTitle>
          <CardDescription>
            Paste any video URL from any website - our professional video downloader auto-detects the platform for instant online video download
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
                  placeholder="Paste any video URL..."
                  value={url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="flex-1"
                />
                <Button type="button" variant="outline" onClick={handlePaste}>
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

            {/* 🔥 Button no longer waits for hydration */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
              disabled={loading || !url || (urlValidation && !urlValidation.isValid)}
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
        <p className="text-xl text-muted-foreground">
          Universal video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter and more.
        </p>
      </div>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Prefer Dedicated Tools?</CardTitle>
          <CardDescription>Check out our platform-specific downloaders</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">{platformCards}</CardContent>
      </Card>
    </div>
  )
})

export { UniversalDownloader }
