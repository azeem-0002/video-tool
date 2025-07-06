import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Clock, Shield, FileText, AlertTriangle } from "lucide-react"
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
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in touch at freevideodownloader.co
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are here to assist — obviously privately and simply.
            </p>
            <p className="text-muted-foreground mt-4">
              Although we do not request your personal information yet we welcome comments, questions, or concerns
              raised by you on behalf of your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Email Support Card */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-500" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Ask a question or want to document a problem?</p>
                <p className="text-muted-foreground">Just email us straight at:</p>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="font-mono text-lg font-semibold text-blue-700 dark:text-blue-300">
                    contact@freevideodownloader.co
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Usually Monday to Friday, we reply within 24 to 48 hours.
                </div>
              </CardContent>
            </Card>

            {/* How Can You Contact Us */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  How can you contact us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You are warmly welcome to reach out for:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Broad questions or comments connected to tools,
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Notifying broken features or website problems,
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Advice for development,
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Concerns regarding our terms or privacy statement,
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Not Personal Information Called for that are not related to the said queries.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Information */}
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-500" />
                We do not call for you to supply:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Title name,
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Email for newsletter purposes,
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Account or login process,
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Phone number
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-purple-800 dark:text-purple-200 font-medium">
                  and it is also assured to you that Your message is kept private; we do not save or distribute any
                  personal information at any platform at any cost.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal Information */}
          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-500" />
                Demand legal information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">In connection with legal specifics, kindly entertain to:</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a href="/privacy">Policy on Privacy</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/terms">Service Terms of Contract</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alert Reminder */}
          <Card className="mb-8 border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                Alert Reminder
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>User information or downloads are not stored by us.</strong> Still on your browser — your
                  activity.
                </p>
              </div>
              <p className="text-muted-foreground">
                You are in charge of how you use our tool; kindly respect all local laws and copyrights.
              </p>
            </CardContent>
          </Card>

          {/* Final Message */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-dashed border-blue-300 dark:border-blue-700">
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  That's It: Clearly Private, Useful.
                </h2>
                <p className="text-lg text-muted-foreground">That's how the internet ought to operate.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
