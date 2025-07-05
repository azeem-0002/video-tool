"use client"

import { Button } from "@/components/ui/button"
import { Zap, Shield, Globe } from "lucide-react"
import { UniversalDownloader } from "@/components/universal-downloader"
import { memo, useCallback } from "react"

// Memoize the component to prevent unnecessary re-renders
const Hero = memo(function Hero() {
  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById("features-section")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 hero-section">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Download Videos from{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Any Website
            </span>
          </h1>
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
            <p className="text-sm text-muted-foreground text-pretty">
              Download videos from any website in seconds with our optimized online video downloader
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">100% Safe</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Secure online video download with no malware, no ads, completely safe
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Universal Support</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Universal video downloader supporting 6+ major social media platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

export { Hero }
