import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://freevideodownloader.co";

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
          "/private/",
          "/temp/",
          "/draft/",
          "/test/",
          "/*.json$",
          "/*.xml$",
          "/*?*utm_*",
          "/*?*fbclid*",
          "/*?*gclid*",
        ],
        crawlDelay: 1,
      },

      // Googlebot
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },

      // Googlebot Images
      {
        userAgent: "Googlebot-Image",
        allow: ["/*.jpg$", "/*.jpeg$", "/*.png$", "/*.gif$", "/*.webp$", "/*.svg$"],
        disallow: ["/api/", "/admin/"],
      },

      // Bingbot
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 2,
      },

      // Block common SEO scraper bots
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
