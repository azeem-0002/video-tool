import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Clock, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Free Video Downloader",
  description:
    "Get in touch with Free Video Downloader for support, suggestions, or issues. We respect your privacy and respond within 24–48 hours.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactUs() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://freevideodownloader.co/contact-us#webpage",
    url: "https://freevideodownloader.co/contact-us",
    name: "Contact Us",
    description:
      "Reach out to Free Video Downloader for inquiries, technical issues, or feedback. We do not collect personal information and respond within 24–48 hours.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Free Video Downloader",
      url: "https://freevideodownloader.co",
    },
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Free Video Downloader",
    url: "https://freevideodownloader.co",
    email: "contact@freevideodownloader.co",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@freevideodownloader.co",
      contactType: "Customer Support",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    logo: {
      "@type": "ImageObject",
      url: "https://freevideodownloader.co/logo.png",
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            We're here to help! Get in touch with any questions, feedback, or technical issues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us more about your question or issue..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground">
                      For technical issues, feature requests, or general inquiries:
                    </p>
                    <p className="text-blue-600 font-medium">contact@freevideodownloader.co</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within <strong>24-48 hours</strong>. For urgent technical
                  issues, we aim to respond even faster.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We respect your privacy. Any information you share with us is used solely to respond to your inquiry
                  and is not stored or shared with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Technical Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're experiencing problems downloading videos, please include the video URL and describe the
                    issue you're encountering.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature Requests</h3>
                  <p className="text-sm text-muted-foreground">
                    We love hearing your ideas! Let us know what features or improvements you'd like to see.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Platform Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions about supported platforms or video formats? We're happy to help clarify our capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">API Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Interested in our API for your project? Contact us to discuss integration options and pricing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </div>
  )
}
