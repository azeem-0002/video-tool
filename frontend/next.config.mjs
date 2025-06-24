/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Platform page redirects
      {
        source: '/tiktok',
        destination: '/tiktok-video-downloader',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: '/youtube-video-downloader',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: '/facebook-video-downloader',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: '/instagram-video-downloader',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: '/twitter-video-downloader',
        permanent: true,
      },
      // Legal/info page redirects
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
