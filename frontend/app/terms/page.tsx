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
  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            mainEntity: {
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
            },
          }),
        }}
      />

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
                  various social media platforms and video sharing websites. The service is provided "as is" and is
                  intended for personal, non-commercial use only.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">By using our service, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Respect copyright laws and intellectual property rights</li>
                  <li>Not download copyrighted content without proper authorization</li>
                  <li>Not use the service for commercial purposes without permission</li>
                  <li>Not attempt to circumvent any security measures</li>
                  <li>Not overload or abuse the service infrastructure</li>
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
                  We respect intellectual property rights and expect our users to do the same. You are solely
                  responsible for ensuring that your use of downloaded content complies with copyright laws.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Important Notes:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Only download content you own or have permission to download</li>
                    <li>Respect the terms of service of the original platforms</li>
                    <li>Do not redistribute copyrighted content without authorization</li>
                    <li>Use downloaded content for personal purposes only</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You may not use our service:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To download copyrighted content without proper authorization</li>
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>
                    To violate any international, federal, provincial, or state regulations, rules, laws, or local
                    ordinances
                  </li>
                  <li>
                    To infringe upon or violate our intellectual property rights or the intellectual property rights of
                    others
                  </li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain the availability of our service, but we do not guarantee uninterrupted access.
                  The service may be temporarily unavailable due to maintenance, updates, or technical issues. We
                  reserve the right to modify, suspend, or discontinue the service at any time without notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The service is provided "as is" and "as available" without any representations or warranties, express
                  or implied. We make no representations or warranties in relation to this website or the information
                  and materials provided on this website. We do not warrant that the service will be error-free or
                  uninterrupted.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall FreeVideoDownloader.co, its officers, directors, employees, or agents be liable to
                  you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever
                  resulting from any loss of use, data, or profits, whether in an action of contract, negligence, or
                  other tortious action, arising out of or in connection with the use of this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless FreeVideoDownloader.co and its affiliates from and
                  against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses
                  (including but not limited to attorney's fees) arising from your use of the service or violation of
                  these terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Privacy Policy</CardTitle>
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
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to the service immediately, without prior notice or liability,
                  for any reason whatsoever, including without limitation if you breach the Terms. Upon termination,
                  your right to use the service will cease immediately.
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
