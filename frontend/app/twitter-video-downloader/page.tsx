import { PlatformDownloader } from "@/components/platform-downloader"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import Head from "next/head"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
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
    url: "https://freevideodownloader.co/twitter-video-downloader", // Ensure this is your actual domain
    siteName: "FreeVideoDownloader.co", // Consistent site name
    images: [
      {
        url: "https://freevideodownloader.co/images/twitter-downloader-og-image.png", // Create a relevant image for Twitter/X
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
      "https://freevideodownloader.co/images/twitter-downloader-og-image.png", // Create a relevant image for Twitter/X
    ],
  },
  alternates: {
    canonical: "/twitter-video-downloader", // Ensure this is your actual domain
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

function StructuredData() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Twitter/X Video Downloader - Save Videos & GIFs in HD MP4 (Free)",
    url: "https://freevideodownloader.co/twitter-video-downloader",
    description:
      "Free Twitter/X video downloader: Easily download videos and GIFs from Twitter (now X) in high-quality HD MP4 format. No software, no login, fast, and works on all devices!",
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
        name: "Twitter Video Downloader",
        item: "https://freevideodownloader.co/twitter-video-downloader",
      },
    ],
  }

  return (
    <Head>
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PC6H4VWJNP"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PC6H4VWJNP');
          `,
        }}
      />

      {/* Structured Data: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Structured Data: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </Head>
  )
}

export default function TwitterPage() {
  return (
    <>
    <StructuredData />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">𝕏</span>
              </div>
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

            {/* About Twitter Video Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">About Twitter Video Downloader</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Twitter is the biggest platform used worldwide, with more than 500 million users. But the
                    significant barrier faced by users is they can't download videos from Twitter. However, now users
                    can easily download Twitter videos by using our amazing web service, Twitter Video Downloader by
                    freevideodownloader.co, directly into their devices. Twitter videos and GIFs share news and
                    information by tweet, but users can't download them onto their phones or PCs. So, Twitter video
                    downloader is available here with free and unlimited online services. To download Twitter videos and
                    GIFs, users don't need to download any third-party app. Twitter Video Downloader by
                    freevideodownloader.co, is the most trusted website to download Twitter videos because our site
                    doesn't require login or signup. We provide a safe and secure way to download videos for our users.
                    Our video downloader doesn't store user data, so users don't need to worry about their privacy. Our
                    site doesn't encourage any illegal or copyrighted video or GIF activities for sharing.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How can I download Twitter videos online?</AccordionTrigger>
                  <AccordionContent>
                    To save a video from Twitter, copy the tweet link, paste it into the input field on our tool, and
                    click the download button. The file will be saved to your device in your selected resolution.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to sign up to use the Twitter video download tool?</AccordionTrigger>
                  <AccordionContent>
                    No registration is required. The service is available instantly without logging in or creating an
                    account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a daily or monthly download limit?</AccordionTrigger>
                  <AccordionContent>
                    There are no restrictions. Users can download unlimited Twitter videos without facing any cap or
                    usage limit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What video formats and resolutions are available?</AccordionTrigger>
                  <AccordionContent>
                    Our tool supports multiple quality options, including HD, Full HD, and up to 4K resolution,
                    depending on the source video's quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I download videos posted on private Twitter accounts?</AccordionTrigger>
                  <AccordionContent>
                    Videos from private accounts are only accessible if you have permission and access to view them. Our
                    tool supports downloads from publicly accessible tweets.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is this Twitter video saving service free of cost?</AccordionTrigger>
                  <AccordionContent>
                    Yes, this video downloader is completely free. No hidden charges or premium plans.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Will the downloaded video contain any branding or watermark?</AccordionTrigger>
                  <AccordionContent>
                    No, the video files are downloaded in their original form without any added logos or watermarks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Is the video downloading process user-friendly?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the interface is designed for all users. No technical skills are needed—just paste, click, and
                    download.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>Which devices support this downloader tool?</AccordionTrigger>
                  <AccordionContent>
                    The platform works on all major devices including Android phones, iPhones, iPads, laptops, desktops,
                    and tablets via any web browser.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>Is this tool compatible with all operating systems?</AccordionTrigger>
                  <AccordionContent>
                    Yes, it's compatible with Windows, macOS, iOS, Android, and Linux operating systems, as it is fully
                    web-based.
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
