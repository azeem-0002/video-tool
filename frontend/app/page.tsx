import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { SEOContent } from "@/components/seo-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Video Downloader: Download Videos from Facebook, YouTube, TikTok & More in HD",
  description:
    "Your ultimate online tool to download videos from Facebook, YouTube, Instagram, TikTok, Twitter, and more! Get high-quality videos instantly, no watermarks, completely free and fast.",
  keywords:
    "video downloader, free video downloader, download social media videos, Facebook video download, YouTube video download, Instagram video download, TikTok video download, Twitter video download, HD video downloader, online video saver, all-in-one video downloader",
  openGraph: {
    title: "Free Video Downloader: Download Videos from Facebook, YouTube, TikTok & More in HD",
    description:
      "Download videos from all your favorite social media platforms like Facebook, YouTube, Instagram, TikTok, and Twitter. Fast, free, and no watermarks – get your videos in HD now!",
    type: "website",
    url: "https://freevideodownloader.co/", // Ensure this is your main domain
    siteName: "FreeVideoDownloader.co", // Use your actual site name consistently
    images: [
      {
        url: "https://freevideodownloader.co/images/universal-og-image.jpg", // Create a relevant image for your universal page
        width: 1200,
        height: 630,
        alt: "Free Video Downloader - All Social Media Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Downloader: FB, YT, Insta, TikTok & Twitter Videos in HD",
    description: "Download videos from Facebook, YouTube, Instagram, TikTok, and Twitter. Free, fast, and high-quality downloads without watermarks.",
    images: [
      "https://freevideodownloader.co/images/universal-twitter-card.jpg", // Create a relevant image for your universal page
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/", // Ensure this is your main domain
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SEOContent />
      <div id="features-section">
        <Features />
      </div>
    </div>
  )
}
