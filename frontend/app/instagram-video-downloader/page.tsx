import { PlatformDownloader } from "@/components/platform-downloader"
import { Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import Head from "next/head"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    url: "https://freevideodownloader.co/instagram-video-downloader",
    siteName: "FreeVideoDownloader.co",
    images: [
      {
        url: "https://freevideodownloader.co/images/instagram-downloader-og-image.png",
        width: 1200,
        height: 630,
        alt: "Instagram Video Downloader - Save IG Videos, Reels & Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Instagram Videos FREE: Reels, Stories, IGTV in HD",
    description:
      "Save Instagram Reels, Stories, and IGTV videos in HD quality, without watermarks. Free & fast Insta video downloader.",
    images: ["https://freevideodownloader.co/images/instagram-downloader-og-image.png"],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/instagram-video-downloader",
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

export default function InstagramPage() {
  return (
    <>
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

            {/* About Instagram Video Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">About Our Instagram Video Downloader</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Instagram is the most popular social media platform in this era for teens and young adults, and
                    Instagram has a distinct identity compared to other social media platforms. Most of the time, when
                    we are scrolling through the Instagram feed, we find some stunning and interesting Instagram videos
                    and wish we could save them to our mobile phone gallery and watch them offline whenever we want. We
                    get stuck in a problem because Instagram doesn't allow direct downloading of any Instagram video,
                    reel, or story without a watermark.
                  </p>
                  <br />
                  <p className="text-muted-foreground leading-relaxed">
                    Now, in this modern era, we introduce{" "}
                    <strong>Instagram Video Downloader by freevideodownloader.co</strong>. We designed this tool with
                    the user's perspective in mind, where our valuable users can download Instagram public and private
                    videos quickly, safely, fast, and securely in HD quality. Our Instagram Video Downloader is totally
                    free, unlimited, and there is no need to create an account — without login/signup, users can use it
                    easily.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is the Instagram video download tool available at no cost?</AccordionTrigger>
                  <AccordionContent>
                    Yes, this Instagram video download service is 100% free of charge. Users can access all features
                    without any hidden fees or subscriptions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to register to use the Instagram video downloader?</AccordionTrigger>
                  <AccordionContent>
                    No sign-up or registration is required. Anyone can visit the platform and begin downloading
                    Instagram videos instantly without creating an account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What resolutions are supported for Instagram video downloads?</AccordionTrigger>
                  <AccordionContent>
                    The tool supports video downloads in multiple resolutions, including Full HD (1080p) and Ultra HD
                    (4K), depending on the source video quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can the tool download both public and private Instagram videos?</AccordionTrigger>
                  <AccordionContent>
                    Yes, it allows downloads from public profiles and private content only if the user has authorized
                    access. Always ensure proper permissions before downloading private media.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Do downloaded Instagram videos contain watermarks?</AccordionTrigger>
                  <AccordionContent>
                    No watermarks are added to the downloaded files. You receive clean, original-quality videos without
                    any branding or overlay.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Is there a restriction on the number of Instagram videos I can download?
                  </AccordionTrigger>
                  <AccordionContent>
                    There are no daily or monthly limits. Users can download unlimited videos from Instagram without any
                    usage caps.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What is the process for downloading videos from Instagram?</AccordionTrigger>
                  <AccordionContent>
                    Copy the Instagram video URL, paste it into the downloader input field, and click the download
                    button. The video will be ready for saving within moments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Is using this Instagram video downloader secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the tool follows secure browsing practices, and no personal data or download history is stored.
                    Your privacy is respected at all times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>
                    Can downloaded Instagram videos be reused for commercial projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    All content rights remain with the original creators. For commercial or public use, ensure you have
                    the appropriate licenses or permissions from the video owner.
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
