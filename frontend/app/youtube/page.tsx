import { PlatformDownloader } from "@/components/platform-downloader"
import { Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YouTube Video Downloader - Free MP4 & MP3 YouTube Saver (HD, 4K)",
  description:
    "Free YouTube Downloader: Download YouTube videos in various qualities (HD, 4K, 1080p) to MP4 or convert to MP3. Fast, secure, and no software or watermark needed. Compatible with all devices!",
  keywords:
    "YouTube video downloader, download YouTube videos, YouTube MP4 download, YouTube to MP3 converter, free YouTube downloader, HD YouTube video, 4K YouTube download, YouTube saver, best YouTube downloader",
  openGraph: {
    title: "YouTube Video Downloader - Free MP4 & MP3 YouTube Saver (HD, 4K)",
    description:
      "Download YouTube videos instantly in HD, 4K, or 1080p MP4, or convert to MP3. Our free tool is fast, secure, and requires no software or registration.",
    type: "website",
    url: "https://freevideodownloader.co/youtube", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/youtube-downloader-og-image.jpg", // Create a relevant image for YouTube
        width: 1200,
        height: 630,
        alt: "YouTube Video Downloader - Save YouTube Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download YouTube Videos FREE - MP4 & MP3 in HD/4K",
    description: "Get YouTube videos in HD, 4K, or 1080p MP4, or convert to MP3. Fast, free, and no software needed.",
    images: [
      "https://freevideodownloader.co/images/youtube-downloader-twitter-card.jpg", // Create a relevant image for YouTube
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/youtube", // Ensure this is your actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function YouTubePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
            <Youtube className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Free YouTube Video Downloader – Download MP4 & MP3 in HD</h1>
          <p className="text-muted-foreground">
            Download your favorite YouTube videos instantly in HD or MP3 format. Fast, secure, no software needed, and
            no watermarks.
          </p>
        </div>

        <PlatformDownloader
          platform="youtube"
          endpoint="/api/youtube"
          placeholder="https://www.youtube.com/watch?v=..."
        />

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          {/* Why Use Our YouTube Downloader */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Why Use Our YouTube Downloader?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>HD & 4K video downloads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Convert to MP3 audio (128–320kbps)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Fully online – no installation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Works on iOS, Android, Windows, macOS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Free and secure – no tracking, no ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Multiple quality options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Available Formats */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Available Formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Video Formats (MP4)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• 360p (Standard Quality)</li>
                    <li>• 480p (Good Quality)</li>
                    <li>• 720p (HD)</li>
                    <li>• 1080p (Full HD)</li>
                    <li>• 4K UHD (Ultra HD)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Audio Formats (MP3)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• 128kbps (Standard)</li>
                    <li>• 192kbps (Good)</li>
                    <li>• 256kbps (High)</li>
                    <li>• 320kbps (Premium)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Download */}
          <section>
            <h2 className="text-2xl font-bold mb-6">How to Download</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">1</Badge>
                    <span>Copy the video URL from YouTube</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">2</Badge>
                    <span>Paste it in the box above</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">3</Badge>
                    <span>Select format: MP4 or MP3</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">4</Badge>
                    <span>Click "Download" to begin</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>
          <section className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions – YouTube Video Downloader</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">1. What is a YouTube video downloader?</h3>
          <p>It lets you save YouTube videos directly to your device, supporting resolutions up to 4K.</p>
        </div>
        <div>
          <h3 className="font-semibold">2. Is there any cost involved in using the tool?</h3>
          <p>No, it’s totally free with no subscription required.</p>
        </div>
        <div>
          <h3 className="font-semibold">3. Is user registration required?</h3>
          <p>No login or account is needed.</p>
        </div>
        <div>
          <h3 className="font-semibold">4. What video resolutions are supported?</h3>
          <p>Supports SD, HD, Full HD, and 4K if the source video allows.</p>
        </div>
        <div>
          <h3 className="font-semibold">5. Can I save private video links?</h3>
          <p>Only if you have proper access permissions.</p>
        </div>
        <div>
          <h3 className="font-semibold">6. Are there watermarks on downloaded videos?</h3>
          <p>No watermark or branding is added.</p>
        </div>
        <div>
          <h3 className="font-semibold">7. Are there limits on the number of downloads?</h3>
          <p>No download limits.</p>
        </div>
        <div>
          <h3 className="font-semibold">8. Which file types are available?</h3>
          <p>Formats like MP4 and WEBM are supported.</p>
        </div>
        <div>
          <h3 className="font-semibold">9. Do I need to install anything?</h3>
          <p>No, it’s browser-based. No installation required.</p>
        </div>
        <div>
          <h3 className="font-semibold">10. Is downloading YouTube videos allowed?</h3>
          <p>Only download content you’re authorized to use. Respect copyright laws.</p>
        </div>
      </div>
    </section>

          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Trusted by Users</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                20,000+ Users
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                100% Secure
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                No Watermarks
              </Badge>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
