import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Mail, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Access | Free Video Downloader - Developer Integration",
  description:
    "Access the freevideodownloader.co API for downloading media files from popular platforms. High success rate and fantastic response time. Contact us for API access.",
  keywords:
    "video downloader API, developer API, video download integration, API documentation, bulk video download, enterprise API, video extraction API",
  robots: {
    index: true,
    follow: true,
  },
   alternates: {
    canonical: "https://freevideodownloader.co/api-access",
  },
}

export default function APIAccessPage() {
  const supportedPlatforms = [
    { name: "YouTube", color: "bg-red-500" },
    { name: "TikTok", color: "bg-black" },
    { name: "Instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Facebook", color: "bg-blue-600" },
    { name: "Twitter", color: "bg-blue-400" },
  ]

  return (
    <>
      {/* Structured Data: WebAPI + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebAPI",
              name: "FreeVideoDownloader API",
              description:
                "The FreeVideoDownloader API provides fast, reliable access to video and audio downloads from top platforms like YouTube, TikTok, Instagram, Facebook, and Twitter. Designed for developers and businesses.",
              documentation: "https://freevideodownloader.co/api",
              termsOfService: "https://freevideodownloader.co/terms-of-service",
              provider: {
                "@type": "Organization",
                name: "FreeVideoDownloader",
                url: "https://freevideodownloader.co",
              },
              endpointDescription: "https://freevideodownloader.co/api/docs",
              endpointUrl: "https://freevideodownloader.co/api/v1",
              protocol: "REST",
              contentType: "application/json",
              areaServed: "Worldwide",
              offers: {
                "@type": "Offer",
                price: "Contact for pricing",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "API Support",
                email: "contact@freevideodownloader.co",
                availableLanguage: "English",
              },
              keywords: [
                "video download API",
                "YouTube downloader API",
                "TikTok video API",
                "Instagram video extractor",
                "Facebook video downloader",
                "Twitter video API",
                "REST video API",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://freevideodownloader.co",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "API Access",
                  item: "https://freevideodownloader.co/api-access",
                },
              ],
            },
          ]),
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-6">API Access</h1>

            <Card className="text-left">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-6">
                  The freevideodownloader.co API provides an easy and appropriate method for regaining media files from
                  the most popular websites and social media platforms. With a high success rate and fantastic response
                  time, the freevideodownloader.co API stands out as the top choice in the market.
                </p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">
                    The freevideodownloader.co API supports downloads from several websites, including:
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {supportedPlatforms.map((platform, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <Badge className={`${platform.color} text-white`}>{platform.name}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg">
                    To attain access or obtain more information, please contact us at{" "}
                    <a
                      href="mailto:contact@freevideodownloader.co"
                      className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      contact@freevideodownloader.co
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="pt-8">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to learn more about our API capabilities and get access to integrate our video
                downloading services into your applications.
              </p>
              <Button size="lg" className="flex items-center gap-2 mx-auto" asChild>
                <a href="mailto:contact@freevideodownloader.co">
                  Contact Us for API Access
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
