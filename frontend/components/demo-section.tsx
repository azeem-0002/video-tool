"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Play, Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const demoUrls = [
  {
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Popular music video",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@username/video/1234567890",
    description: "Trending TikTok video",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/p/ABC123/",
    description: "Instagram reel",
  },
]

export function DemoSection() {
  const [selectedUrl, setSelectedUrl] = useState("")

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    setSelectedUrl(url)
    toast.success("URL copied to clipboard!")
  }

  const handleTryDemo = (url: string) => {
    setSelectedUrl(url)
    // Scroll to downloader
    const downloaderSection = document.getElementById("downloader-section")
    if (downloaderSection) {
      downloaderSection.scrollIntoView({ behavior: "smooth" })
    }
    toast.info("URL ready! Paste it in the downloader above.")
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Try It Now</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test our video downloader with these sample URLs or use your own
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {demoUrls.map((demo, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">{demo.platform}</Badge>
                </CardTitle>
                <CardDescription>{demo.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input value={demo.url} readOnly className="text-xs" />
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleCopyUrl(demo.url)} className="flex-1">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button size="sm" onClick={() => handleTryDemo(demo.url)} className="flex-1">
                    <Play className="h-4 w-4 mr-1" />
                    Try
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedUrl && (
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Selected URL: <code className="bg-muted px-2 py-1 rounded text-xs">{selectedUrl}</code>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
