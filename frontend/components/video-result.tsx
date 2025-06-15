"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
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
      setDownloadingStates((prev) => ({ ...prev, [index]: true }))

      console.log("Download URL received:", url, "Type:", typeof url)

      // Validate URL
      if (!isValidUrl(url)) {
        console.error("Invalid URL:", url)
        throw new Error(`Invalid download URL: ${url}`)
      }

      // Ensure URL is a string and trim whitespace
      const cleanUrl = url.toString().trim()

      // Create a proper filename
      const sanitizedTitle = data.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()
      const extension = cleanUrl.includes(".mp3") ? "mp3" : cleanUrl.includes(".m3u8") ? "m3u8" : "mp4"
      const finalFilename = `${sanitizedTitle}_${Date.now()}.${extension}`

      if (cleanUrl.includes(".m3u8")) {
        // For HLS streams, open in new tab
        window.open(cleanUrl, "_blank", "noopener,noreferrer")
        toast.success("HLS stream opened in new tab")
      } else {
        // For direct video/audio files, try to download
        try {
          const response = await fetch(cleanUrl, {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          })

          if (response.ok) {
            const blob = await response.blob()
            const downloadUrl = window.URL.createObjectURL(blob)

            const link = document.createElement("a")
            link.href = downloadUrl
            link.download = finalFilename
            link.style.display = "none"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            // Clean up the blob URL
            setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100)

            toast.success("Download started successfully!")
          } else {
            throw new Error("Failed to fetch file")
          }
        } catch (fetchError) {
          console.log("Direct download failed, trying fallback method")
          // Fallback: try direct link download
          const link = document.createElement("a")
          link.href = cleanUrl
          link.download = finalFilename
          link.target = "_blank"
          link.rel = "noopener noreferrer"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          toast.success("Download link opened!")
        }
      }
    } catch (error) {
      console.error("Download failed:", error)
      toast.error(`Download failed: ${error instanceof Error ? error.message : "Unknown error"}`)

      // Final fallback: try to open in new tab if URL seems valid
      if (url && typeof url === "string" && url.trim().length > 0) {
        try {
          window.open(url.toString().trim(), "_blank", "noopener,noreferrer")
          toast.info("Opened download link in new tab as fallback")
        } catch (openError) {
          console.error("Failed to open URL:", openError)
          toast.error("Unable to process download URL")
        }
      }
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
    <Card className="overflow-hidden">
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
                    onClick={() => handleDownload(link.url, `${data.title}.${link.format}`, index)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full"
                    disabled={downloadingStates[index]}
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
