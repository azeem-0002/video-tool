// app/head.tsx
export default function Head() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Online Video Downloader – No App Needed, Fast & No Watermark",
    url: "https://freevideodownloader.co/",
    description:
      "Free online video downloader to save high-quality videos from any website. No app needed. Fast, easy, and no watermark — download any video instantly.",
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
    ],
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>Free Online Video Downloader – No App Needed, Fast & No Watermark</title>
      <meta
        name="description"
        content="Free online video downloader to save high-quality videos from any website. No app needed. Fast, easy, and no watermark — download any video instantly."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Structured Data: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Structured Data: Breadcrumb */}
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
