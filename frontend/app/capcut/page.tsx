import type { Metadata } from "next"
import { PlatformDownloader } from "@/components/platform-downloader"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "CapCut Video Downloader – Download CapCut Templates & Videos Free",
  description:
    "Download CapCut template videos and shared content for free. Save CapCut creations in HD MP4 format. No watermark, no login required. Works on all devices.",
  keywords: "CapCut downloader, CapCut template download, CapCut video saver, CapCut templates free",
  openGraph: {
    title: "CapCut Video Downloader – Download CapCut Templates & Videos Free",
    description: "Download CapCut template videos and shared content for free. Save CapCut creations in HD MP4 format.",
    type: "website",
    url: "https://your-domain.com/capcut",
  },
  twitter: {
    card: "summary_large_image",
    title: "CapCut Video Downloader – Save Templates & Videos Free",
    description:
      "Download CapCut templates and videos without watermark. Save editing templates for your own projects.",
  },
  alternates: {
    canonical: "https://your-domain.com/capcut",
  },
}

export default function CapCutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">CapCut Video Downloader</h1>
          <p className="text-muted-foreground">Download CapCut template videos and shared content.</p>
        </div>

        <PlatformDownloader
          platform="capcut"
          endpoint="/api/capcut"
          placeholder="https://www.capcut.com/template/..."
        />
      </div>
    </div>
  )
}
