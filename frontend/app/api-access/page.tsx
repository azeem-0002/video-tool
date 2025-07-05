import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Shield, Globe, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Access | Free Video Downloader - Developer Integration",
  description:
    "Integrate video downloading capabilities into your applications with our robust API. Fast, reliable, and supports all major platforms. Contact us for API access and documentation.",
  keywords:
    "video downloader API, developer API, video download integration, API documentation, bulk video download, enterprise API, video extraction API",
  robots: {
    index: true,
    follow: true,
  },
}

export default function APIAccessPage() {
  const supportedPlatforms = [
    { name: "YouTube", icon: "🎥", description: "Download videos and audio from YouTube" },
    { name: "TikTok", icon: "🎵", description: "Extract TikTok videos without watermarks" },
    { name: "Instagram", icon: "📸", description: "Save Instagram posts, reels, and stories" },
    { name: "Facebook", icon: "📘", description: "Download Facebook videos and content" },
    { name: "Twitter/X", icon: "🐦", description: "Extract videos and GIFs from Twitter/X" },
    { name: "Vimeo", icon: " Vimeo", description: "Download videos from Vimeo" },
    { name: "Dailymotion", icon: " Dailymotion", description: "Download videos from Dailymotion" },
    { name: "Reddit", icon: " Reddit", description: "Download videos from Reddit" },
    { name: "Twitch", icon: " Twitch", description: "Download videos from Twitch" },
    { name: "More...", icon: " More...", description: "And more platforms supported" },
  ]

  return (
    <>
      {/* WebAPI Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebAPI",
            name: "FreeVideoDownloader API",
            description:
              "The FreeVideoDownloader API provides fast, reliable access to video and audio downloads from top platforms like YouTube, TikTok, Instagram, Facebook, and Twitter. Designed for developers and businesses.",
            documentation: "https://freevideodownloader.co/api-access",
            termsOfService: "https://freevideodownloader.co/terms",
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
          }),
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">API Access for Developers</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate powerful video downloading capabilities into your applications with our robust, scalable API.
              Support for all major platforms with enterprise-grade reliability.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Lightning Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-performance API with sub-second response times and optimized video processing pipelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Enterprise Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Secure API endpoints with authentication, rate limiting, and comprehensive monitoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Global Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Worldwide CDN distribution with 99.9% uptime guarantee and 24/7 technical support.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Supported Platforms */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Supported Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {supportedPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* API Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>API Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Multiple Quality Options</h3>
                    <p className="text-sm text-muted-foreground">
                      Download videos in various resolutions from 240p to 4K, plus audio-only formats
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Bulk Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Process multiple URLs simultaneously with batch API endpoints
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Metadata Extraction</h3>
                    <p className="text-sm text-muted-foreground">
                      Get video titles, descriptions, thumbnails, and other metadata
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Format Conversion</h3>
                    <p className="text-sm text-muted-foreground">
                      Convert videos to MP4, MP3, and other popular formats on-the-fly
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Developer Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">RESTful API Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Clean, intuitive endpoints following REST principles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed API docs with examples in multiple programming languages
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">SDKs & Libraries</h3>
                    <p className="text-sm text-muted-foreground">
                      Official SDKs for Python, Node.js, PHP, and other popular languages
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Webhook Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time notifications for long-running download operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Plans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">API Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-2xl font-bold">$29/month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li>• 10,000 API calls/month</li>
                    <li>• All supported platforms</li>
                    <li>• Standard support</li>
                    <li>• Rate limit: 10 req/min</li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-500 border-2 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">Most Popular</Badge>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-2xl font-bold">$99/month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li>• 100,000 API calls/month</li>
                    <li>• All supported platforms</li>
                    <li>• Priority support</li>
                    <li>• Rate limit: 50 req/min</li>
                    <li>• Webhook support</li>
                    <li>• Bulk processing</li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-2xl font-bold">Custom</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li>• Unlimited API calls</li>
                    <li>• All supported platforms</li>
                    <li>• 24/7 dedicated support</li>
                    <li>• Custom rate limits</li>
                    <li>• SLA guarantee</li>
                    <li>• Custom integrations</li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Code Example */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Quick Start Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// Example API request
curl -X POST https://api.freevideodownloader.co/v1/download \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "format": "mp4",
    "quality": "720p"
  }'

// Response
{
  "success": true,
  "data": {
    "download_url": "https://cdn.freevideodownloader.co/...",
    "title": "Video Title",
    "duration": 212,
    "thumbnail": "https://...",
    "expires_at": "2025-01-06T12:00:00Z"
  }
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of developers who trust our API for their video downloading needs. Get your API key today
                and start building amazing applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  Get API Access
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
