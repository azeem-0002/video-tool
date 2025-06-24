import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - FreeVideoDownloader",
  description:
    "Privacy Policy for FreeVideoDownloader - We don't collect or store any personal information. Your privacy is our priority.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <strong>Effective Date of Privacy Policy:</strong> June 19, 2025
            </p>
            <p>
              <strong>Current Date of Update:</strong> June 19, 2025
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              At freevideodownloader.co, your privacy is important to us. How we handle your information when you use
              our service is described in this policy. To be clear, we don't gather or keep any personal information.
              Your visit is always confidential.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                Things We Don't Gather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Your name, email address, or any other personal information is not requested. No forms, no accounts, and
                no covert tracking. We don't maintain any logs of your activities; everything happens just in your
                browser.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                No Hidden Trackers or Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Cookies, tracking pixels, and third-party analytics tools are not used by us. No advertisements, no
                behavioral tracking, and no fingerprinting. When you visit our website, your identity remains anonymous.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                The Operation of Our Server
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Our hosting is safe and adheres to accepted internet safety guidelines. Similar to other websites, in
                order to guard against misuse or outages, certain non-identifiable technical logs might be temporarily
                stored (such as the time of request). These logs are kept to a minimum, are not private, and are
                routinely deleted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">4.</span>
                Privacy of Children
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Users under the age of thirteen should not use our site. This website automatically refrains from
                collecting any information from kids since we don't gather any.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">5.</span>
                How We Handle Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Even though we don't keep any user data on file, we nevertheless guard against vulnerabilities and
                illegal access to our systems. We have designed it so that the fewer data stored, the lower the risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">6.</span>
                Modifications to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Technically or legally, we'll update this page and change the "Last Updated" date above if anything
                changes. The most recent version is always available here.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">7.</span>
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Have more questions? You can contact them at{" "}
                <a href="mailto:support@freevideodownloader.co" className="text-blue-600 hover:text-blue-800 underline">
                  support@freevideodownloader.co
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <p className="leading-relaxed text-center font-medium">
                We appreciate your faith in us. Our objective is straightforward: offer a quick, secure, and private
                movie download experience with no conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
