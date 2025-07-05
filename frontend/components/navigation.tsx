"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Download, Youtube, Instagram, Facebook, Twitter } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const platforms = [
  { name: "YouTube", href: "/youtube-video-downloader", icon: Youtube },
  { name: "TikTok", href: "/tiktok-video-downloader", icon: Download },
  { name: "Instagram", href: "/instagram-video-downloader", icon: Instagram },
  { name: "Facebook", href: "/facebook-video-downloader", icon: Facebook },
  { name: "Twitter", href: "/twitter-video-downloader", icon: Twitter },
]

const pages = [
  { name: "API Access", href: "/api-access" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact Us", href: "/contact-us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="FreeVideoDownloader Logo" width={32} height={32} className="h-8 w-8" priority />
            <span className="hidden font-bold text-xl sm:inline-block">FreeVideoDownloader</span>
            <span className="font-bold text-lg sm:hidden">FVD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {platforms.map((platform) => {
                const Icon = platform.icon
                return (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{platform.name}</span>
                  </Link>
                )
              })}
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center space-x-4">
              {pages.slice(0, 2).map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {page.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3">
                    <Image src="/logo.png" alt="FreeVideoDownloader Logo" width={24} height={24} className="h-6 w-6" />
                    <span className="font-bold text-lg">FreeVideoDownloader</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Platforms</h3>
                    <div className="space-y-3">
                      {platforms.map((platform) => {
                        const Icon = platform.icon
                        return (
                          <Link
                            key={platform.name}
                            href={platform.href}
                            className="flex items-center space-x-3 text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{platform.name} Downloader</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Pages</h3>
                    <div className="space-y-3">
                      {pages.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="block text-sm font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
