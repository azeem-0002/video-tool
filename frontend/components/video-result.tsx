"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, memo, useCallback } from "react"
import { toast } from "sonner"

interface VideoResultProps {
  data: {
    title: string
    thumbnail: string
    downloadLinks: Array<{
      quality: string
      url: string
      format: string
    }>
  }
}

// Memoize the component to prevent unnecessary re-renders
const VideoResult = memo(function VideoResult({ data }: VideoResultProps) {
  const [downloadingStates, setDownloadingStates] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    if (data) {
      // Small delay to ensure the component is fully rendered
      const timer = setTimeout(() => {
        const resultSection = document.getElementById("video-result-section")
        if (resultSection) {
          resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [data])

  // Validate if URL is a proper string and looks like a valid URL
  const isValidUrl = useCallback((url: any): boolean => {
    if (!url || typeof url !== "string" || url.trim() === "") {
      return false
    }

    try {
      // Check if it's a valid URL format
      new URL(url)
      return true
    } catch {
      // If it's not a full URL, check if it looks like a relative path or has common video extensions
      const urlStr = url.toString().trim()
      return urlStr.length > 0 && (urlStr.startsWith("http") || urlStr.startsWith("/") || urlStr.includes("."))
    }
  }, [])

  const handleDownload = useCallback(
    async (url: string, filename: string, index: number) => {
      try {
        console.log("Download button clicked:", { url, filename, index })

        setDownloadingStates((prev) => ({ ...prev, [index]: true }))

        if (!url || typeof url !== "string" || url.trim() === "") {
          throw new Error("Invalid download URL")
        }

        const cleanUrl = url.toString().trim()
        const sanitizedTitle = data.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()
        const extension = cleanUrl.includes(".mp3") ? "mp3" : cleanUrl.includes(".m3u8") ? "m3u8" : "mp4"
        const finalFilename = `${sanitizedTitle}_${Date.now()}.${extension}`

        // For HLS streams, open in new tab
        if (cleanUrl.includes(".m3u8")) {
          window.open(cleanUrl, "_blank", "noopener,noreferrer")
          toast.success("Stream opened in new tab")
          return
        }

        // Check if this is a Twitter/X video (special handling needed)
        const isTwitterVideo =
          cleanUrl.includes("video.twimg.com") ||
          cleanUrl.includes("pbs.twimg.com") ||
          cleanUrl.includes("twitter.com") ||
          cleanUrl.includes("x.com")

        if (isTwitterVideo) {
          // For Twitter videos, use direct link method first
          try {
            console.log("Handling Twitter video download")

            // Create a temporary anchor element for download
            const link = document.createElement("a")
            link.href = cleanUrl
            link.download = finalFilename
            link.target = "_blank"
            link.rel = "noopener noreferrer"

            // Add to DOM temporarily
            link.style.display = "none"
            document.body.appendChild(link)

            // Trigger download
            link.click()

            // Clean up
            document.body.removeChild(link)

            toast.success("Twitter video download started!")
            return
          } catch (twitterError) {
            console.log("Twitter direct download failed, trying alternative")

            // Fallback: Open in new tab with download instructions
            window.open(cleanUrl, "_blank", "noopener,noreferrer")
            toast.info("Video opened in new tab. Right-click and select 'Save video as...' to download", {
              duration: 6000,
            })
            return
          }
        }

        // For non-Twitter videos, try fetch method first
        try {
          console.log("Attempting fetch download for non-Twitter video")

          const response = await fetch(cleanUrl, {
            method: "GET",
            headers: {
              Accept: "*/*",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            },
            mode: "cors",
          })

          if (response.ok) {
            const blob = await response.blob()
            console.log("Blob created successfully, size:", blob.size)

            // Create download URL and trigger download
            const downloadUrl = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = downloadUrl
            link.download = finalFilename
            link.style.display = "none"

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            // Cleanup
            setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000)

            toast.success("Video download started!")
            return
          } else {
            console.log("Fetch failed with status:", response.status)
          }
        } catch (fetchError) {
          console.log("Fetch method failed:", fetchError)
        }

        // Fallback method: Direct download link
        try {
          console.log("Trying direct download link method")

          const link = document.createElement("a")
          link.href = cleanUrl
          link.download = finalFilename
          link.target = "_blank"
          link.rel = "noopener noreferrer"
          link.style.display = "none"

          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          toast.success("Download initiated!")
          return
        } catch (directError) {
          console.log("Direct download failed:", directError)
        }

        // Final fallback: Open in new tab
        console.log("All download methods failed, opening in new tab")
        window.open(cleanUrl, "_blank", "noopener,noreferrer")
        toast.info("Video opened in new tab. Right-click and select 'Save video as...' to download", {
          duration: 6000,
        })
      } catch (error) {
        console.error("Download error:", error)
        toast.error(`Download failed: ${error instanceof Error ? error.message : "Unknown error"}`)
      } finally {
        setDownloadingStates((prev) => ({ ...prev, [index]: false }))
      }
    },
    [data.title],
  )

  const handlePreview = useCallback(
    (url: string, format: string) => {
      if (!isValidUrl(url)) {
        toast.error("Invalid preview URL")
        return
      }

      const cleanUrl = url.toString().trim()

      if (format === "m3u8") {
        toast.info("HLS stream will open in new tab")
      }
      window.open(cleanUrl, "_blank", "noopener,noreferrer")
    },
    [isValidUrl],
  )

  // Filter out invalid download links
  const validDownloadLinks = data.downloadLinks.filter((link) => {
    const isValid = isValidUrl(link.url)
    if (!isValid) {
      console.warn("Filtering out invalid download link:", link)
    }
    return isValid
  })

  if (validDownloadLinks.length === 0) {
    return (
      <Card className="overflow-hidden contain-paint">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Valid Download Links</h3>
            <p className="text-muted-foreground text-pretty">
              The video was processed but no valid download links were found. This might be due to:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• Video format not supported</li>
              <li>• Private or restricted content</li>
              <li>• Temporary server issues</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden contain-paint" id="video-result-section">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start gap-4">
          <div className="relative w-full sm:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={data.thumbnail || "/placeholder.svg"}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 128px"
              priority={false}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=80&width=128"
              }}
            />
          </div>
          <div className="flex-1 min-w-0 mt-2 sm:mt-0">
            <h3 className="text-lg font-semibold line-clamp-2 text-balance">{data.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600 font-medium">Ready to download</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Download Options</h4>
          <div className="grid gap-3">
            {validDownloadLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors contain-paint"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary">{link.quality}</Badge>
                  <span className="text-sm font-medium">{link.format.toUpperCase()}</span>
                  {link.format === "mp3" && (
                    <Badge variant="outline" className="text-xs">
                      Audio
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {link.url.length > 50 ? link.url.substring(0, 50) + "..." : link.url}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePreview(link.url, link.format)}
                      className="px-3 py-1.5 text-sm rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(link.url, data.title, index)}
                      className="px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={downloadingStates[index]}
                    >
                      {downloadingStates[index] ? "Downloading..." : "Download"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

export { VideoResult }
export default VideoResult
