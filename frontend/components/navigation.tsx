"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const platforms = [
  { name: "Universal", href: "/" },
  { name: "TikTok", href: "/tiktok" },
  { name: "YouTube", href: "/youtube" },
  { name: "Facebook", href: "/facebook" },
  { name: "Instagram", href: "/instagram" },
  { name: "Twitter", href: "/twitter" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Download className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VideoDownloader Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {platforms.map((platform) => (
              <Link key={platform.name} href={platform.href}>
                <Button variant="ghost" size="sm" className="text-sm">
                  {platform.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {platforms.map((platform) => (
              <Link key={platform.name} href={platform.href}>
                <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => setIsOpen(false)}>
                  {platform.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
