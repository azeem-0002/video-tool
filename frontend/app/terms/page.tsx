import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Shield, Users, AlertTriangle, Mail, Globe } from "lucide-react"
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
      {/* Schema in body as requested */}
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
              datePublished: "2025-07-05",
              dateModified: "2025-07-05",
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
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge variant="outline" className="text-sm">
                Effective Date: 07/05/2025
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Website: https://freevideodownloader.co
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Welcome to our freevideodownloader.co! The Terms of Service that are governed to use our website and tools
              to download content by any of third-party platforms or websites. To get access or to use our services you
              should have to agree or fulfil these Terms given below.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  By using our freevideodownloader.co, you should have to confirm that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    It has been read, understood and agreed by you for the sake of legally bound to these terms and
                    conditions.
                  </li>
                  <li>You have a legal age for your jurisdiction to use these services.</li>
                  <li>On the other hand, if you disagree with any part of these terms please don't use the website</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  2. Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  freevideodownloader.co permits the users to download videos and media from the following
                  platforms/website:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  <Badge variant="outline">TikTok</Badge>
                  <Badge variant="outline">Instagram</Badge>
                  <Badge variant="outline">Facebook</Badge>
                  <Badge variant="outline">YouTube</Badge>
                  <Badge variant="outline">Twitter (X)</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The URL that is publicly available if any content by the user he/she has to paste it to receive
                  downloadable versions, subject to each and every platform's policies and copyright laws.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Important:</strong> We have no store of any videos on our servers. All downloads are
                    processed in real time by user provided links.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  3. Disclaimer on Third-Party Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You should have to acknowledge and agree with that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    freevideodownloader.co is neither affiliated, associated, nor endorsed by TikTok, Instagram,
                    Facebook, YouTube, or Twitter.
                  </li>
                  <li>All the trademarks, logos and brand names are the property of their respective owners.</li>
                  <li>
                    The use of our services neither grant you any rights over the intellectual property of these
                    platforms nor permits it.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  4. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You should have to be liable in contradiction to these:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>The website can be used only for personal and non-commercial purposes.</li>
                  <li>
                    You will not be authorized to download or redistribute copyrighted content without prior permission
                    of the content owner.
                  </li>
                  <li>Our services can't be used for any illegal, infringing, or abusive activity.</li>
                  <li>
                    To agree with the Terms of Service and Community Guidelines of the original platform from which you
                    download content.
                  </li>
                  <li>Any kind of misuse of our tools may result in access restriction or legal action.</li>
                  <li>You are fully responsible for how you have to use downloaded content.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle>5. Copyright and Content Ownership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All rights of downloaded content remain legally bound with their respective content creators or
                  platforms therefore we don't host any of the content that user download.
                </p>
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    If you are a content owner and wish to have a link or tool be removed, please contact us at{" "}
                    <a href="mailto:contact@freevideodownloader.co" className="underline">
                      contact@freevideodownloader.co
                    </a>
                    .
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We will respond to you briskly to copyright takedown requests (DMCA).
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  6. Prohibited Uses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">You have to agree not to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Download or attempt to download content beyond login restrictions.</li>
                  <li>Use scrapers, automated bots, or spamming tools on our website.</li>
                  <li>
                    Sell, or distribute downloaded content for profit unless you are the rightful owner or have
                    permission.
                  </li>
                  <li>Overcome security features of third-party platforms.</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    <strong>Warning:</strong> Violation of these prohibitions may result in temporary or permanent ban
                    from using our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card>
              <CardHeader>
                <CardTitle>7. No Warranty & Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We provide our services "as is" and "as available", without any kind of warranty and guarantee:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Availability of all platform links continuously.</li>
                  <li>That all videos will remain downloadable (due to API or platform changes)</li>
                  <li>That downloaded files having no errors or malicious content.</li>
                </ul>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">We are not liable for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Any content that is downloaded via our downloader tools, misused</li>
                  <li>Any kind of damage resulting after using our website</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card>
              <CardHeader>
                <CardTitle>8. Changes to the Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To improve or update these Terms at any time. It's our legal right that's why The most updated tool
                  version for our users will always be available at{" "}
                  <a href="https://freevideodownloader.co/terms" className="text-primary underline">
                    https://freevideodownloader.co/terms
                  </a>
                  . Users can continue use of the website after changes constitute acceptance of the updated Terms and
                  conditions.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card>
              <CardHeader>
                <CardTitle>9. Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our site is governed by our PRIVACY-POLICY as the rule and justice is adopted by other websites. For
                  further please review it at{" "}
                  <a href="https://freevideodownloader.co/privacy" className="text-primary underline">
                    https://freevideodownloader.co/privacy
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  10. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  For any type of questions, concerns, or DMCA/copyright issues, please contact us at:
                </p>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Email:</span>
                    <a href="mailto:contact@freevideodownloader.co" className="text-primary underline">
                      contact@freevideodownloader.co
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Website:</span>
                    <a href="https://freevideodownloader.co" className="text-primary underline">
                      https://freevideodownloader.co
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final Notes */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-dashed border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">📌 Final Notes</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The legal rights for the content creators and platforms are highly esteemed by us. Our tools are
                  designed for the sake of educational, personal, and fair-use purposes.
                </p>
                <p className="text-primary font-semibold">
                  Therefore it is optimized by you to use our service legally and ethically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
