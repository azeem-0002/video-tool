import { PlatformDownloader } from "@/components/platform-downloader"
import { Download } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

const metadata: Metadata = {
  title: "Twitter/X Video Downloader - Save Videos & GIFs in HD MP4 (Free)",
  description:
    "Free Twitter/X video downloader: Easily download videos and GIFs from Twitter (now X) in high-quality HD MP4 format. No software, no login, fast, and works on all devices!",
  keywords:
    "Twitter video downloader, X video downloader, download Twitter videos, save Twitter videos, Twitter GIF download, X GIF downloader, free Twitter video saver, HD Twitter video, Twitter to MP4, download X videos",
  openGraph: {
    title: "Twitter/X Video Downloader - Save Videos & GIFs in HD MP4 (Free)",
    description:
      "Download Twitter (X) videos and GIFs instantly in HD MP4. Our free online tool requires no login or software. Fast, secure, and compatible with all devices.",
    type: "website",
    url: "https://freevideodownloader.co/twitter", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/twitter-downloader-og-image.jpg", // Create a relevant image for Twitter/X
        width: 1200,
        height: 630,
        alt: "Twitter/X Video Downloader - Save Videos & GIFs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Twitter/X Videos FREE - HD MP4 & GIFs",
    description: "Save Twitter (X) videos and GIFs in high quality MP4 format. Free, fast, and no login required.",
    images: [
      "https://freevideodownloader.co/images/twitter-downloader-twitter-card.jpg", // Create a relevant image for Twitter/X
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/twitter", // Ensure this is your actual domain
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

export default function TwitterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-400 mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Download Twitter Videos Instantly</h1>
          <p className="text-muted-foreground">
            Save any Twitter video in HD MP4 format without watermarks. Fast, secure, and 100% free – no software
            needed.
          </p>
        </div>

        <PlatformDownloader
          platform="twitter"
          endpoint="/api/twitter"
          placeholder="https://twitter.com/username/status/..."
        />

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          {/* Why Use This Twitter Video Downloader */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Why Use This Twitter Video Downloader?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>HD Quality for Twitter videos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Fast downloads with no watermark</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Fully browser-based — no installs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Works on iPhone, Android & PC</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Free, unlimited usage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✔️</span>
                      <span>Secure and private downloads</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Download Twitter Videos */}
          <section>
            <h2 className="text-2xl font-bold mb-6">How to Download Twitter Videos</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">1</Badge>
                    <span>Copy the link of the tweet with the video</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">2</Badge>
                    <span>Paste it in the box above</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="outline">3</Badge>
                    <span>Click "Download" and save your video</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Supported Content */}
          <section>
            <h2 className="text-2xl font-bold mb-6">What Twitter Content Can You Download?</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>🎬 Video tweets and clips</li>
                    <li>🔄 Retweets with videos</li>
                    <li>📱 Mobile-uploaded videos</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>🎞️ GIFs and animated content</li>
                    <li>📺 Embedded video content</li>
                    <li>🎥 Live video recordings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          
           {/* FAQ Section */}
          <section className="max-w-3xl mx-auto px-4 py-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions – Twitter Video Downloader
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  1. How can I download Twitter videos online?
                </AccordionTrigger>
                <AccordionContent>
                  To save a video from Twitter, copy the tweet link, paste it
                  into the input field on our tool, and click the download
                  button. The file will be saved to your device in your selected
                  resolution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. Do I need to sign up to use the Twitter video download
                  tool?
                </AccordionTrigger>
                <AccordionContent>
                  No registration is required. The service is available
                  instantly without logging in or creating an account.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  3. Is there a daily or monthly download limit?
                </AccordionTrigger>
                <AccordionContent>
                  There are no restrictions. Users can download unlimited
                  Twitter videos without facing any cap or usage limit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  4. What video formats and resolutions are available?
                </AccordionTrigger>
                <AccordionContent>
                  Our tool supports multiple quality options, including HD, Full
                  HD, and up to 4K resolution, depending on the source video’s
                  quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  5. Can I download videos posted on private Twitter accounts?
                </AccordionTrigger>
                <AccordionContent>
                  Videos from private accounts are only accessible if you have
                  permission and access to view them. Our tool supports
                  downloads from publicly accessible tweets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  6. Is this Twitter video saving service free of cost?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, this video downloader is completely free. No hidden
                  charges or premium plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  7. Will the downloaded video contain any branding or
                  watermark?
                </AccordionTrigger>
                <AccordionContent>
                  No, the video files are downloaded in their original form
                  without any added logos or watermarks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  8. Is the video downloading process user-friendly?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the interface is designed for all users. No technical
                  skills are needed—just paste, click, and download.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>
                  9. Which devices support this downloader tool?
                </AccordionTrigger>
                <AccordionContent>
                  The platform works on all major devices including Android
                  phones, iPhones, iPads, laptops, desktops, and tablets via any
                  web browser.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>
                  10. Is this tool compatible with all operating systems?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, it's compatible with Windows, macOS, iOS, Android, and
                  Linux operating systems, as it is fully web-based.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Trusted Worldwide</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Over 50,000 Downloads
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                No Personal Data Collected
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                Works on All Devices
              </Badge>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
