import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/toast-provider"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN_URL || "https://freevideodownloader.co"),
  title: "Free Video Downloader - Download Videos from YouTube, TikTok, Instagram & More",
  description:
    "Download videos from YouTube, TikTok, Instagram, Facebook, and Twitter for free. Fast, secure, and easy-to-use video downloader with no registration required.",
  keywords: [
    "video downloader",
    "YouTube downloader",
    "TikTok downloader",
    "Instagram downloader",
    "Facebook video downloader",
    "Twitter video downloader",
    "free video download",
    "online video downloader",
  ],
  authors: [{ name: "Free Video Downloader" }],
  creator: "Free Video Downloader",
  publisher: "Free Video Downloader",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.DOMAIN_URL || "https://freevideodownloader.co",
    siteName: "Free Video Downloader",
    title: "Free Video Downloader - Download Videos from YouTube, TikTok, Instagram & More",
    description:
      "Download videos from YouTube, TikTok, Instagram, Facebook, and Twitter for free. Fast, secure, and easy-to-use video downloader with no registration required.",
    images: [
      {
        url: "/images/universal-og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Video Downloader - Universal Video Download Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Downloader - Download Videos from YouTube, TikTok, Instagram & More",
    description:
      "Download videos from YouTube, TikTok, Instagram, Facebook, and Twitter for free. Fast, secure, and easy-to-use video downloader with no registration required.",
    images: ["/images/universal-og-image.png"],
    creator: "@freevideodownloader",
  },
  alternates: {
    canonical: process.env.DOMAIN_URL || "https://freevideodownloader.co",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ToastProvider />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
