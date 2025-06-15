import { PlatformDownloader } from "@/components/platform-downloader"
import { Instagram } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Instagram Video Downloader: Save Reels, Stories & IGTV in HD - Free & No Watermark",
  description:
    "Free Instagram Video Downloader: Easily download Instagram videos, Reels, Stories, and IGTV in HD MP4. No watermark, no login, fast, and secure. Works on all devices (iOS & Android).",
  keywords:
    "Instagram video downloader, download Instagram videos, Instagram Reels download, Instagram Story saver, IGTV downloader, free Insta downloader, HD Instagram videos, no watermark Instagram, save IG videos",
  openGraph: {
    title: "Instagram Video Downloader: Save Reels, Stories & IGTV in HD - Free & No Watermark",
    description:
      "Download Instagram videos, Reels, Stories, and IGTV online for free. Get high-quality MP4s without watermarks or login. Fast and reliable Insta saver.",
    type: "website",
    url: "https://freevideodownloader.co/instagram", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/insta-downloader-og-image.jpg", // Create a relevant image for Instagram
        width: 1200,
        height: 630,
        alt: "Instagram Video Downloader - Save IG Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Instagram Videos FREE: Reels, Stories, IGTV in HD",
    description: "Save Instagram Reels, Stories, and IGTV videos in HD quality, without watermarks. Free & fast Insta video downloader.",
    images: [
      "https://freevideodownloader.co/images/insta-downloader-twitter-card.jpg", // Create a relevant image for Instagram
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/instagram", // Ensure this is your actual domain
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

export default function InstagramPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Download Instagram Videos, Reels, Stories & IGTV in HD</h1>
          <p className="text-muted-foreground">
            Use our <strong>free Instagram downloader</strong> to save videos, Reels, Stories, and IGTV clips in HD
            quality – no watermark or login needed.
          </p>
        </div>

        <PlatformDownloader
          platform="instagram"
          endpoint="/api/instagram"
          placeholder="https://www.instagram.com/p/..."
        />

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Features of Our Instagram Downloader</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>HD Quality for videos and photos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Supports Reels, Stories, IGTV, and more</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Works on iOS, Android, and desktop</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>No watermark, no ads in media</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Secure and private – no data collected</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Fast processing and downloads</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Steps to Download */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Steps to Download Instagram Content</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">1</Badge>
                    <span>Copy the public Instagram post link</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">2</Badge>
                    <span>Paste it in the box above</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">3</Badge>
                    <span>Click "Download" and save the file</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Supported Content Types */}
          <section>
            <h2 className="text-2xl font-bold mb-6">What Can You Download?</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>📱 Instagram Reels (short videos)</li>
                    <li>📖 Stories (24-hour content)</li>
                    <li>📺 IGTV (long-form videos)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>📷 Photo posts and carousels</li>
                    <li>🎬 Video posts and clips</li>
                    <li>✨ Highlights and saved stories</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions – Instagram Video Downloader</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">1. Is the Instagram video downloader free to use?</h3>
          <p>Yes, it’s completely free. No hidden fees or registration required.</p>
        </div>
        <div>
          <h3 className="font-semibold">2. Do I need to register to use the tool?</h3>
          <p>No account needed. Just paste the link and download.</p>
        </div>
        <div>
          <h3 className="font-semibold">3. What resolutions are supported?</h3>
          <p>Supports Full HD and up to 4K if available.</p>
        </div>
        <div>
          <h3 className="font-semibold">4. Can I download both public and private Instagram videos?</h3>
          <p>Yes, but you must have access to the private video.</p>
        </div>
        <div>
          <h3 className="font-semibold">5. Are there watermarks on downloaded videos?</h3>
          <p>No. The videos are saved without branding or watermarks.</p>
        </div>
        <div>
          <h3 className="font-semibold">6. Are there limits on the number of downloads?</h3>
          <p>No limits. Download as much as you like.</p>
        </div>
        <div>
          <h3 className="font-semibold">7. How do I download a video from Instagram?</h3>
          <p>Copy the Instagram video URL, paste it into the downloader, and click download.</p>
        </div>
        <div>
          <h3 className="font-semibold">8. Is the downloader safe?</h3>
          <p>Yes. It’s secure and doesn’t store any personal data.</p>
        </div>
        <div>
          <h3 className="font-semibold">9. Can I reuse Instagram videos for commercial use?</h3>
          <p>Only with the appropriate rights or permission from the content owner.</p>
        </div>
      </div>
    </section>

          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Trusted by Thousands</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                10,000+ Active Users
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                No Personal Data Stored
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                Fast & Reliable
              </Badge>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
