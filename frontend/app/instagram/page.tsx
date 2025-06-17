import { PlatformDownloader } from "@/components/platform-downloader"
import { Instagram } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

const metadata: Metadata = {
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
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions – Instagram Video Downloader
            </h2>
            <Accordion.Root type="multiple" className="space-y-4">
              {[
                {
                  question:
                    "1. Is the Instagram video download tool available at no cost?",
                  answer:
                    "Yes, this Instagram video download service is 100% free of charge. Users can access all features without any hidden fees or subscriptions.",
                },
                {
                  question:
                    "2. Do I need to register to use the Instagram video downloader?",
                  answer:
                    "No sign-up or registration is required. Anyone can visit the platform and begin downloading Instagram videos instantly without creating an account.",
                },
                {
                  question:
                    "3. What resolutions are supported for Instagram video downloads?",
                  answer:
                    "The tool supports video downloads in multiple resolutions, including Full HD (1080p) and Ultra HD (4K), depending on the source video quality.",
                },
                {
                  question:
                    "4. Can the tool download both public and private Instagram videos?",
                  answer:
                    "Yes, it allows downloads from public profiles and private content only if the user has authorized access. Always ensure proper permissions before downloading private media.",
                },
                {
                  question:
                    "5. Do downloaded Instagram videos contain watermarks?",
                  answer:
                    "No watermarks are added to the downloaded files. You receive clean, original-quality videos without any branding or overlay.",
                },
                {
                  question:
                    "6. Is there a restriction on the number of Instagram videos I can download?",
                  answer:
                    "There are no daily or monthly limits. Users can download unlimited videos from Instagram without any usage caps.",
                },
                {
                  question:
                    "7. What is the process for downloading videos from Instagram?",
                  answer:
                    "Copy the Instagram video URL, paste it into the downloader input field, and click the download button. The video will be ready for saving within moments.",
                },
                {
                  question:
                    "8. Is using this Instagram video downloader secure?",
                  answer:
                    "Yes, the tool follows secure browsing practices, and no personal data or download history is stored. Your privacy is respected at all times.",
                },
                {
                  question:
                    "9. Can downloaded Instagram videos be reused for commercial projects?",
                  answer:
                    "All content rights remain with the original creators. For commercial or public use, ensure you have the appropriate licenses or permissions from the video owner.",
                },
              ].map((faq, idx) => (
                <Accordion.Item
                  key={idx}
                  value={`faq-${idx}`}
                  className="border rounded-lg"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 font-semibold text-left text-black dark:text-white">
                      <h3>{faq.question}</h3>
                      <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pb-4 pt-0 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </section>

          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Trusted by Thousands</h2>
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
