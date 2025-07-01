export default function Head() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "YouTube Video Downloader - Free MP4 & MP3 YouTube Saver (HD, 4K)",
    url: "https://freevideodownloader.co/youtube-video-downloader",
    description:
      "Free YouTube Downloader: Download YouTube videos in various qualities (HD, 4K, 1080p) to MP4 or convert to MP3. Fast, secure, and no software or watermark needed. Compatible with all devices!",
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
        name: "YouTube Video Downloader",
        item: "https://freevideodownloader.co/youtube-video-downloader",
      },
    ],
  };

  return (
    <>
      {/* Meta Tags */}
      <title>YouTube Video Downloader - Free MP4 & MP3 YouTube Saver (HD, 4K)</title>
      <meta
        name="description"
        content="Free YouTube Downloader: Download YouTube videos in various qualities (HD, 4K, 1080p) to MP4 or convert to MP3. Fast, secure, and no software or watermark needed. Compatible with all devices!"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* JSON-LD: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* JSON-LD: BreadcrumbList */}
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
