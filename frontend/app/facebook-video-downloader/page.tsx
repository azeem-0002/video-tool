import { PlatformDownloader } from "@/components/platform-downloader"
import { Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import Head from "next/head"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)",
  description:
    "Download Facebook videos, Reels, Stories, and Live streams in HD quality, absolutely free and with no watermark. Our FB video downloader works online on any device – fast and secure!",
  keywords:
    "Facebook video downloader, download Facebook videos, FB video saver, Facebook Reels downloader, download Facebook Story, Facebook Live download, free FB video download, HD Facebook video, no watermark Facebook video downloader",
  openGraph: {
    title: "Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)",
    description:
      "Easily download Facebook videos, Reels, Stories, and Live streams in high definition, completely free and without watermarks. Compatible with all devices.",
    type: "website",
    url: "https://freevideodownloader.co/facebook-video-downloader",
    siteName: "FreeVideoDownloader",
    images: [
      {
        url: "https://freevideodownloader.co/images/facebook-downloader-og-image.png",
        width: 1200,
        height: 630,
        alt: "Facebook Video Downloader - Save FB Videos Easily",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Facebook Videos FREE - Reels, Stories, Live in HD",
    description:
      "Get your Facebook videos, Reels, and Stories in HD, without watermarks. Fast, free, and works on any device.",
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

function StructuredData() {
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

  return (
    <Head>
      {/* Google Analytics tag */}
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


export default function FacebookPage() {
  return (
    <>
    <StructuredData />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Facebook Video Downloader – Easily Save Facebook Videos, Reels & Stories in HD
            </h1>
            <p className="text-muted-foreground">
              Download Facebook reels, stories, and live videos in high quality. No watermark, no installation, no login
              – just paste your video link below.
            </p>
          </div>

          <PlatformDownloader
            platform="facebook"
            endpoint="/api/facebook"
            placeholder="https://www.facebook.com/watch?v=..."
          />

          {/* SEO Content */}
          <div className="mt-16 space-y-12">
            {/* Supported Facebook Video Types */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Supported Facebook Video Types</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">✔️</span>
                      <span>Facebook Reels and Short Clips</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">✔️</span>
                      <span>Stories and Status Videos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">✔️</span>
                      <span>Live Streams and Recordings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">✔️</span>
                      <span>Shared Public Video Posts</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground">All videos are saved in HD MP4 format without watermark.</p>
                </CardContent>
              </Card>
            </section>

            {/* Why Use Our Facebook Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Why Use Our Facebook Downloader?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Fast & smooth video downloads</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>No watermarks on output videos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Works on mobile, tablet & desktop</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>No installation or login needed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>100% free and privacy-friendly</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>Secure and encrypted downloads</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How to Save Facebook Videos */}
            <section>
              <h2 className="text-2xl font-bold mb-6">How to Save Facebook Videos</h2>
              <Card>
                <CardContent className="pt-6">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">1</Badge>
                      <span>Copy the Facebook video, story, or reel URL</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">2</Badge>
                      <span>Paste it above and click Download</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">3</Badge>
                      <span>Pick the format/quality and save instantly</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* About Facebook Video Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">About Our Facebook Video Downloader</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Facebook is the world's largest platform for sharing photos, videos, and stories, with more than 3.5
                    billion users sharing content on Facebook. But approximately 96% of users face issues regarding
                    downloading Facebook videos. So now, we have fixed the biggest problem for Facebook users with our
                    free Facebook video downloader tools. Currently, users can download Facebook videos from anywhere.
                    Facebook Video Downloader by freevideodownloader.co is a website that's fully safe, free, and secure
                    for users. Our video downloader provides high-quality resolution in 720p, 1080p, 2K, 4K, and HD.
                    Using our Facebook video downloader, users can download any public or private Facebook video,
                    convert Facebook videos to MP3, and download MP3 music from Facebook. Download Facebook videos
                    online on web browsers, Mac, Android, or tablets — no need for registration or apps.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">What is a Facebook Video Downloader Tool?</AccordionTrigger>
                  <AccordionContent>
                    A Facebook Video Downloader is a web-based utility that lets users save videos directly from
                    Facebook to their device. It supports high-resolution downloads (including HD and 4K), allowing
                    offline viewing without internet access.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is Using the Facebook Video Downloader Free of Charge?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, the tool is 100% free to use. There are no hidden fees, subscriptions, or sign-up requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Do I Need to Register or Log In to Use It?</AccordionTrigger>
                  <AccordionContent>
                    No account creation or login is required. Simply copy the Facebook video link, paste it into the
                    downloader, and initiate the download.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">What Video Resolutions Can I Download?</AccordionTrigger>
                  <AccordionContent>
                    Available resolutions include SD, HD, Full HD, and up to 4K (if the original video supports it). The
                    tool adjusts to provide the best available quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Can I Download Private Facebook Videos?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can download private videos, but only if you have access or permission to view them. This
                    ensures ethical use and respects content ownership.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Are There Limits to the Number of Videos I Can Download?
                  </AccordionTrigger>
                  <AccordionContent>
                    There are no daily limits or restrictions. Users can download unlimited Facebook videos without any
                    throttling or charges.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Will the Downloaded Videos Have Any Watermarks?
                  </AccordionTrigger>
                  <AccordionContent>
                    No. All video downloads are watermark-free, ensuring clean and original content playback.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    In What File Format Will the Video Be Saved?
                  </AccordionTrigger>
                  <AccordionContent>
                    Videos are saved in MP4 format, which is widely compatible with smartphones, tablets, desktops, and
                    most media players.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    How Do I Save a Facebook Video to My Device?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>Follow these steps:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li>Copy the video URL from Facebook.</li>
                        <li>Paste the link into the download input field.</li>
                        <li>Select your preferred resolution.</li>
                        <li>Click 'Download' to begin saving the video.</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    Is the Facebook Downloader Safe and Private?
                  </AccordionTrigger>
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
