import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { SEOContent } from "@/components/seo-content"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
      <section className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions – Free Video Downloader
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. What platforms can I download videos from using your website?
            </AccordionTrigger>
            <AccordionContent>
              You can download videos from multiple platforms including
              Instagram, TikTok, YouTube, Facebook, Twitter, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Is there a cost to use your video downloader?
            </AccordionTrigger>
            <AccordionContent>
              No, our video downloader is completely free to use. You can
              download videos without any charges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. What video quality can I download?
            </AccordionTrigger>
            <AccordionContent>
              Our website supports video downloads up to 4K quality, ensuring
              you get the best possible resolution for your videos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Do I need to create an account to download videos?
            </AccordionTrigger>
            <AccordionContent>
              No, you do not need to create an account. Simply visit our
              website, paste the video link, and start downloading.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Are there any limitations on video downloads?
            </AccordionTrigger>
            <AccordionContent>
              While our service is free, we do not impose strict limitations on
              the number of downloads. However, please ensure you comply with
              copyright laws and respect the rights of content creators.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. How do I download a video from your website?
            </AccordionTrigger>
            <AccordionContent>
              To download a video, simply copy the URL of the video from the
              platform, paste it into our downloader, select your desired
              quality, and click the download button.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              7. Can I download videos privately and securely?
            </AccordionTrigger>
            <AccordionContent>
              Yes, your privacy is important to us. Our website does not store
              any of your data or the videos you download.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              8. Is it possible to download videos on mobile devices?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our website is mobile-friendly, allowing you to download
              videos directly to your smartphone or tablet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              9. What formats can I download videos in?
            </AccordionTrigger>
            <AccordionContent>
              You can download videos in various formats, including MP4 and
              others, depending on the platform and quality selected.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>
              10. What should I do if I encounter an issue while downloading?
            </AccordionTrigger>
            <AccordionContent>
              If you face any issues while downloading, please check your
              internet connection and ensure the video link is correct. For
              further assistance, you can contact our support team through the
              website.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <div id="features-section">
        <Features />
      </div>
    </div>
  )
}
