import { PlatformDownloader } from "@/components/platform-downloader"
import { Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import Head from "next/head"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    url: "https://freevideodownloader.co/youtube-video-downloader", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/youtube-downloader-og-image.png", // Create a relevant image for YouTube
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
      "https://freevideodownloader.co/images/youtube-downloader-og-image.png", // Create a relevant image for YouTube
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/youtube-video-downloader", // Ensure this is your actual domain
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
}

export default function YouTubePage() {
  return (
    <>
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

            {/* About YouTube Video Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">About YouTube Video Downloader</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    YouTube is the largest video sharing platform worldwide with the best user experience. Users can
                    upload, view, and share videos, but YouTube still lacks a video downloader feature directly into
                    users' devices. So, YouTube Video Downloader by freevideodownloader.co comes into service with its
                    unique and special tool through which users can download any videos from YouTube directly into their
                    devices with some simple clicks. YouTube Video Downloader is totally free, unlimited, and supports
                    different quality formats like MP3, MP4, 1080p, even 4K, working smoothly with all devices like Mac,
                    Android, and Windows. Our video downloader tool is totally ad-free and without any download limit.
                    That helps the user to save their time.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a YouTube video downloader?</AccordionTrigger>
                  <AccordionContent>
                    A YouTube video downloader is an online utility that enables users to save videos from YouTube
                    directly to their devices. This tool supports multiple resolutions, including high-definition
                    options up to 4K, depending on availability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there any cost involved in using the tool?</AccordionTrigger>
                  <AccordionContent>
                    No, this service is offered at no charge. Users can access all features without paying fees or
                    purchasing a subscription.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is user registration required?</AccordionTrigger>
                  <AccordionContent>
                    No account creation or login is necessary. You can start downloading videos right away without
                    providing any personal details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What video resolutions are supported?</AccordionTrigger>
                  <AccordionContent>
                    The downloader supports a variety of quality options, ranging from standard definition to ultra HD
                    (4K), based on the original video quality.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I save private video links?</AccordionTrigger>
                  <AccordionContent>
                    Videos marked as private can be downloaded only if you have authorized access. A valid link and
                    viewing rights are required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are there any watermarks on the downloaded files?</AccordionTrigger>
                  <AccordionContent>
                    No. Saved videos are provided in their original format without any added branding or watermarks.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Is there a limit on the number of videos I can download?</AccordionTrigger>
                  <AccordionContent>
                    There are no usage restrictions. You can download unlimited videos, as often as you like.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Which file types are available for download?</AccordionTrigger>
                  <AccordionContent>
                    Videos can be saved in multiple formats, including MP4 and WEBM, based on what's supported by the
                    source content and user preference.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Do I need to install any applications or browser extensions?</AccordionTrigger>
                  <AccordionContent>
                    No installation is required. The downloader works directly from your browser, offering a seamless
                    and software-free experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>Is downloading YouTube videos allowed?</AccordionTrigger>
                  <AccordionContent>
                    Saving content from YouTube may conflict with their Terms of Service. It's advised to download only
                    content for which you have permission or that is in the public domain. Always follow copyright
                    regulations in your region.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
