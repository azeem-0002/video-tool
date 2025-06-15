"use client";

import { useState } from "react";
import { PlatformDownloader } from "@/components/platform-downloader";
import { Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

const metadata: Metadata = {
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
    url: "https://freevideodownloader.co/facebook",
    siteName: "FreeVideoDownloader",
    images: [
      {
        url: "https://freevideodownloader.co/images/fb-downloader-og-image.jpg",
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
    images: [
      "https://freevideodownloader.co/images/fb-downloader-twitter-card.jpg",
    ],
  },
  alternates: {
    canonical: "https://freevideodownloader.co/facebook",
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

export default function FacebookPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "1. What is a Facebook video downloader?",
      answer:
        "A tool to save videos from Facebook to your device for offline viewing.",
    },
    {
      question: "2. Is the Facebook video downloader free to use?",
      answer: "Yes. It’s 100% free with no hidden charges.",
    },
    {
      question: "3. Do I need to register or log in?",
      answer: "No registration is needed to use the service.",
    },
    {
      question: "4. What resolutions can I download?",
      answer: "SD, HD, Full HD, and 4K depending on source quality.",
    },
    {
      question: "5. Can I download videos from private Facebook accounts?",
      answer: "Only if you have permission and access to view them.",
    },
    {
      question: "6. Are there limits on how many videos I can download?",
      answer: "No, you can download unlimited videos.",
    },
    {
      question: "7. Will downloaded videos contain watermarks?",
      answer: "No watermarks are added.",
    },
    {
      question: "8. What format are videos saved in?",
      answer: "MP4 format, which is widely compatible.",
    },
    {
      question: "9. Do I need to install any software?",
      answer: "No. Everything works from your browser.",
    },
    {
      question: "10. Is the tool safe and private?",
      answer: "Yes, it’s secure and respects your privacy.",
    },
  ];

  return (
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
            Download Facebook reels, stories, and live videos in high quality. No watermark, no installation, no login – just paste your video link below.
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

          {/* FAQ Section - Accordion */}
          <section className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions – Facebook Video Downloader</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b pb-4">
                  <button
                    onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
                    className="w-full text-left focus:outline-none"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-${i}`}
                  >
                    <h3 className="font-semibold">{faq.question}</h3>
                  </button>
                  {openIndex === i && <p id={`faq-${i}`} className="mt-2">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Trust Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">Trusted by Users Worldwide</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Fast & Reliable
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                No Personal Data Stored
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                100% Free
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Works on All Devices
              </Badge>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
