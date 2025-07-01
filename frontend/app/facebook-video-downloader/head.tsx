export default function Head() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)",
    url: "https://freevideodownloader.co/facebook-video-downloader",
    description:
      "Download Facebook videos, Reels, Stories, and Live streams in HD quality — absolutely free and with no watermark. Our FB video downloader works online on any device – fast and secure!",
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
        name: "Facebook Video Downloader",
        item: "https://freevideodownloader.co/facebook-video-downloader",
      },
    ],
  };

  return (
    <>
      <title>Facebook Video Downloader - Free & HD FB Video Saver (Reels, Stories, Live)</title>
      <meta
        name="description"
        content="Download Facebook videos, Reels, Stories, and Live streams in HD quality — absolutely free and with no watermark. Our FB video downloader works online on any device – fast and secure!"
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
