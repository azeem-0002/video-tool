import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://freevideodownloader.co";

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
          "/_next/static/",   // ✅ allow static files
        ],
        disallow: [
          "/api/",
          "/admin/",
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
      },
      { userAgent: "Googlebot", allow: ["/", "/_next/static/"], disallow: ["/api/", "/admin/", "/private/"] },
      { userAgent: "Googlebot-Image", allow: ["/*.jpg$", "/*.jpeg$", "/*.png$", "/*.gif$", "/*.webp$", "/*.svg$", "/_next/static/"], disallow: ["/api/", "/admin/"] },
      { userAgent: "Bingbot", allow: ["/", "/_next/static/"], disallow: ["/api/", "/admin/", "/private/"], crawlDelay: 2 },
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
