export default function Head() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TikTok Video Downloader - Free No Watermark MP4 & MP3 TikTok Saver (HD)",
    url: "https://freevideodownloader.co/tiktok-video-downloader",
    description:
      "Free TikTok Downloader: Download TikTok videos, Stories, and Slideshows in HD MP4 (no watermark) or convert to MP3. Works fast on Android, iOS, and PC. Secure & easy to use!",
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
        name: "TikTok Video Downloader",
        item: "https://freevideodownloader.co/tiktok-video-downloader",
      },
    ],
  };

  return (
    <>
      <title>TikTok Video Downloader - Free No Watermark MP4 & MP3 TikTok Saver (HD)</title>
      <meta
        name="description"
        content="Free TikTok Downloader: Download TikTok videos, Stories, and Slideshows in HD MP4 (no watermark) or convert to MP3. Works fast on Android, iOS, and PC. Secure & easy to use!"
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
