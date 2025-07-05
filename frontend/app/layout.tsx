import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ToastProvider } from "@/components/toast-provider"

// Optimize font loading for better FCP and CLS
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevents invisible text during font swap
  preload: true,
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://freevideodownloader.co"),
  title: {
    default: "FreeVideoDownloader - Download Videos from Any Platform",
    template: "%s | FreeVideoDownloader",
  },
  description:
    "Professional video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, CapCut, and Pinterest. Fast, free, and easy to use.",
  keywords: "video downloader, youtube downloader, tiktok downloader, instagram downloader",
  authors: [{ name: "FreeVideoDownloader" }],
  creator: "FreeVideoDownloader",
  publisher: "FreeVideoDownloader",
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
    url: "https://freevideodownloader.co/",
    siteName: "FreeVideoDownloader",
    title: "FreeVideoDownloader - Download Videos from Any Platform",
    description:
      "Professional video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, CapCut, and Pinterest. Fast, free, and easy to use.",
    images: [
      {
        url: "/images/universal-og-image.png",
        width: 1200,
        height: 630,
        alt: "FreeVideoDownloader - Download Videos from Any Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeVideoDownloader - Download Videos from Any Platform",
    description:
      "Professional video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, CapCut, and Pinterest. Fast, free, and easy to use.",
    images: ["/images/universal-og-image.png"],
  },
  verification: {
    google: "your-google-site-verification",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Critical resource hints for better FCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Viewport and theme optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />

        {/* Favicon and PWA icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Organization Schema - Site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FreeVideoDownloader.co",
              url: "https://freevideodownloader.co",
              logo: "https://freevideodownloader.co/logo.png",
              description:
                "Free online video downloader service supporting YouTube, TikTok, Instagram, Facebook, Twitter and more platforms.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "contact@freevideodownloader.co",
                availableLanguage: ["English"],
                areaServed: "Worldwide",
              },
              sameAs: ["https://freevideodownloader.co"],
              foundingDate: "2024",
              serviceArea: {
                "@type": "Place",
                name: "Worldwide",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Video Download Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "YouTube Video Download",
                      description: "Download YouTube videos in HD quality",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "TikTok Video Download",
                      description: "Download TikTok videos without watermark",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instagram Video Download",
                      description: "Download Instagram videos, reels, and stories",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Facebook Video Download",
                      description: "Download Facebook videos and reels",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Twitter Video Download",
                      description: "Download Twitter/X videos and GIFs",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Website Schema - Site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FreeVideoDownloader.co",
              url: "https://freevideodownloader.co",
              description:
                "Free online video downloader to download videos from any website including YouTube, TikTok, Instagram, Facebook, Twitter and more.",
              inLanguage: "en",
              publisher: {
                "@type": "Organization",
                name: "FreeVideoDownloader.co",
                url: "https://freevideodownloader.co",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://freevideodownloader.co/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Critical CSS for preventing CLS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS to prevent layout shifts */
            .hero-section { min-height: 100vh; }
            .nav-loading { height: 64px; }
            .loading-skeleton { 
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
            /* Prevent font loading shifts */
            body { font-family: ${inter.style.fontFamily}, system-ui, -apple-system, sans-serif; }
            /* Optimize image loading */
            img { content-visibility: auto; }
          `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}
