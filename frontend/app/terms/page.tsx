import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - FreeVideoDownloader",
  description:
    "Review the Terms of Service for FreeVideoDownloader.co. Learn about your rights, responsibilities, acceptable use, copyright rules, and limitations when using our free video downloading tools.",
  keywords: [
    "FreeVideoDownloader Terms",
    "Video Downloader Terms of Service",
    "Content Download Guidelines",
    "Copyright Disclaimer",
    "Third-party Platform Terms",
    "TikTok YouTube Downloader Rules",
    "Legal Use of Video Downloader",
    "DMCA Policy",
    "Safe Video Downloading",
    "Acceptable Use Policy"
  ],
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
          <h1 className="text-3xl font-bold mb-4">📄 Terms of Service</h1>
          <div className="text-sm text-muted-foreground">
            <p><strong>Effective Date:</strong> 06/28/2025</p>
            <p><strong>Website:</strong> https://freevideodownloader.co</p>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              Welcome to our freevideodownloader.co! The Terms of Service that are governed to use our website and tools
              to download content by any of third-party platforms or websites. To get access or to use our services you
              should have to agree or fulfil these Terms given below.
            </p>
          </CardContent>
        </Card>

        {[
          {
            title: "1. Acceptance of Terms",
            content: `By using our freevideodownloader.co, you should have to confirm that:
• It has been read, understood and agreed by you for the sake of legally bound to these terms and conditions.
• You have a legal age for your jurisdiction to use these services.
• On the other hand, if you disagree with any part of these terms please don't use the website.`
          },
          {
            title: "2. Description of Service",
            content: `freevideodownloader.co permits the users to download videos and media from the following platforms/website:

• TikTok
• Instagram
• Facebook
• YouTube
• Twitter (X)

The URL that is publicly available if any content by the user he/she has to paste it to receive downloadable versions, subject to each and every platform's policies and copyright laws.
We have no store of any videos on our servers. All downloads are processed in real time by user provided links.`
          },
          {
            title: "3. Disclaimer on Third-Party Platforms",
            content: `You should have to acknowledge and agree with that:
• freevideodownloader.co is neither affiliated, associated, nor endorsed by TikTok, Instagram, Facebook, YouTube, or Twitter.
• All the trademarks, logos and brand names are the property of their respective owners.
• The use of our services neither grant you any rights over the intellectual property of these platforms nor permits it.`
          },
          {
            title: "4. User Responsibilities",
            content: `You should have to be liable in contradiction to these:
• The website can be used only for personal and non-commercial purposes.
• You will not be authorized to download or redistribute copyrighted content without prior permission of the content owner.
• Our services can’t be used for any illegal, infringing, or abusive activity.
• To agree with the Terms of Service and Community Guidelines of the original platform from which you download content.

Any kind of misuse of our tools may result in access restriction or legal action. You are fully responsible for how you have to use downloaded content.`
          },
          {
            title: "5. Copyright and Content Ownership",
            content: `All rights of downloaded content remain legally bound with their respective content creators or platforms therefore we don't host any of the content that user download.
If you are a content owner and wish to have a link or tool be removed, please contact us at [contact@freevideodownloader.co].
We will respond to you briskly to copyright takedown requests (DMCA).`
          },
          {
            title: "6. Prohibited Uses",
            content: `You have to agree not to:
• Download or attempt to download content beyond login restrictions.
• Use scrapers, automated bots, or spamming tools on our website.
• Sell, or distribute downloaded content for profit unless you are the rightful owner or have permission.
• Overcome security features of third-party platforms.

On the other hand violation of these prohibitions may result in temporary or permanent ban from using our services.`
          },
          {
            title: "7. No Warranty & Limitation of Liability",
            content: `We provide our services "as is" and "as available", without any kind of warranty and guarantee:
• Availability of all platform links continuously.
• That all videos will remain downloadable (due to API or platform changes).
• That downloaded files having no errors or malicious content.

We are not liable for:
• Any content that is downloaded via our downloader tools.
• Misused content.
• Any kind of damage resulting after using our website.`
          },
          {
            title: "8. Changes to the Terms",
            content: `To improve or update these Terms at any time. It's our legal right that's why the most updated tool version for our users will always be available at:
https://freevideodownloader.co/terms

Users can continue use of the website after changes constitute acceptance of the updated Terms and conditions.`
          },
          {
            title: "9. Privacy-Policy",
            content: `Our site is governed by our PRIVACY-POLICY as the rule and justice is adopted by other websites. For further please review it at:
https://freevideodownloader.co/privacy`
          },
          {
            title: "10. Contact Information",
            content: `For any type of questions, concerns, or DMCA/copyright issues, please contact us at:
📧 Email: contant@freevideodownloader.co
🌐 Website: https://freevideodownloader.co`
          },
          {
            title: "📌 Final Notes",
            content: `The legal rights for the content creators and platforms are highly esteemed by us. Our tools are designed for the sake of educational, personal, and fair-use purposes.
Therefore it is optimized by you to use our service legally and ethically.`
          }
        ].map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-start gap-2 whitespace-pre-wrap text-left">
                <span className="text-blue-600 font-bold">{section.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap leading-relaxed">{section.content}</p>
            </CardContent>
          </Card>
        ))}

        <Card className="mt-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <p className="leading-relaxed text-center font-medium text-green-800 dark:text-green-200">
              Thank you for using our service responsibly. We're committed to providing a simple, secure, and privacy-focused video downloading experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
