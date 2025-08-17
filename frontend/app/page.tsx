import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Hero } from "@/components/hero"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Lazy load non-critical components
const Features = dynamic(() => import('@/components/features').then(mod => ({ default: mod.Features })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />
})

const SEOContent = dynamic(() => import('@/components/seo-content').then(mod => ({ default: mod.SEOContent })), {
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" />
})

export const metadata: Metadata = {
  title: "Free Online Video Downloader: Download Videos from Any Website - Universal Tool",
  description:
    "Best free online video downloader to download videos from any website including Facebook, YouTube, TikTok, Instagram, Twitter & more. Universal video downloader with HD quality, fast downloads, and no watermarks.",
  keywords:
    "free online video downloader, download videos from any website, online video downloader, universal video downloader, online video download, video downloader free, download social media videos, HD video downloader",
  openGraph: {
    title: "Free Online Video Downloader: Download Videos from Any Website - Universal Tool",
    description:
      "Download videos from any website with our free online video downloader. Supports all major platforms - fast, secure, and no software needed.",
    type: "website",
    url: "https://freevideodownloader.co/",
    siteName: "FreeVideoDownloader.co",
    images: [
      {
        url: "https://freevideodownloader.co/images/universal-og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Video Downloader - Download Videos from Any Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Video Downloader: Download Videos from Any Website",
    description:
      "Universal video downloader for all websites. Download videos online for free - fast, secure, and no software required.",
    images: ["https://freevideodownloader.co/images/universal-og-image.png"],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/",
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
  verification: {
    google: "0L02qgemlSuGX8WJ2KqmVbdXujPL5aHkQLMCK8iV3Y8",
  },
}

export default function HomePage() {
  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Online Video Downloader – No App Needed, Fast & No Watermark",
            url: "https://freevideodownloader.co/",
            description:
              "Free online video downloader to save high-quality videos from any website. No app needed. Fast, easy, and no watermark — download any video instantly.",
            inLanguage: "en",
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
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
                name: "How can I download videos from any website using your online video downloader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our universal video downloader supports multiple platforms including Instagram, TikTok, YouTube, Facebook, Twitter, and more. Simply paste any video URL into our online video download tool and click download.",
                },
              },
              {
                "@type": "Question",
                name: "Is this free online video downloader really free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our online video downloader is completely free to use. You can download videos from any website without any charges, subscriptions, or hidden fees.",
                },
              },
              {
                "@type": "Question",
                name: "What video quality can I download with this universal video downloader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our online video download tool supports various qualities including HD, Full HD, and up to 4K resolution, ensuring you get the best possible video quality from any website.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to install software to use this online video downloader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No installation required! Our free online video downloader works directly in your browser. Simply visit our website, paste the video URL, and start your online video download immediately.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any limitations on downloading videos from websites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While our universal video downloader is free and unlimited, please ensure you comply with copyright laws and respect content creators' rights when downloading videos from any website.",
                },
              },
              {
                "@type": "Question",
                name: "How do I use this online video download tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Using our free online video downloader is simple: copy the video URL from any supported website, paste it into our universal video downloader, select your desired quality, and click download.",
                },
              },
              {
                "@type": "Question",
                name: "Can I download videos privately and securely with this online video downloader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, your privacy is protected when using our online video download service. We don't store any of your data or the videos you download from any website.",
                },
              },
              {
                "@type": "Question",
                name: "Does this universal video downloader work on mobile devices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our free online video downloader is mobile-friendly and works perfectly on smartphones and tablets, allowing you to download videos from any website on any device.",
                },
              },
              {
                "@type": "Question",
                name: "What video formats does this online video download tool support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our universal video downloader supports various formats including MP4, MP3, and others, depending on the source website and your selected quality preferences.",
                },
              },
              {
                "@type": "Question",
                name: "What should I do if I encounter issues with the online video downloader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you face any issues while using our free online video downloader, please check your internet connection and ensure the video URL is correct. For further assistance with online video download, you can contact our support team.",
                },
              },
            ],
          }),
        }}
      />

      {/* Critical content loads first */}
      <div className="min-h-screen">
        <Hero />
        
        {/* Lazy load non-critical sections */}
        <Suspense fallback={<div className="h-64 bg-muted animate-pulse rounded-lg" />}>
          <SEOContent />
        </Suspense>
        
        <div id="features-section">
          <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
            <Features />
          </Suspense>
        </div>
        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about our free online video downloader
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  How can I download videos from any website using your online video downloader?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Our universal video downloader supports multiple platforms including Instagram, TikTok, YouTube,
                  Facebook, Twitter, and more. Simply paste any video URL into our online video download tool and click
                  download.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  Is this free online video downloader really free to use?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Yes, our online video downloader is completely free to use. You can download videos from any website
                  without any charges, subscriptions, or hidden fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  What video quality can I download with this universal video downloader?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Our online video download tool supports various qualities including HD, Full HD, and up to 4K
                  resolution, ensuring you get the best possible video quality from any website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  Do I need to install software to use this online video downloader?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  No installation required! Our free online video downloader works directly in your browser. Simply
                  visit our website, paste the video URL, and start your online video download immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  Are there any limitations on downloading videos from websites?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  While our universal video downloader is free and unlimited, please ensure you comply with copyright
                  laws and respect content creators' rights when downloading videos from any website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  How do I use this online video download tool?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Using our free online video downloader is simple: copy the video URL from any supported website, paste
                  it into our universal video downloader, select your desired quality, and click download.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  Can I download videos privately and securely with this online video downloader?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Yes, your privacy is protected when using our online video download service. We don't store any of
                  your data or the videos you download from any website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  Does this universal video downloader work on mobile devices?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Yes, our free online video downloader is mobile-friendly and works perfectly on smartphones and
                  tablets, allowing you to download videos from any website on any device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  What video formats does this online video download tool support?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  Our universal video downloader supports various formats including MP4, MP3, and others, depending on
                  the source website and your selected quality preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  What should I do if I encounter issues with the online video downloader?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  If you face any issues while using our free online video downloader, please check your internet
                  connection and ensure the video URL is correct. For further assistance with online video download, you
                  can contact our support team.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  )
}