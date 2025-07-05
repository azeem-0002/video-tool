import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UniversalDownloader } from "@/components/universal-downloader"
import { DemoSection } from "@/components/demo-section"
import { SEOContent } from "@/components/seo-content"

export const metadata: Metadata = {
  title: "Free Online Video Downloader – No App Needed, Fast & No Watermark",
  description:
    "Free online video downloader to save high-quality videos from YouTube, TikTok, Instagram, Facebook, and Twitter. No app installation required, fast downloads, and no watermarks.",
  keywords: [
    "video downloader",
    "free video downloader",
    "online video downloader",
    "YouTube downloader",
    "TikTok downloader",
    "Instagram video downloader",
    "Facebook video downloader",
    "Twitter video downloader",
    "no watermark",
    "HD video download",
  ],
  openGraph: {
    title: "Free Online Video Downloader – No App Needed, Fast & No Watermark",
    description:
      "Free online video downloader to save high-quality videos from YouTube, TikTok, Instagram, Facebook, and Twitter. No app installation required, fast downloads, and no watermarks.",
    images: [
      {
        url: "/images/universal-og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Video Downloader - Download videos from any platform",
      },
    ],
  },
  twitter: {
    title: "Free Online Video Downloader – No App Needed, Fast & No Watermark",
    description:
      "Free online video downloader to save high-quality videos from YouTube, TikTok, Instagram, Facebook, and Twitter. No app installation required, fast downloads, and no watermarks.",
    images: ["/images/universal-og-image.png"],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Online Video Downloader – No App Needed, Fast & No Watermark",
            description:
              "Free online video downloader to save high-quality videos from YouTube, TikTok, Instagram, Facebook, and Twitter. No app installation required, fast downloads, and no watermarks.",
            url: "https://freevideodownloader.co",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "FreeVideoDownloader",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web Browser",
              description:
                "Free online video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter and more platforms.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "15420",
                bestRating: "5",
                worstRating: "1",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://freevideodownloader.co",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is FreeVideoDownloader really free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, FreeVideoDownloader is completely free to use. There are no hidden fees, subscriptions, or premium plans required. You can download unlimited videos from supported platforms without any cost.",
                },
              },
              {
                "@type": "Question",
                name: "Which platforms are supported for video downloading?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We support major platforms including YouTube, TikTok, Instagram, Facebook, Twitter/X, and many more. Our universal downloader can handle videos from most popular social media and video sharing platforms.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to install any software or app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No installation required! FreeVideoDownloader works entirely in your web browser. Simply paste the video URL and download - it's that simple.",
                },
              },
              {
                "@type": "Question",
                name: "Are the downloaded videos watermark-free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all videos downloaded through our service are free from watermarks. You get the original video content without any additional branding or watermarks added by our service.",
                },
              },
              {
                "@type": "Question",
                name: "What video qualities are available for download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer multiple quality options including HD (1080p), 720p, 480p, and 360p, depending on the source video's available qualities. You can choose the quality that best suits your needs.",
                },
              },
              {
                "@type": "Question",
                name: "Is it legal to download videos using this service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Users are responsible for ensuring they have the right to download content. We recommend only downloading videos you own, have permission to download, or that are available under appropriate licenses. Always respect copyright laws and platform terms of service.",
                },
              },
              {
                "@type": "Question",
                name: "How fast are the downloads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Download speeds depend on your internet connection and the video file size. Our service is optimized for fast processing and delivery, typically providing download links within seconds of submitting a URL.",
                },
              },
              {
                "@type": "Question",
                name: "Do you store the videos I download?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, we do not store any videos on our servers. The download process creates temporary links that expire after a short time. Your privacy and the content creators' rights are important to us.",
                },
              },
            ],
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        <Hero />
        <UniversalDownloader />
        <Features />
        <DemoSection />
        <SEOContent />
      </div>
    </>
  )
}
