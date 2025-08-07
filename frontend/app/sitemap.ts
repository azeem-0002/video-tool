import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
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
          "/sitemap.xml",
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
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/",
          "/*.jpg$",
          "/*.png$",
          "/*.gif$",
          "/*.webp$",
          "/*.svg$",
        ],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 2,
      },
      {
        userAgent: "AhrefsBot",
        disallow: ["/"],
      },
      {
        userAgent: "SemrushBot",
        disallow: ["/"],
      },
      {
        userAgent: "MJ12bot",
        disallow: ["/"],
      },
    ],
    sitemap: "https://freevideodownloader.co/sitemap.xml",
  }
}
