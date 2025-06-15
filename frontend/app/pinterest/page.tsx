import type { Metadata } from "next"
import { PlatformDownloader } from "@/components/platform-downloader"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Pinterest Video Downloader – Save Pinterest Videos & Idea Pins in HD",
  description:
    "Download Pinterest videos and idea pins in high quality MP4 format. Free Pinterest video downloader with no watermark. Save recipe videos, DIY tutorials, and more.",
  keywords: "Pinterest video downloader, Pinterest pin saver, idea pins download, Pinterest video saver, recipe videos",
  openGraph: {
    title: "Pinterest Video Downloader – Save Pinterest Videos & Idea Pins in HD",
    description: "Download Pinterest videos and idea pins in high quality MP4 format. Free with no watermark.",
    type: "website",
    url: "https://your-domain.com/pinterest",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Video Downloader – Save Pins & Videos",
    description:
      "Download Pinterest videos, idea pins, and tutorials in HD quality. Perfect for saving DIY and recipe videos.",
  },
  alternates: {
    canonical: "https://your-domain.com/pinterest",
  },
}

export default function PinterestPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Pinterest Video Downloader</h1>
          <p className="text-muted-foreground">Download Pinterest videos and idea pins.</p>
        </div>

        <PlatformDownloader
          platform="pinterest"
          endpoint="/api/pinterest"
          placeholder="https://www.pinterest.com/pin/..."
        />
      </div>
    </div>
  )
}
