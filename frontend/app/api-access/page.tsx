import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Zap, Shield, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Access - FreeVideoDownloader Developer API",
  description:
    "Access our powerful video downloader API for YouTube, TikTok, Instagram, Facebook, and Twitter. High success rate, fast response times, and reliable service for developers.",
  keywords:
    "video downloader API, developer API, YouTube API, TikTok API, Instagram API, Facebook API, Twitter API, video download service",
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
    { name: "Twitter", icon: "🐦", description: "Extract videos and GIFs from Twitter/X" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
            <Code className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">FreeVideoDownloader API</h1>
          <p className="text-muted-foreground text-lg">Powerful video download API for developers and businesses</p>
        </div>

        {/* Main Description */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              The <strong>freevideodownloader.co API</strong> provides an easy and appropriate method for regaining
              media files from the most popular websites and social media platforms. With a high success rate and
              fantastic response time, the freevideodownloader.co API stands out as the top choice in the market.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our API?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">High Success Rate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Industry-leading success rate for video downloads across all supported platforms
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Fast Response Time</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Optimized servers ensure quick processing and fantastic response times
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Reliable Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Stable and dependable API service with excellent uptime and support
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Supported Platforms</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                The freevideodownloader.co API supports downloads from several websites, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supportedPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-card">
                    <span className="text-2xl">{platform.icon}</span>
                    <div>
                      <h3 className="font-semibold">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">API Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                    <span>RESTful API design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                    <span>JSON response format</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                    <span>Multiple video quality options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                    <span>Audio extraction support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                    <span>Rate limiting protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                    <span>Error handling & status codes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                    <span>Developer support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Startups & Apps</h3>
                <p className="text-sm text-muted-foreground">
                  Integrate video downloading into your mobile or web applications
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold mb-2">Enterprise Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Scale your business with reliable video processing capabilities
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-semibold mb-2">Automation Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Build automated workflows and content management systems
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Get API Access</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6">To attain access or obtain more information, please contact us at:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border max-w-full">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <a
                href="mailto:contact@freevideodownloader.co"
                className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg break-all text-center"
              >
                contact@freevideodownloader.co
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We'll get back to you within 24 hours with pricing and integration details.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
