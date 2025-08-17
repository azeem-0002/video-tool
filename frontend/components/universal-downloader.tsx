"use client"

import type React from "react"
import { useState, useRef, memo, useCallback, useEffect } from "react"
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
  const [hydrated, setHydrated] = useState(false) // 🚀 hydration flag

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

        // 🚀 Auto-submit if valid + not already loading
        if (validation.isValid && hydrated && !loading) {
          handleSubmit(inputUrl)
        }
      } else {
        setUrlValidation(null)
      }
    },
    [validateUrl, handleSubmit, hydrated, loading],
  )

  // ✅ Hydration complete flag
  useEffect(() => {
    setHydrated(true)
  }, [])

  // ✅ If URL already available on hydration → auto submit
  useEffect(() => {
    if (hydrated && url.trim()) {
      const validation = validateUrl(url)
      if (validation.isValid && !loading) {
        handleSubmit(url)
      }
    }
  }, [hydrated]) // only once

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
    </div>
  )
})

export { UniversalDownloader }
