export default function Head() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Twitter/X Video Downloader - Save Videos & GIFs in HD MP4 (Free)",
    url: "https://freevideodownloader.co/twitter-video-downloader",
    description:
      "Free Twitter/X video downloader: Easily download videos and GIFs from Twitter (now X) in high-quality HD MP4 format. No software, no login, fast, and works on all devices!",
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
        name: "Twitter Video Downloader",
        item: "https://freevideodownloader.co/twitter-video-downloader",
      },
    ],
  };

  return (
    <>
      {/* Meta Tags */}
      <title>Twitter/X Video Downloader - Save Videos & GIFs in HD MP4 (Free)</title>
      <meta
        name="description"
        content="Free Twitter/X video downloader: Easily download videos and GIFs from Twitter (now X) in high-quality HD MP4 format. No software, no login, fast, and works on all devices!"
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
