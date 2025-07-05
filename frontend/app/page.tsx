import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { SEOContent } from "@/components/seo-content"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
  other: {
    "google-site-verification": "0L02qgemlSuGX8WJ2KqmVbdXujPL5aHkQLMCK8iV3Y8",
  },
}

function StructuredData() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Online Video Downloader – No App Needed, Fast & No Watermark",
    "url": "https://freevideodownloader.co/",
    "description":
      "Free online video downloader to save high-quality videos from any website. No app needed. Fast, easy, and no watermark — download any video instantly.",
    "inLanguage": "en"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freevideodownloader.co/"
      }
    ]
  };

  return (
    <>
      {/* WebPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Google Analytics Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PC6H4VWJNP"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PC6H4VWJNP');
        `
        }}
      />
    </>
  );
}



export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen">
        <Hero />
        <SEOContent />
        <div id="features-section">
          <Features />
        </div>

        {/* FAQ Section */}
        <section className="py-16 px-4  bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about our free online video downloader
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqList.map(({ question, answer }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  )
}

const faqList = [
  {
    question: "How can I download videos from any website using your online video downloader?",
    answer:
      "Our universal video downloader supports multiple platforms including Instagram, TikTok, YouTube, Facebook, Twitter, and more. Simply paste any video URL into our online video download tool and click download.",
  },
  {
    question: "Is this free online video downloader really free to use?",
    answer:
      "Yes, our online video downloader is completely free to use. You can download videos from any website without any charges, subscriptions, or hidden fees.",
  },
  {
    question: "What video quality can I download with this universal video downloader?",
    answer:
      "Our online video download tool supports various qualities including HD, Full HD, and up to 4K resolution, ensuring you get the best possible video quality from any website.",
  },
  {
    question: "Do I need to install software to use this online video downloader?",
    answer:
      "No installation required! Our free online video downloader works directly in your browser. Simply visit our website, paste the video URL, and start your online video download immediately.",
  },
  {
    question: "Are there any limitations on downloading videos from websites?",
    answer:
      "While our universal video downloader is free and unlimited, please ensure you comply with copyright laws and respect content creators' rights when downloading videos from any website.",
  },
  {
    question: "How do I use this online video download tool?",
    answer:
      "Using our free online video downloader is simple: copy the video URL from any supported website, paste it into our universal video downloader, select your desired quality, and click download.",
  },
  {
    question: "Can I download videos privately and securely with this online video downloader?",
    answer:
      "Yes, your privacy is protected when using our online video download service. We don't store any of your data or the videos you download from any website.",
  },
  {
    question: "Does this universal video downloader work on mobile devices?",
    answer:
      "Yes, our free online video downloader is mobile-friendly and works perfectly on smartphones and tablets, allowing you to download videos from any website on any device.",
  },
  {
    question: "What video formats does this online video download tool support?",
    answer:
      "Our universal video downloader supports various formats including MP4, MP3, and others, depending on the source website and your selected quality preferences.",
  },
  {
    question: "What should I do if I encounter issues with the online video downloader?",
    answer:
      "If you face any issues while using our free online video downloader, please check your internet connection and ensure the video URL is correct. For further assistance with online video download, you can contact our support team.",
  },
]
