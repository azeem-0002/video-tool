import { Mail, MessageCircle, Shield, Globe, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - FreeVideoDownloader",
  description:
    "Reach out to FreeVideoDownloader at contact@freevideodownloader.co. We respect your privacy and welcome your feedback, concerns, or suggestions with no personal data required.",
  keywords: [
    "Free Video Downloader",
    "Contact FreeVideoDownloader",
    "Video Download Support",
    "YouTube Downloader Help",
    "Privacy Friendly Downloader",
    "TikTok Video Download Support",
    "Instagram Downloader Contact",
    "Facebook Video Downloader",
    "No Login Video Downloader",
    "Download Videos Anonymously"
  ],
  robots: {
    index: true,
    follow: true,
  },
}


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Get in touch at freevideodownloader.co</h1>
          <p className="text-lg text-muted-foreground">We are here to assist — obviously privately and simply.</p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              Although we do not request your personal information yet we welcome comments, questions, or concerns raised by you on behalf of your experience.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">Ask a question or want to document a problem?</p>
              <p className="leading-relaxed mb-4">
                Just email us straight at:{" "}
                <a
                  href="mailto:contact@freevideodownloader.co"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                >
                  contact@freevideodownloader.co
                </a>
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Usually Monday to Friday, we reply within 24 to 48 hours.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-green-600" />
                How can you contact us?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">You are warmly welcome to reach out for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Broad questions or comments connected to tools</li>
                <li>Notifying broken features or website problems</li>
                <li>Advice for development</li>
                <li>Concerns regarding our terms or privacy statement</li>
                <li>Not Personal Information Called for that are not related to the said queries</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-600" />
                Not Personal Information Called For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">We do not call for you to supply:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Title name</li>
                <li>Email for newsletter purposes</li>
                <li>Account or login process</li>
                <li>Phone number</li>
              </ul>
              <p className="leading-relaxed">
                and it is also assured to you that Your message is kept private; we do not save or distribute any personal information at any platform at any cost.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-orange-600" />
                Demand legal information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">In connection with legal specifics, kindly entertain to:</p>
              <div className="space-y-2">
                <div>
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Policy on Privacy
                  </a>
                </div>
                <div>
                  <a href="/terms" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Service Terms of Contract
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                Alert Reminder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                User information or downloads are not stored by us. Still on your browser — your activity.
              </p>
              <p className="leading-relaxed">
                You are in charge of how you use our tool; kindly respect all local laws and copyrights.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle className="w-6 h-6" />
                That's It: Clearly Private, Useful.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-center font-medium text-green-800 dark:text-green-200">
                That's how the internet ought to operate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
