import { PlatformDownloader } from "@/components/platform-downloader"
import { Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)",
  description:
    "Download Facebook videos, Reels, Stories, and Live streams in HD quality — absolutely free and with no watermark. Our FB video downloader works online on any device – fast and secure!",
  keywords:
    "Facebook video downloader, download Facebook videos, FB video download, Facebook Reels download, Facebook Stories saver, free Facebook downloader, HD Facebook videos, no watermark Facebook, save FB videos",
  openGraph: {
    title: "Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)",
    description:
      "Download Facebook videos, Reels, Stories, and Live streams in HD quality — absolutely free and with no watermark. Our FB video downloader works online on any device – fast and secure!",
    type: "website",
    url: "https://freevideodownloader.co/facebook-video-downloader",
    siteName: "FreeVideoDownloader.co",
    images: [
      {
        url: "https://freevideodownloader.co/images/facebook-downloader-og-image.png",
        width: 1200,
        height: 630,
        alt: "Facebook Video Downloader - Save FB Videos, Reels & Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Facebook Videos FREE: Reels, Stories, Live in HD",
    description:
      "Save Facebook Reels, Stories, and Live streams in HD quality, without watermarks. Free & fast FB video downloader.",
    images: ["https://freevideodownloader.co/images/facebook-downloader-og-image.png"],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/facebook-video-downloader",
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

export default function FacebookPage() {
  // Structured Data Schemas
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)",
    url: "https://freevideodownloader.co/facebook-video-downloader",
    description:
      "Download Facebook videos, Reels, Stories, and Live streams in HD quality — absolutely free and with no watermark. Our FB video downloader works online on any device – fast and secure!",
    inLanguage: "en",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://freevideodownloader.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Facebook Video Downloader",
        item: "https://freevideodownloader.co/facebook-video-downloader",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Facebook Video Downloader Tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Facebook Video Downloader is a web-based utility that lets users save videos directly from Facebook to their device. It supports high-resolution downloads (including HD and 4K), allowing offline viewing without internet access.",
        },
      },
      {
        "@type": "Question",
        name: "Is Using the Facebook Video Downloader Free of Charge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the tool is 100% free to use. There are no hidden fees, subscriptions, or sign-up requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do I Need to Register or Log In to Use It?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No account creation or login is required. Simply copy the Facebook video link, paste it into the downloader, and initiate the download.",
        },
      },
      {
        "@type": "Question",
        name: "What Video Resolutions Can I Download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Available resolutions include SD, HD, Full HD, and up to 4K (if the original video supports it). The tool adjusts to provide the best available quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can I Download Private Facebook Videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can download private videos, but only if you have access or permission to view them. This ensures ethical use and respects content ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Are There Limits to the Number of Videos I Can Download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are no daily limits or restrictions. Users can download unlimited Facebook videos without any throttling or charges.",
        },
      },
      {
        "@type": "Question",
        name: "Will the Downloaded Videos Have Any Watermarks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All video downloads are watermark-free, ensuring clean and original content playback.",
        },
      },
      {
        "@type": "Question",
        name: "In What File Format Will the Video Be Saved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Videos are saved in MP4 format, which is widely compatible with smartphones, tablets, desktops, and most media players.",
        },
      },
      {
        "@type": "Question",
        name: "How Do I Save a Facebook Video to My Device?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Copy the video URL from Facebook. Paste the link into the download input field. Select your preferred resolution. Click 'Download' to begin saving the video.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Facebook Downloader Safe and Private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The downloader respects user privacy. It does not collect personal data or store download history. All downloads are processed anonymously.",
        },
      },
    ],
  }

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Download Facebook Videos, Reels, Stories & Live Streams in HD</h1>
            <p className="text-muted-foreground">
              Use our <strong>free Facebook downloader</strong> to save videos, Reels, Stories, and Live streams in HD
              quality – no watermark or login needed.
            </p>
          </div>

          <PlatformDownloader platform="facebook" endpoint="/api/facebook" placeholder="https://www.facebook.com/..." />

          {/* SEO Content */}
          <div className="mt-16 space-y-12">
            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Features of Our Facebook Downloader</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>HD Quality up to 4K resolution</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Supports Reels, Stories, Live streams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Works on all devices and browsers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>No watermark, clean downloads</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Secure and private – no data stored</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Fast processing and unlimited use</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Steps to Download */}
            <section>
              <h2 className="text-2xl font-bold mb-6">How to Download Facebook Videos</h2>
              <Card>
                <CardContent className="pt-6">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">1</Badge>
                      <span>Copy the Facebook video URL</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">2</Badge>
                      <span>Paste it in the downloader above</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">3</Badge>
                      <span>Select quality and click "Download"</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Supported Content Types */}
            <section>
              <h2 className="text-2xl font-bold mb-6">What Can You Download from Facebook?</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>📱 Facebook Reels (short videos)</li>
                      <li>📖 Stories (24-hour content)</li>
                      <li>📺 Regular video posts</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>🔴 Live streams and broadcasts</li>
                      <li>🎬 Video clips and compilations</li>
                      <li>📹 User-generated content</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* About Facebook Video Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">About Our Facebook Video Downloader</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Facebook is one of the world's largest social media platforms, hosting billions of videos, Reels,
                    Stories, and Live streams. Often, users come across interesting content they'd like to save for
                    offline viewing or sharing. However, Facebook doesn't provide a direct download option for videos.
                  </p>
                  <br />
                  <p className="text-muted-foreground leading-relaxed">
                    Our <strong>Facebook Video Downloader by freevideodownloader.co</strong> solves this problem by
                    providing a fast, secure, and free way to download Facebook videos in high quality. Whether it's a
                    funny Reel, an informative video, or a memorable Live stream, you can save it to your device with
                    just a few clicks. No registration required, no watermarks added, and completely free to use.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a Facebook Video Downloader Tool?</AccordionTrigger>
                  <AccordionContent>
                    A Facebook Video Downloader is a web-based utility that lets users save videos directly from
                    Facebook to their device. It supports high-resolution downloads (including HD and 4K), allowing
                    offline viewing without internet access.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Is Using the Facebook Video Downloader Free of Charge?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the tool is 100% free to use. There are no hidden fees, subscriptions, or sign-up requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Do I Need to Register or Log In to Use It?</AccordionTrigger>
                  <AccordionContent>
                    No account creation or login is required. Simply copy the Facebook video link, paste it into the
                    downloader, and initiate the download.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What Video Resolutions Can I Download?</AccordionTrigger>
                  <AccordionContent>
                    Available resolutions include SD, HD, Full HD, and up to 4K (if the original video supports it). The
                    tool adjusts to provide the best available quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I Download Private Facebook Videos?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can download private videos, but only if you have access or permission to view them. This
                    ensures ethical use and respects content ownership.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Are There Limits to the Number of Videos I Can Download?</AccordionTrigger>
                  <AccordionContent>
                    There are no daily limits or restrictions. Users can download unlimited Facebook videos without any
                    throttling or charges.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Will the Downloaded Videos Have Any Watermarks?</AccordionTrigger>
                  <AccordionContent>
                    No. All video downloads are watermark-free, ensuring clean and original content playback.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>In What File Format Will the Video Be Saved?</AccordionTrigger>
                  <AccordionContent>
                    Videos are saved in MP4 format, which is widely compatible with smartphones, tablets, desktops, and
                    most media players.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>How Do I Save a Facebook Video to My Device?</AccordionTrigger>
                  <AccordionContent>
                    Copy the video URL from Facebook. Paste the link into the download input field. Select your
                    preferred resolution. Click 'Download' to begin saving the video.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>Is the Facebook Downloader Safe and Private?</AccordionTrigger>
                  <AccordionContent>
                    Yes. The downloader respects user privacy. It does not collect personal data or store download
                    history. All downloads are processed anonymously.
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
