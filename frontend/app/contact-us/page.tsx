import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Clock } from "lucide-react"
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
  return (
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            mainEntity: {
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
            },
            audience: {
              "@type": "Audience",
              audienceType: "General Public",
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground">
              Have questions, suggestions, or need help? We're here to assist you with our video downloader service.
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
                    <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
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
                    Direct Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For direct inquiries, technical support, or business matters:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-sm">contact@freevideodownloader.co</p>
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
                  <CardTitle>What We Can Help With</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Technical issues with video downloads</li>
                    <li>• Questions about supported platforms</li>
                    <li>• Feature requests and suggestions</li>
                    <li>• Copyright and legal inquiries</li>
                    <li>• Business partnerships</li>
                    <li>• General feedback about our service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How quickly do you respond to messages?</h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 hours. Urgent technical issues are prioritized and
                    typically receive faster responses.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you collect personal information from contact forms?</h3>
                  <p className="text-muted-foreground">
                    We only use the information you provide to respond to your inquiry. We don't store personal data
                    unnecessarily or use it for marketing purposes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can you help with copyright issues?</h3>
                  <p className="text-muted-foreground">
                    Yes, we take copyright concerns seriously. If you have questions about content usage or need to
                    report copyright infringement, please contact us directly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer business partnerships or API access?</h3>
                  <p className="text-muted-foreground">
                    We're open to discussing business partnerships and API access. Please reach out with details about
                    your project or requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
