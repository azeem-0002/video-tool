export default function Head() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Instagram Video Downloader: Save Reels, Stories & IGTV in HD - Free & No Watermark",
    url: "https://freevideodownloader.co/instagram-video-downloader",
    description:
      "Free Instagram Video Downloader: Easily download Instagram videos, Reels, Stories, and IGTV in HD MP4. No watermark, no login, fast, and secure. Works on all devices (iOS & Android).",
    inLanguage: "en",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://freevideodownloader.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Instagram Video Downloader",
        item: "https://freevideodownloader.co/instagram-video-downloader",
      },
    ],
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>Instagram Video Downloader: Save Reels, Stories & IGTV in HD - Free & No Watermark</title>
      <meta
        name="description"
        content="Free Instagram Video Downloader: Easily download Instagram videos, Reels, Stories, and IGTV in HD MP4. No watermark, no login, fast, and secure. Works on all devices (iOS & Android)."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Structured Data: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Structured Data: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PC6H4VWJNP"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PC6H4VWJNP');
          `,
        }}
      />
    </>
  );
}
