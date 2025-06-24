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

  console.log("Transforming TikTok response:", data)

  // Handle video URLs - check if it's an array with valid URLs
  if (data.video && Array.isArray(data.video)) {
    data.video.forEach((url: any, index: number) => {
      const link = createDownloadLink(url, index === 0 ? "Video (HD)" : `Video ${index + 1}`, "mp4")
      if (link) downloadLinks.push(link)
    })
  }

  // Handle audio URLs - check if it's an array with valid URLs
  if (data.audio && Array.isArray(data.audio)) {
    data.audio.forEach((url: any, index: number) => {
      const link = createDownloadLink(url, index === 0 ? "Audio Only" : `Audio ${index + 1}`, "mp3")
      if (link) downloadLinks.push(link)
    })
  }

  // Determine the best title to use
  let videoTitle = "TikTok Video"
  if (data.title && data.title.trim()) {
    videoTitle = data.title.trim()
  } else if (data.title_audio && data.title_audio.trim()) {
    videoTitle = data.title_audio.trim()
  }

  return {
    title: videoTitle,
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformFacebookResponse(data: any): VideoData {
  const downloadLinks = []

  console.log("Transforming Facebook response:", data)

  // Handle HD video (check for non-null values)
  if (data.HD && data.HD !== null) {
    const link = createDownloadLink(data.HD, "HD", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Handle normal video (check for non-null values)
  if (data.Normal_video && data.Normal_video !== null) {
    const link = createDownloadLink(data.Normal_video, "SD", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Check for alternative Facebook URL properties
  if (!downloadLinks.length) {
    // Check for direct video URL
    if (data.video_url) {
      const link = createDownloadLink(data.video_url, "Video", "mp4")
      if (link) downloadLinks.push(link)
    }

    // Check for download URL
    if (data.download_url) {
      const link = createDownloadLink(data.download_url, "Video", "mp4")
      if (link) downloadLinks.push(link)
    }

    // Check for media URLs
    if (data.media && Array.isArray(data.media)) {
      data.media.forEach((mediaItem: any, index: number) => {
        if (mediaItem.url) {
          const link = createDownloadLink(mediaItem.url, `Video ${index + 1}`, "mp4")
          if (link) downloadLinks.push(link)
        }
      })
    }

    // Check for video property
    if (data.video) {
      const link = createDownloadLink(data.video, "Video", "mp4")
      if (link) downloadLinks.push(link)
    }

    // Check for url property
    if (data.url) {
      if (Array.isArray(data.url)) {
        data.url.forEach((urlItem: any, index: number) => {
          if (urlItem && typeof urlItem === "string") {
            const link = createDownloadLink(urlItem, `Video ${index + 1}`, "mp4")
            if (link) downloadLinks.push(link)
          } else if (urlItem && urlItem.url) {
            const link = createDownloadLink(urlItem.url, `Video ${index + 1}`, "mp4")
            if (link) downloadLinks.push(link)
          }
        })
      } else if (typeof data.url === "string") {
        const link = createDownloadLink(data.url, "Video", "mp4")
        if (link) downloadLinks.push(link)
      }
    }

    // Check for links property
    if (data.links && Array.isArray(data.links)) {
      data.links.forEach((linkItem: any, index: number) => {
        if (linkItem.url) {
          const quality = linkItem.quality || `Video ${index + 1}`
          const link = createDownloadLink(linkItem.url, quality, "mp4")
          if (link) downloadLinks.push(link)
        }
      })
    }

    // Check for formats property (common in some Facebook responses)
    if (data.formats && Array.isArray(data.formats)) {
      data.formats.forEach((format: any, index: number) => {
        if (format.url) {
          const quality = format.quality || format.format_id || `Video ${index + 1}`
          const link = createDownloadLink(format.url, quality, "mp4")
          if (link) downloadLinks.push(link)
        }
      })
    }
  }

  console.log("Facebook download links found:", downloadLinks)

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

  console.log("Transforming Twitter response:", data)

  if (Array.isArray(data.url)) {
    data.url.forEach((item: any, index: number) => {
      console.log(`Processing Twitter URL item ${index}:`, item)

      // Check if item has hd property
      if (item && item.hd) {
        const link = createDownloadLink(item.hd, "HD", "mp4")
        if (link) downloadLinks.push(link)
        return
      }

      // Check if item has sd property
      if (item && item.sd) {
        const link = createDownloadLink(item.sd, "SD", "mp4")
        if (link) downloadLinks.push(link)
        return
      }

      // Check if item has url property
      if (item && item.url) {
        const link = createDownloadLink(item.url, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
        return
      }

      // Check if item is a string URL
      if (typeof item === "string" && item.trim()) {
        const link = createDownloadLink(item, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
        return
      }

      // Check for other possible URL properties
      if (item && typeof item === "object") {
        const possibleUrlKeys = ["video_url", "download_url", "link", "src", "href"]
        for (const key of possibleUrlKeys) {
          if (item[key]) {
            const link = createDownloadLink(item[key], `Video ${index + 1}`, "mp4")
            if (link) {
              downloadLinks.push(link)
              return
            }
          }
        }
      }

      console.warn(`No valid URL found in Twitter item ${index}:`, item)
    })
  }

  // Check for alternative URL structures
  if (!downloadLinks.length) {
    // Check for direct video property
    if (data.video) {
      const link = createDownloadLink(data.video, "Video", "mp4")
      if (link) downloadLinks.push(link)
    }

    // Check for download_url property
    if (data.download_url) {
      const link = createDownloadLink(data.download_url, "Video", "mp4")
      if (link) downloadLinks.push(link)
    }

    // Check for media property
    if (data.media && Array.isArray(data.media)) {
      data.media.forEach((mediaItem: any, index: number) => {
        if (mediaItem.url) {
          const link = createDownloadLink(mediaItem.url, `Video ${index + 1}`, "mp4")
          if (link) downloadLinks.push(link)
        }
      })
    }
  }

  console.log("Twitter download links found:", downloadLinks)

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
