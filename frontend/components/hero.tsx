"use client"

import { Button } from "@/components/ui/button"
import { Zap, Shield, Globe } from "lucide-react"
import { UniversalDownloader } from "@/components/universal-downloader"

export function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4 py-24 relative">
        <div className="text-center max-w-4xl mx-auto mb-10 mt-0">
          {/* <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <Zap className="h-4 w-4 mr-2 text-yellow-500" />
            Fast & Reliable Video Downloads
          </div> */}

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Download Videos from{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Any Platform
            </span>
          </h1>

          {/* <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter Fast,
            free, and easy to use.
          </p> */}
        </div>

        {/* Universal Downloader placed right after the heading */}
        <div className="mb-16">
          <UniversalDownloader />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="outline" onClick={scrollToFeatures}>
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Download videos in seconds with our optimized servers</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">100% Safe</h3>
            <p className="text-sm text-muted-foreground">No malware, no ads, completely secure downloads</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Multi-Platform</h3>
            <p className="text-sm text-muted-foreground">Support for 6+ major social media platforms</p>
          </div>
        </div>
      </div>
    </section>
  )
}
