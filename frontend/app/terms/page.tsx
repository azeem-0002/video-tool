import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - FreeVideoDownloader",
  description:
    "Terms of Service for FreeVideoDownloader - Clear, fair terms for using our free video download service.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <div className="text-sm text-muted-foreground">
            <p>
              <strong>Date of Effective:</strong> June 19, 2025
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              Welcome to freevideodownloader.co. By using our website, you agree to the terms below. We have kept things
              straightforward, open, and fair—just as a user-first internet ought to be.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                Use of Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Our tool is a free, browser-based utility designed to enable users to download publicly available videos
                for personal consumption.
              </p>
              <p className="leading-relaxed">
                There is no tracking, no subscription, no login. There is no data kept on our systems; everything runs
                straight in your browser.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                Legal and Ethical Consumption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">We anticipate users to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Use the service just for legal needs.</li>
                <li>Steer clear of downloading any material they do not own or have permission to access.</li>
                <li>Not try to automate or misuse the functionality of the tool.</li>
              </ul>
              <p className="leading-relaxed">
                We oppose the infringement of copyright laws or platform policies since we support only moral behavior.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                Information Security and Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">We neither gather nor retain:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Your name, email, IP address, or device information.</li>
                <li>Your tool usage or download records.</li>
                <li>Pixels or cookies for tracking.</li>
              </ul>
              <p className="leading-relaxed">
                Your activities remain private. Furthermore, we do not integrate any external tracking systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">4.</span>
                Safety and Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Our offering is meant to be lightweight and safe. However, we do not promise:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>That every video will be downloadable.</li>
                <li>Compatibility with every website.</li>
                <li>Consistent availability or continuous access.</li>
              </ul>
              <p className="leading-relaxed">The tool might sometimes undergo technical upgrades or maintenance.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">5.</span>
                User Accountability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                You are responsible for any media downloaded with our tool. Please confirm that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>You are not violating content ownership rights.</li>
                <li>Your actions comply with applicable laws in your country.</li>
              </ul>
              <p className="leading-relaxed">No video content is ever produced, edited, or shared by us.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">6.</span>
                Attributes or Links from Third Parties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                All links on the site to third-party services are provided for your convenience only.
              </p>
              <p className="leading-relaxed">We have no control over their policies, reliability, or actions.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">7.</span>
                Enhancements to These Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                This article might be altered going forward to reflect legislative or service changes.
              </p>
              <p className="leading-relaxed">The "Effective Date" at the top shows the most recent update.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">8.</span>
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                If you have any questions regarding this Terms of Service, kindly email us directly at:{" "}
                <a href="mailto:support@freevideodownloader.co" className="text-blue-600 hover:text-blue-800 underline">
                  support@freevideodownloader.co
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <p className="leading-relaxed text-center font-medium text-green-800 dark:text-green-200">
              Thank you for using our service responsibly. We're committed to providing a simple, secure, and
              privacy-focused video downloading experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
