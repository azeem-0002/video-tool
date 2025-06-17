import { PlatformDownloader } from "@/components/platform-downloader"
import { Download } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

const metadata: Metadata = {
  title: "TikTok Video Downloader - Free No Watermark MP4 & MP3 TikTok Saver (HD)",
  description:
    "Free TikTok Downloader: Download TikTok videos, Stories, and Slideshows in HD MP4 (no watermark) or convert to MP3. Works fast on Android, iOS, and PC. Secure & easy to use!",
  keywords:
    "TikTok video downloader, download TikTok videos, TikTok no watermark, TikTok MP4 download, TikTok to MP3 converter, HD TikTok, TikTok saver, TikTok story download, TikTok slideshow download, free TikTok downloader",
  openGraph: {
    title: "TikTok Video Downloader - Free No Watermark MP4 & MP3 TikTok Saver (HD)",
    description:
      "Download TikTok videos in HD MP4 without watermark or convert to MP3, absolutely free. Supports Android, iOS, & PC. Fast, secure, and no login required.",
    type: "website",
    url: "https://freevideodownloader.co/tiktok", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/tiktok-downloader-og-image.jpg", // Create a relevant image for TikTok
        width: 1200,
        height: 630,
        alt: "TikTok Video Downloader - Save TikTok Videos No Watermark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download TikTok Videos FREE - No Watermark MP4 & MP3",
    description: "Get TikTok videos in HD MP4 without watermark. Convert TikTok to MP3. Works on all devices, fast & free.",
    images: [
      "https://freevideodownloader.co/images/tiktok-downloader-twitter-card.jpg", // Create a relevant image for TikTok
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/tiktok", // Ensure this is your actual domain
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

export default function TikTokPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black dark:bg-white mb-4">
            <Download className="w-8 h-8 text-white dark:text-black" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Download TikTok Videos in HD – No Watermark, MP3 & MP4 Formats</h1>
          <p className="text-muted-foreground">
            Save your favorite TikTok videos in full HD with no watermark. Use our fast and secure downloader for MP4 or
            MP3 conversions, without needing apps or logins.
          </p>
        </div>

        <PlatformDownloader
          platform="tiktok"
          endpoint="/api/tiktok"
          placeholder="https://www.tiktok.com/@username/video/..."
        />

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          {/* Why Choose */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Why Choose This TikTok Downloader?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>No Watermark: Clean video files</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Convert to MP3 audio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Works on iOS, Android, PC, Mac</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Supports Slideshows, Reels, Stories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Bulk download & creator profile tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Secure: No logs or data saved</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Supported Content */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Supported TikTok Content</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>🎞 Trending videos and loops</li>
                    <li>🖼️ Slideshows and photo mode</li>
                    <li>📺 Live videos (public only)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>📚 Stories and short clips</li>
                    <li>👤 Full profile batch download</li>
                    <li>🎵 Audio extraction to MP3</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Download */}
          <section>
            <h2 className="text-2xl font-bold mb-6">How to Download TikTok Videos</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">1</Badge>
                    <span>Copy the TikTok video link</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">2</Badge>
                    <span>Paste it in the box above</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">3</Badge>
                    <span>Click Download and select MP4 or MP3</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">4</Badge>
                    <span>Save and watch offline instantly</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>
          <section className="max-w-3xl mx-auto px-4 py-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions – TikTok Video Downloader
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  1. What is a TikTok video downloader and how does it work?
                </AccordionTrigger>
                <AccordionContent>
                  A TikTok video downloader is a free online tool that lets you
                  download videos directly from TikTok to your device. Simply
                  copy the video URL, paste it into the downloader input box,
                  and click the download button—no app or software required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. Is the TikTok video downloader free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our TikTok video downloader is completely free. You can
                  save unlimited videos without any cost, subscription, or
                  registration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  3. Do I need to sign up or create an account to download
                  TikTok videos?
                </AccordionTrigger>
                <AccordionContent>
                  No account is needed. Our service is instant and accessible to
                  everyone without requiring sign-up or login.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  4. Can I download TikTok videos in high quality, including 4K
                  resolution?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our downloader supports video resolutions up to
                  4K, ensuring you get the highest possible quality when
                  available from the original source.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  5. Can I download TikTok videos without the watermark?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can download TikTok videos without the watermark.
                  This allows for a cleaner viewing or sharing experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  6. Are there any limits on how many videos I can download?
                </AccordionTrigger>
                <AccordionContent>
                  There are no restrictions—you can download as many TikTok
                  videos as you want, anytime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  7. Which video formats are supported for download?
                </AccordionTrigger>
                <AccordionContent>
                  Videos are typically available in MP4 format, which is widely
                  compatible with mobile devices, tablets, and desktops.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  8. Is your TikTok downloader tool safe and secure?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our tool is completely safe. We don’t collect or store
                  user data, and the site is regularly scanned to be free from
                  malware or harmful software.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>
                  9. Can I download videos from private TikTok accounts?
                </AccordionTrigger>
                <AccordionContent>
                  No, for privacy reasons, you can only download videos that are
                  publicly accessible on TikTok.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>
                  10. What should I do if the TikTok video download fails?
                </AccordionTrigger>
                <AccordionContent>
                  If your download doesn’t work, check your internet connection,
                  refresh the page, or try a different video link. If the
                  problem continues, contact our support team for help.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Trusted by Million of Users</h2>
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
