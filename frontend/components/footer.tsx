import Link from "next/link"
import { Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Download className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VideoDownloader Pro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The most reliable video downloader for all major social media platforms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platforms</h3>
            <div className="space-y-2 text-sm">
              <Link href="/youtube" className="block text-muted-foreground hover:text-foreground">
                YouTube Downloader
              </Link>
              <Link href="/tiktok" className="block text-muted-foreground hover:text-foreground">
                TikTok Downloader
              </Link>
              <Link href="/instagram" className="block text-muted-foreground hover:text-foreground">
                Instagram Downloader
              </Link>
              <Link href="/facebook" className="block text-muted-foreground hover:text-foreground">
                Facebook Downloader
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More Platforms</h3>
            <div className="space-y-2 text-sm">
              <Link href="/twitter" className="block text-muted-foreground hover:text-foreground">
                Twitter Downloader
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VideoDownloader Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
