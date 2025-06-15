import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ToastProvider } from "@/components/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VideoDownloader Pro - Download Videos from Any Platform",
  description:
    "Professional video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, CapCut, and Pinterest. Fast, free, and easy to use.",
  keywords: "video downloader, youtube downloader, tiktok downloader, instagram downloader",
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
