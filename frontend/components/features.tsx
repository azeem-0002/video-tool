import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Smartphone, Shield, Zap, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Download,
    title: "High Quality Downloads",
    description: "Download videos in their original quality, including HD and 4K when available.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Fully responsive design that works perfectly on all devices and screen sizes.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "No registration required. Your privacy is protected with secure downloads.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized servers ensure quick processing and fast download speeds.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description: "Support for YouTube, TikTok, Instagram, Facebook, and Twitter.",
  },
  {
    icon: Heart,
    title: "Completely Free",
    description: "No hidden fees, no subscriptions. Download unlimited videos for free.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VideoDownloader Pro?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most reliable and feature-rich video downloader with support for all major platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
