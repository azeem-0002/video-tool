import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://freevideodownloader.co"

  return {
    rules: [
      // Default rules for all bots
      {
        userAgent: "*",
        allow: [
           "/", 
          "/youtube-video-downloader", 
          "/tiktok-video-downloader", 
          "/instagram-video-downloader", 
          "/facebook-video-downloader", 
          "/twitter-video-downloader", 
          "/api-access",
          "/privacy", 
          "/terms",
          "/contact-us", 
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/*.json$",
          "/*.xml$",
          "/private/",
          "/temp/",
          "/draft/",
          "/test/",
          "/*?*utm_*",
          "/*?*fbclid*",
          "/*?*gclid*",
        ],
        crawlDelay: 1,
      },
      // Special rules for Googlebot
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },
      // Rules for Googlebot Images
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.jpg$", "/*.png$", "/*.gif$", "/*.webp$", "/*.svg$"],
        disallow: ["/api/", "/admin/"],
      },
      // Rules for Bingbot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 2,
      },
      // Block bad bots
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
