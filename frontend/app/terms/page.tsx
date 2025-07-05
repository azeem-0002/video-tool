import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Free Video Downloader",
  description:
    "Read the Terms of Service for Free Video Downloader covering copyright compliance, user responsibilities, and legal disclaimers.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://freevideodownloader.co/terms#webpage",
    url: "https://freevideodownloader.co/terms",
    name: "Terms of Service",
    description:
      "Review the Free Video Downloader Terms of Service outlining proper usage of tools, copyright policies, and user responsibilities for video downloading from third-party platforms.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      url: "https://freevideodownloader.co",
      name: "Free Video Downloader",
    },
  }

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Terms of Service",
    url: "https://freevideodownloader.co/terms",
    datePublished: "2025-06-28",
    dateModified: "2025-06-28",
    publisher: {
      "@type": "Organization",
      name: "Free Video Downloader",
      url: "https://freevideodownloader.co",
      logo: {
        "@type": "ImageObject",
        url: "https://freevideodownloader.co/logo.png",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: "General Public",
    },
    about: {
      "@type": "Thing",
      name: "Terms, Conditions, Copyright, Content Use",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 5, 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using FreeVideoDownloader.co ("the Service"), you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  FreeVideoDownloader.co provides a free online service that allows users to download videos from
                  various social media platforms and websites. The service is provided "as is" and we make no warranties
                  regarding the availability, functionality, or quality of the service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">As a user of our service, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Respect copyright laws and intellectual property rights</li>
                  <li>Not download content without proper authorization from content owners</li>
                  <li>Not use the service to infringe on others' rights</li>
                  <li>Not attempt to reverse engineer or exploit the service</li>
                  <li>Not use automated tools or bots to access the service</li>
                  <li>Comply with all applicable local, state, and federal laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Copyright and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We respect intellectual property rights and expect our users to do the same. You acknowledge that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>All content downloaded through our service remains the property of its original creators</li>
                  <li>You are responsible for ensuring you have the right to download and use any content</li>
                  <li>We do not claim ownership of any content processed through our service</li>
                  <li>You should only download content that you own or have permission to download</li>
                  <li>Commercial use of downloaded content may require additional permissions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">You may not use our service:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To download copyrighted content without permission</li>
                  <li>For any illegal or unauthorized purpose</li>
                  <li>To violate any international, federal, provincial, or state regulations or laws</li>
                  <li>To transmit or procure the sending of any advertising or promotional material</li>
                  <li>To impersonate or attempt to impersonate the company, employees, or other users</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use of the service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain the service's availability but do not guarantee uninterrupted access. The
                  service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve
                  the right to modify, suspend, or discontinue the service at any time without notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  service, to understand our practices regarding the collection and use of your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by
                  law, this company:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Does not guarantee the accuracy, completeness, or timeliness of the service</li>
                  <li>Is not responsible for any errors or omissions in the content</li>
                  <li>Does not warrant that the service will be available or error-free</li>
                  <li>Is not liable for any damages arising from the use of the service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall FreeVideoDownloader.co, its officers, directors, employees, or agents be liable for
                  any indirect, incidental, special, consequential, or punitive damages, including without limitation,
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless FreeVideoDownloader.co and its licensee and
                  licensors, and their employees, contractors, agents, officers and directors, from and against any and
                  all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not
                  limited to attorney's fees).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use
                  the service will cease immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which we operate,
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision of
                  these Terms will not be considered a waiver of those rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: contact@freevideodownloader.co</p>
                  <p>Website: https://freevideodownloader.co</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
