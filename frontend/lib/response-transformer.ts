// Utility functions to transform backend responses to frontend format

export interface VideoData {
  title: string
  thumbnail: string
  downloadLinks: Array<{
    quality: string
    url: string
    format: string
  }>
}

// Helper function to validate and clean URLs
function validateAndCleanUrl(url: any): string | null {
  if (!url) return null

  const urlStr = url.toString().trim()
  if (!urlStr) return null

  // Check if it looks like a valid URL
  try {
    new URL(urlStr)
    return urlStr
  } catch {
    // If not a full URL, check if it's a relative path or has common patterns
    if (urlStr.startsWith("/") || urlStr.startsWith("http") || urlStr.includes(".")) {
      return urlStr
    }
    return null
  }
}

// Helper function to create download links with validation
function createDownloadLink(url: any, quality: string, format: string) {
  const cleanUrl = validateAndCleanUrl(url)
  if (!cleanUrl) {
    console.warn(`Invalid URL for ${quality} ${format}:`, url)
    return null
  }

  return {
    quality,
    url: cleanUrl,
    format,
  }
}

export function transformTikTokResponse(data: any): VideoData {
  const downloadLinks = []

  // Handle video URLs
  if (data.video && Array.isArray(data.video)) {
    data.video.forEach((url: any, index: number) => {
      const link = createDownloadLink(url, "Video", "mp4")
      if (link) downloadLinks.push(link)
    })
  }

  // Handle audio URLs
  if (data.audio && Array.isArray(data.audio)) {
    data.audio.forEach((url: any, index: number) => {
      const link = createDownloadLink(url, "Audio Only", "mp3")
      if (link) downloadLinks.push(link)
    })
  }

  return {
    title: data.title || data.title_audio || "TikTok Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformFacebookResponse(data: any): VideoData {
  const downloadLinks = []

  // Handle HD video
  if (data.HD) {
    const link = createDownloadLink(data.HD, "HD", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Handle normal video
  if (data.Normal_video) {
    const link = createDownloadLink(data.Normal_video, "SD", "mp4")
    if (link) downloadLinks.push(link)
  }

  return {
    title: data.title || "Facebook Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformYouTubeResponse(data: any): VideoData {
  const downloadLinks = []

  // Handle MP4 video
  if (data.mp4) {
    const link = createDownloadLink(data.mp4, "Video", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Handle MP3 audio
  if (data.mp3) {
    const link = createDownloadLink(data.mp3, "Audio Only", "mp3")
    if (link) downloadLinks.push(link)
  }

  return {
    title: data.title || "YouTube Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformInstagramResponse(data: any): VideoData {
  const downloadLinks = []

  if (Array.isArray(data)) {
    data.forEach((item: any, index: number) => {
      if (item.url) {
        const link = createDownloadLink(item.url, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      }
    })
  }

  return {
    title: "Instagram Video",
    thumbnail:
      Array.isArray(data) && data[0]?.thumbnail
        ? validateAndCleanUrl(data[0].thumbnail) || "/placeholder.svg?height=200&width=320"
        : "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformPinterestResponse(data: any): VideoData {
  const result = data.result || data
  const downloadLinks = []

  // Handle direct video URL
  if (result.video_url) {
    const link = createDownloadLink(result.video_url, "Video", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Handle 720p video
  if (result.videos?.V_720P?.url) {
    const link = createDownloadLink(result.videos.V_720P.url, "720p", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Handle HLS stream
  if (result.videos?.V_HLSV4?.url) {
    const link = createDownloadLink(result.videos.V_HLSV4.url, "HLS Stream", "m3u8")
    if (link) downloadLinks.push(link)
  }

  // Handle image content for non-video pins
  if (result.images?.orig && !result.is_video) {
    const link = createDownloadLink(result.images.orig.url, "Original Image", "png")
    if (link) downloadLinks.push(link)
  }

  return {
    title: result.title || "Pinterest Content",
    thumbnail: validateAndCleanUrl(result.image || result.images?.orig?.url) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformTwitterResponse(data: any): VideoData {
  const downloadLinks = []

  if (Array.isArray(data.url)) {
    data.url.forEach((item: any, index: number) => {
      if (item.hd) {
        const link = createDownloadLink(item.hd, "HD", "mp4")
        if (link) downloadLinks.push(link)
      } else if (item.sd) {
        const link = createDownloadLink(item.sd, "SD", "mp4")
        if (link) downloadLinks.push(link)
      } else {
        // Handle string URLs or objects with url property
        const url = typeof item === "string" ? item : item.url || item
        const link = createDownloadLink(url, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      }
    })
  }

  return {
    title: data.title || "Twitter Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformBackendResponse(data: any, platform: string): VideoData {
  console.log("Transforming response for platform:", platform, "Data:", data)

  let result: VideoData

  switch (platform) {
    case "tiktok":
      result = transformTikTokResponse(data)
      break
    case "facebook":
      result = transformFacebookResponse(data)
      break
    case "youtube":
      result = transformYouTubeResponse(data)
      break
    case "instagram":
      result = transformInstagramResponse(data)
      break
    case "pinterest":
      result = transformPinterestResponse(data)
      break
    case "twitter":
      result = transformTwitterResponse(data)
      break
    default:
      result = {
        title: "Video",
        thumbnail: "/placeholder.svg?height=200&width=320",
        downloadLinks: [],
      }
  }

  console.log("Transformed result:", result)
  return result
}
