import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Free Video Downloader",
  description:
    "Read our privacy policy to understand how Free Video Downloader handles your information in compliance with GDPR and CCPA.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://freevideodownloader.co/privacy#webpage",
    url: "https://freevideodownloader.co/privacy",
    name: "Privacy Policy",
    description:
      "Read the Free Video Downloader privacy policy to understand how we collect, use, and protect your information when using our video downloading services. GDPR & CCPA compliant.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      url: "https://freevideodownloader.co",
      name: "Free Video Downloader",
    },
  }

  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Privacy Policy",
    url: "https://freevideodownloader.co/privacy",
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
      name: "Privacy, GDPR, CCPA, Cookies, Data Protection",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 5, 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to FreeVideoDownloader.co ("we," "our," or "us"). We are committed to protecting your privacy
                  and ensuring the security of your personal information. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website and use our video downloading
                  services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">2.1 Information You Provide</h3>
                  <p className="text-muted-foreground">
                    We collect information you voluntarily provide to us, such as:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>Video URLs you submit for downloading</li>
                    <li>Contact information when you reach out to us</li>
                    <li>Feedback or comments you provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2.2 Automatically Collected Information</h3>
                  <p className="text-muted-foreground">When you visit our website, we may automatically collect:</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>IP address and location information</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage patterns and preferences</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To provide and maintain our video downloading services</li>
                  <li>To process your download requests</li>
                  <li>To improve our website and services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze usage patterns and optimize user experience</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect against fraud and abuse</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With trusted service providers who assist in operating our website</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your browsing experience. You can control
                  cookie settings through your browser preferences.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand usage patterns</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erase your personal information</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us"
                  section.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When
                  we no longer need your information, we will securely delete or anonymize it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that
                  such transfers comply with applicable data protection laws and implement appropriate safeguards to
                  protect your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected such information, we
                  will take steps to delete it promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of any material changes by posting the updated policy on our website and
                  updating the "Last updated" date. Your continued use of our services after such changes constitutes
                  acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
