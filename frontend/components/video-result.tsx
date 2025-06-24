"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
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

export function VideoResult({ data }: VideoResultProps) {
  const [downloadingStates, setDownloadingStates] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    if (data) {
      // Small delay to ensure the component is fully rendered
      setTimeout(() => {
        const resultSection = document.getElementById("video-result-section")
        if (resultSection) {
          resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }
  }, [data])

  // Validate if URL is a proper string and looks like a valid URL
  const isValidUrl = (url: any): boolean => {
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
  }

  const handleDownload = async (url: string, filename: string, index: number) => {
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
  }

  const handlePreview = (url: string, format: string) => {
    if (!isValidUrl(url)) {
      toast.error("Invalid preview URL")
      return
    }

    const cleanUrl = url.toString().trim()

    if (format === "m3u8") {
      toast.info("HLS stream will open in new tab")
    }
    window.open(cleanUrl, "_blank", "noopener,noreferrer")
  }

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
      <Card className="overflow-hidden">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Valid Download Links</h3>
            <p className="text-muted-foreground">
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
    <Card className="overflow-hidden" id="video-result-section">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start gap-4">
          <div className="relative w-full sm:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={data.thumbnail || "/placeholder.svg"}
              alt={data.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=80&width=128"
              }}
            />
          </div>
          <div className="flex-1 min-w-0 mt-2 sm:mt-0">
            <h3 className="text-lg font-semibold line-clamp-2">{data.title}</h3>
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
                className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary">{link.quality}</Badge>
                  <span className="text-sm font-medium">{link.format.toUpperCase()}</span>
                  {link.format === "mp3" && (
                    <Badge variant="outline" className="text-xs">
                      Audio
                    </Badge>
                  )}
                  {link.format === "mp4" && (
                    <Badge variant="outline" className="text-xs">
                      Video
                    </Badge>
                  )}
                  {link.format === "m3u8" && (
                    <Badge variant="outline" className="text-xs">
                      Stream
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handlePreview(link.url, link.format)}
                    className="w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    {link.format === "m3u8" ? "Stream" : "Preview"}
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleDownload(link.url, `${data.title}.${link.format}`, index)
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={downloadingStates[index] || !link.url || !link.url.trim()}
                    aria-label={`Download ${link.quality} ${link.format.toUpperCase()} version`}
                  >
                    {downloadingStates[index] ? (
                      <>
                        <div className="h-4 w-4 mr-1 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span className="hidden sm:inline">Downloading...</span>
                        <span className="sm:hidden">...</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 <strong>Tip:</strong> If direct download doesn't work, try the Preview button to open the file in a new
              tab, then right-click and "Save as..."
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
