import { Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - FreeVideoDownloader",
  description:
    "Read the Privacy Policy of FreeVideoDownloader.co. Learn how we collect, use, and protect your data when using our video downloading tools across TikTok, YouTube, Instagram, Facebook, and more.",
  keywords: [
    "FreeVideoDownloader Privacy Policy",
    "Data Protection",
    "GDPR CCPA Compliance",
    "Video Downloader Privacy",
    "No Personal Data Collection",
    "Secure Video Downloading",
    "Cookie Policy",
    "Google Analytics Usage",
    "Third-party services",
    "Safe Video Downloader"
  ],
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
            <p><strong>Effective Date:</strong> 06/28/2025</p>
            <p><strong>Website:</strong> https://freevideodownloader.co</p>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              You are warmly esteemed for visiting our freevideodownloader.co because of its strong Privacy Policy that entertains how we collect, use, narrate, and protect your information when you visit our website and use our services to download videos from third-party platforms such as TikTok, Instagram, YouTube, Facebook, and Twitter.
              <br /><br />
              Your privacy is significant to us, and we are committed to protect it in compliance with international data protection levels such as GDPR and CCPA, even if we do not directly process personal data by default in any case.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">

          {[
            {
              title: "1. Information We Collect",
              content: `We struggle to limit data collection to the minimum importance. Here's what we may collect:\n\n
a. Automatically Collected Data\n
When anybody accesses or tries to access our site, we may automatically collect certain information, such as:\n
• IP address of user\n
• Browser type and version of device\n
• Operating system, Device type and unique identifiers\n
• Referring URL\n
• Date and time of access\n
• Pages you view\n
• Approximate geographic location (country level)\n
This data is used for analytics, security, and site optimization purposes only.\n\n
b. Voluntarily Provided Information\n
There is nothing to require when you visit our website. On the other hand certain credentials are required when you attempt to register yourself on our site like vise\n
• Your name (if provided)\n
• Your email address\n
• The content of your message\n
This data is only used for responding to inquiries and will not be shared or sold to any third party.`
            },
            {
              title: "2. Use of Information",
              content: `The collected data is used for the following purposes:\n
• To monitor and analyze website performance and usage trends\n
• Improve user experience and interface\n
• Detect and prevent fraudulent or illegal activity\n
• Respond to your inquiries or feedback\n
• Comply with legal obligations\n
We have no dare to use your data for profiling, direct marketing, or behavioral advertising.`
            },
            {
              title: "3. Cookies and Tracking Technologies",
              content: `Cookies and similar technologies are used by us to:\n
• Save your preferences\n
• Improve loading speed\n
• Gather anonymized traffic data via tools like Google Analytics\n
• Serve contextual ads via partners like Google AdSense\n\n
Cookie Options:\n
It is assured that We do not use cookies to personally identify users. It is up to you to refuse the use of cookies by selecting the suitable settings in your browser. However, this may restrict some functionalities of the website.`
            },
            {
              title: "4. Third-Party Services",
              content: `Third-party services might work with us that may collect anonymized data. These may be included:\n
• Google Analytics\n
• Google AdSense\n
• Content Delivery Networks (CDNs)\n
• Security Services: Cloudflare (for threat detection)\n\n
Each and every third-party service has its own privacy policy, therefore we encourage you to review their terms and conditions.\n
Likewise, we do not sell or rent your data to any third parties.`
            },
            {
              title: "5. Downloading Content Disclaimer",
              content: `For personal use only our service acts as an intermediary that allows users to extract public video URLs and download them. We do not host or store any videos on our servers.\n\n
Hence:\n
• We do not control or modify the original content.\n
• The user is solely responsible for ensuring compliance with the terms of use of the platform they are downloading from.\n
• Downloading copyrighted or private content without permission is strictly prohibited.\n
• For the sake of using our website, you agree that you will not use it for illegal, infringing, or unauthorized purposes.`
            },
            {
              title: "6. Data Sharing and Disclosure",
              content: `Collected data is used only in the following situations:\n
• To comply with a legal obligation (court orders, government requests)\n
• To protect and defend our legal rights or property\n
• In connection with a business transfer (merger, sale, etc.)\n
• With your explicit consent\n\n
We encourage you to use our services because there is nothing to injure you likewise we do not sell user data.`
            },
            {
              title: "7. Data Security",
              content: `Industry-standard measures are implemented by us to protect your data, including:\n
• SSL encryption (HTTPS)\n
• Secure server environments\n
• Regular malware and vulnerability scanning\n\n
Despite this, no method of transmission over the Internet is 100% secure hence we cannot guarantee you for absolute data protection.`
            },
            {
              title: "8. Data Retention",
              content: `For analytical purposes non-personal data is retained by us for a maximum of 12 months.\n
To meet the needs of query or comply with legal obligations. Communication data (emails) is stored only as long as necessary to respond.`
            },
            {
              title: "9. User Rights (Under GDPR/CCPA)",
              content: `We don’t actively collect personal data, though you have the right to:\n
• Request access to your personal data (if any)\n
• Correction or deletion\n
• Object to processing\n
• Data portability\n
• File a complaint with a data protection authority\n\n
For availing the above mentioned you have to exercise these rights by contacting us.`
            },
            {
              title: "10. Children’s Privacy",
              content: `Our website and services are not willing to direct children under 13 (or under 16 in the EU) for the sake of collection of data.\n
If we become aware that a child has provided us personal data, we will delete it as soon as possible.`
            },
            {
              title: "11. International Data Transfers",
              content: `Our servers and service providers have to follow the legal framework only, may be located in countries outside your own.\n
By using our website, you consent to the transfer of your data to these countries, subject to adequate protections as required by applicable laws.`
            },
            {
              title: "12. Changes to This Privacy Policy",
              content: `To update this Privacy Policy from time to time we have to reflect changes in:\n
• Legal requirements\n
• Our services\n
• Industry practices\n\n
Any changes will be posted on this page and the effective date will be updated. We recommend reviewing this page from time to time.`
            },
            {
              title: "13. Contact Us",
              content: `For any query or concerns regarding this Privacy Policy, please contact us at:\n
📧 Email: contact@freevideodownloader.co\n
🌐 Website: https://freevideodownloader.co`
            }
          ].map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-start gap-2 whitespace-pre-wrap">
                  <span className="text-blue-600 font-bold">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <p className="leading-relaxed text-center font-medium">
                Thank you for trusting us. We aim to serve you with a secure, clear, and respectful privacy-first experience.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
