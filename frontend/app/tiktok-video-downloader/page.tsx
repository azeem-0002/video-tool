import Head from "next/head"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { PlatformDownloader } from "@/components/platform-downloader"
import type { Metadata } from "next"

export const metadata: Metadata = {
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
    url: "https://freevideodownloader.co/tiktok-video-downloader",
    siteName: "FreeVideoDownloader.co",
    images: [
      {
        url: "https://freevideodownloader.co/images/tiktok-downloader-og-image.png",
        width: 1200,
        height: 630,
        alt: "TikTok Video Downloader - Save TikTok Videos No Watermark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download TikTok Videos FREE - No Watermark MP4 & MP3",
    description:
      "Get TikTok videos in HD MP4 without watermark. Convert TikTok to MP3. Works on all devices, fast & free.",
    images: ["https://freevideodownloader.co/images/tiktok-downloader-og-image.png"],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/tiktok-video-downloader",
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

export default function TikTokPage() {
  return (
    <>
      <Head>
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "TikTok Video Downloader - Free No Watermark MP4 & MP3 TikTok Saver (HD)",
              url: "https://freevideodownloader.co/tiktok-video-downloader",
              description:
                "Free TikTok Downloader: Download TikTok videos, Stories, and Slideshows in HD MP4 (no watermark) or convert to MP3. Works fast on Android, iOS, and PC. Secure & easy to use!",
              inLanguage: "en",
            }),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  name: "TikTok Video Downloader",
                  item: "https://freevideodownloader.co/tiktok-video-downloader",
                },
              ],
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a TikTok video downloader and how does it work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A TikTok video downloader is a free online tool that lets you download videos directly from TikTok to your device. Simply copy the video URL, paste it into the downloader input box, and click the download button—no app or software required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the TikTok video downloader free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our TikTok video downloader is completely free. You can save unlimited videos without any cost, subscription, or registration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to sign up or create an account to download TikTok videos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No account is needed. Our service is instant and accessible to everyone without requiring sign-up or login.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I download TikTok videos in high quality, including 4K resolution?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our downloader supports video resolutions up to 4K, ensuring you get the highest possible quality when available from the original source.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I download TikTok videos without the watermark?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can download TikTok videos without the watermark. This allows for a cleaner viewing or sharing experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any limits on how many videos I can download?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There are no restrictions—you can download as many TikTok videos as you want, anytime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which video formats are supported for download?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Videos are typically available in MP4 format, which is widely compatible with mobile devices, tablets, and desktops.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is your TikTok downloader tool safe and secure?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our tool is completely safe. We don't collect or store user data, and the site is regularly scanned to be free from malware or harmful software.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I download videos from private TikTok accounts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, for privacy reasons, you can only download videos that are publicly accessible on TikTok.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should I do if the TikTok video download fails?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If your download doesn't work, check your internet connection, refresh the page, or try a different video link. If the problem continues, contact our support team for help.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black dark:bg-white mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white dark:fill-black">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Download TikTok Videos in HD – No Watermark, MP3 & MP4 Formats</h1>
            <p className="text-muted-foreground">
              Save your favorite TikTok videos in full HD with no watermark. Use our fast and secure downloader for MP4
              or MP3 conversions, without needing apps or logins.
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

            {/* About TikTok Downloader */}
            <section>
              <h2 className="text-2xl font-bold mb-6">About Our TikTok Video Downloader</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    In this era, more than millions of people spend their free time watching TikTok videos all over the
                    world. TikTok video creators share multiple videos daily, and people across the worldwide like their
                    videos and enjoy their content. Although there are many people facing issues in downloading videos
                    from TikTok, TikTok Video Downloader by freevideodownloader.co solves their problem and helps people
                    to download unlimited TikTok videos without watermark in HD quality. You can save TikTok videos
                    directly to your devices without losing visual clarity, making it perfect for reposting, editing, or
                    personal collection. TikTok Video Downloader is a free, safe, and secure website. Users can enjoy
                    TikTok videos offline on various devices including PCs, Mac, tablet, smartphone — whenever you want.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a TikTok video downloader and how does it work?</AccordionTrigger>
                  <AccordionContent>
                    A TikTok video downloader is a free online tool that lets you download videos directly from TikTok
                    to your device. Simply copy the video URL, paste it into the downloader input box, and click the
                    download button—no app or software required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is the TikTok video downloader free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our TikTok video downloader is completely free. You can save unlimited videos without any cost,
                    subscription, or registration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Do I need to sign up or create an account to download TikTok videos?
                  </AccordionTrigger>
                  <AccordionContent>
                    No account is needed. Our service is instant and accessible to everyone without requiring sign-up or
                    login.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I download TikTok videos in high quality, including 4K resolution?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our downloader supports video resolutions up to 4K, ensuring you get the highest possible quality
                    when available from the original source.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I download TikTok videos without the watermark?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can download TikTok videos without the watermark. This allows for a cleaner viewing or
                    sharing experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are there any limits on how many videos I can download?</AccordionTrigger>
                  <AccordionContent>
                    There are no restrictions—you can download as many TikTok videos as you want, anytime.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Which video formats are supported for download?</AccordionTrigger>
                  <AccordionContent>
                    Videos are typically available in MP4 format, which is widely compatible with mobile devices,
                    tablets, and desktops.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Is your TikTok downloader tool safe and secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our tool is completely safe. We don't collect or store user data, and the site is regularly
                    scanned to be free from malware or harmful software.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Can I download videos from private TikTok accounts?</AccordionTrigger>
                  <AccordionContent>
                    No, for privacy reasons, you can only download videos that are publicly accessible on TikTok.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>What should I do if the TikTok video download fails?</AccordionTrigger>
                  <AccordionContent>
                    If your download doesn't work, check your internet connection, refresh the page, or try a different
                    video link. If the problem continues, contact our support team for help.
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
