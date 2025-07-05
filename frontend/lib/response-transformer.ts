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

// Helper function to extract URLs from nested objects
function extractUrlsFromObject(obj: any, prefix = ""): Array<{ url: string; quality: string; format: string }> {
  const urls: Array<{ url: string; quality: string; format: string }> = []

  if (!obj || typeof obj !== "object") return urls

  // Common URL property names
  const urlKeys = ["url", "download_url", "video_url", "link", "src", "href", "file_url", "stream_url"]

  for (const key of urlKeys) {
    if (obj[key] && typeof obj[key] === "string") {
      const cleanUrl = validateAndCleanUrl(obj[key])
      if (cleanUrl) {
        const quality = obj.quality || obj.resolution || obj.format_note || `${prefix} ${key}`
        const format = obj.format || obj.ext || (cleanUrl.includes(".mp3") ? "mp3" : "mp4")
        urls.push({ url: cleanUrl, quality, format })
      }
    }
  }

  return urls
}

export function transformTikTokResponse(data: any): VideoData {
  const downloadLinks = []

  console.log("Transforming TikTok response:", data)

  // Method 1: Handle video URLs - check if it's an array with valid URLs
  if (data.video && Array.isArray(data.video)) {
    data.video.forEach((url: any, index: number) => {
      if (typeof url === "string") {
        const link = createDownloadLink(url, index === 0 ? "Video (HD)" : `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      } else if (url && typeof url === "object") {
        const extractedUrls = extractUrlsFromObject(url, "Video")
        extractedUrls.forEach((extracted) => {
          const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
          if (link) downloadLinks.push(link)
        })
      }
    })
  }

  // Method 2: Handle single video URL
  if (data.video && typeof data.video === "string") {
    const link = createDownloadLink(data.video, "Video", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Method 3: Handle audio URLs - check if it's an array with valid URLs
  if (data.audio && Array.isArray(data.audio)) {
    data.audio.forEach((url: any, index: number) => {
      if (typeof url === "string") {
        const link = createDownloadLink(url, index === 0 ? "Audio Only" : `Audio ${index + 1}`, "mp3")
        if (link) downloadLinks.push(link)
      } else if (url && typeof url === "object") {
        const extractedUrls = extractUrlsFromObject(url, "Audio")
        extractedUrls.forEach((extracted) => {
          const link = createDownloadLink(extracted.url, extracted.quality, "mp3")
          if (link) downloadLinks.push(link)
        })
      }
    })
  }

  // Method 4: Handle single audio URL
  if (data.audio && typeof data.audio === "string") {
    const link = createDownloadLink(data.audio, "Audio Only", "mp3")
    if (link) downloadLinks.push(link)
  }

  // Method 5: Check for direct URL properties
  const directUrlProps = ["download_url", "video_url", "url", "play", "wmplay", "hdplay"]
  directUrlProps.forEach((prop) => {
    if (data[prop] && typeof data[prop] === "string") {
      const link = createDownloadLink(data[prop], "Video", "mp4")
      if (link) downloadLinks.push(link)
    }
  })

  // Method 6: Check for formats array
  if (data.formats && Array.isArray(data.formats)) {
    data.formats.forEach((format: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(format, "Format")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  // Determine the best title to use
  let videoTitle = "TikTok Video"
  if (data.title && data.title.trim()) {
    videoTitle = data.title.trim()
  } else if (data.title_audio && data.title_audio.trim()) {
    videoTitle = data.title_audio.trim()
  } else if (data.description && data.description.trim()) {
    videoTitle = data.description.trim().substring(0, 100)
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

  // Method 1: Handle HD video
  if (data.HD && data.HD !== null && data.HD !== false) {
    const link = createDownloadLink(data.HD, "HD", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Method 2: Handle normal video
  if (data.Normal_video && data.Normal_video !== null && data.Normal_video !== false) {
    const link = createDownloadLink(data.Normal_video, "SD", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Method 3: Check for alternative Facebook URL properties
  const fbUrlProps = ["video_url", "download_url", "video", "url"]
  fbUrlProps.forEach((prop) => {
    if (data[prop] && typeof data[prop] === "string") {
      const link = createDownloadLink(data[prop], "Video", "mp4")
      if (link) downloadLinks.push(link)
    }
  })

  // Method 4: Handle URL arrays
  if (data.url && Array.isArray(data.url)) {
    data.url.forEach((urlItem: any, index: number) => {
      if (typeof urlItem === "string") {
        const link = createDownloadLink(urlItem, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      } else if (urlItem && typeof urlItem === "object") {
        const extractedUrls = extractUrlsFromObject(urlItem, "Video")
        extractedUrls.forEach((extracted) => {
          const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
          if (link) downloadLinks.push(link)
        })
      }
    })
  }

  // Method 5: Handle media arrays
  if (data.media && Array.isArray(data.media)) {
    data.media.forEach((mediaItem: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(mediaItem, "Media")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  // Method 6: Handle links array
  if (data.links && Array.isArray(data.links)) {
    data.links.forEach((linkItem: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(linkItem, "Link")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  // Method 7: Handle formats array
  if (data.formats && Array.isArray(data.formats)) {
    data.formats.forEach((format: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(format, "Format")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  console.log("Facebook download links found:", downloadLinks)

  return {
    title: data.title || data.description || "Facebook Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformYouTubeResponse(data: any): VideoData {
  const downloadLinks = []

  console.log("Transforming YouTube response:", data)

  // Method 1: Check for direct mp4/mp3 properties
  if (data.mp4 && data.mp4.trim()) {
    const link = createDownloadLink(data.mp4, "Video (MP4)", "mp4")
    if (link) downloadLinks.push(link)
  }

  if (data.mp3 && data.mp3.trim()) {
    const link = createDownloadLink(data.mp3, "Audio Only (MP3)", "mp3")
    if (link) downloadLinks.push(link)
  }

  // Method 2: Check for common URL properties
  const ytUrlProps = ["video_url", "download_url", "url", "stream_url"]
  ytUrlProps.forEach((prop) => {
    if (data[prop] && typeof data[prop] === "string" && data[prop].trim()) {
      const link = createDownloadLink(data[prop], "Video", "mp4")
      if (link) downloadLinks.push(link)
    }
  })

  // Method 3: Handle URL arrays
  if (data.url && Array.isArray(data.url)) {
    data.url.forEach((urlItem: any, index: number) => {
      if (typeof urlItem === "string" && urlItem.trim()) {
        const link = createDownloadLink(urlItem, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      } else if (urlItem && typeof urlItem === "object") {
        const extractedUrls = extractUrlsFromObject(urlItem, "Video")
        extractedUrls.forEach((extracted) => {
          const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
          if (link) downloadLinks.push(link)
        })
      }
    })
  }

  // Method 4: Handle formats array (common in yt-dlp responses)
  if (data.formats && Array.isArray(data.formats)) {
    data.formats.forEach((format: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(format, "Format")
      extractedUrls.forEach((extracted) => {
        let quality = extracted.quality
        if (format.height) quality = `${format.height}p`
        else if (format.quality) quality = format.quality
        else if (format.format_note) quality = format.format_note

        const link = createDownloadLink(extracted.url, quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  // Method 5: Handle entries array (playlist responses)
  if (data.entries && Array.isArray(data.entries) && data.entries.length > 0) {
    const firstEntry = data.entries[0]
    const extractedUrls = extractUrlsFromObject(firstEntry, "Entry")
    extractedUrls.forEach((extracted) => {
      const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
      if (link) downloadLinks.push(link)
    })
  }

  // Method 6: Handle video property (can be string or array)
  if (data.video) {
    if (Array.isArray(data.video)) {
      data.video.forEach((videoItem: any, index: number) => {
        if (typeof videoItem === "string" && videoItem.trim()) {
          const link = createDownloadLink(videoItem, `Video ${index + 1}`, "mp4")
          if (link) downloadLinks.push(link)
        } else if (videoItem && typeof videoItem === "object") {
          const extractedUrls = extractUrlsFromObject(videoItem, "Video")
          extractedUrls.forEach((extracted) => {
            const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
            if (link) downloadLinks.push(link)
          })
        }
      })
    } else if (typeof data.video === "string" && data.video.trim()) {
      const link = createDownloadLink(data.video, "Video", "mp4")
      if (link) downloadLinks.push(link)
    }
  }

  // Method 7: Handle audio property (can be string or array)
  if (data.audio) {
    if (Array.isArray(data.audio)) {
      data.audio.forEach((audioItem: any, index: number) => {
        if (typeof audioItem === "string" && audioItem.trim()) {
          const link = createDownloadLink(audioItem, `Audio ${index + 1}`, "mp3")
          if (link) downloadLinks.push(link)
        } else if (audioItem && typeof audioItem === "object") {
          const extractedUrls = extractUrlsFromObject(audioItem, "Audio")
          extractedUrls.forEach((extracted) => {
            const link = createDownloadLink(extracted.url, extracted.quality, "mp3")
            if (link) downloadLinks.push(link)
          })
        }
      })
    } else if (typeof data.audio === "string" && data.audio.trim()) {
      const link = createDownloadLink(data.audio, "Audio Only", "mp3")
      if (link) downloadLinks.push(link)
    }
  }

  // Method 8: Handle requested_formats array
  if (data.requested_formats && Array.isArray(data.requested_formats)) {
    data.requested_formats.forEach((format: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(format, "Requested")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  console.log("YouTube download links found:", downloadLinks)

  return {
    title: data.title || data.fulltitle || data.display_id || "YouTube Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformInstagramResponse(data: any): VideoData {
  const downloadLinks = []

  console.log("Transforming Instagram response:", data)

  // Method 1: Handle array response
  if (Array.isArray(data)) {
    data.forEach((item: any, index: number) => {
      if (typeof item === "string") {
        const link = createDownloadLink(item, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      } else if (item && typeof item === "object") {
        const extractedUrls = extractUrlsFromObject(item, "Item")
        extractedUrls.forEach((extracted) => {
          const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
          if (link) downloadLinks.push(link)
        })
      }
    })
  }

  // Method 2: Handle single object response
  if (data && typeof data === "object" && !Array.isArray(data)) {
    const extractedUrls = extractUrlsFromObject(data, "Instagram")
    extractedUrls.forEach((extracted) => {
      const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
      if (link) downloadLinks.push(link)
    })
  }

  // Method 3: Handle media array
  if (data.media && Array.isArray(data.media)) {
    data.media.forEach((mediaItem: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(mediaItem, "Media")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  console.log("Instagram download links found:", downloadLinks)

  return {
    title: data.title || data.caption || "Instagram Video",
    thumbnail:
      Array.isArray(data) && data[0]?.thumbnail
        ? validateAndCleanUrl(data[0].thumbnail) || "/placeholder.svg?height=200&width=320"
        : validateAndCleanUrl(data?.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformTwitterResponse(data: any): VideoData {
  const downloadLinks = []

  console.log("Transforming Twitter response:", data)

  // Method 1: Handle URL array
  if (data.url && Array.isArray(data.url)) {
    data.url.forEach((item: any, index: number) => {
      console.log(`Processing Twitter URL item ${index}:`, item)

      if (typeof item === "string") {
        const link = createDownloadLink(item, `Video ${index + 1}`, "mp4")
        if (link) downloadLinks.push(link)
      } else if (item && typeof item === "object") {
        // Check for specific Twitter properties
        if (item.hd) {
          const link = createDownloadLink(item.hd, "HD", "mp4")
          if (link) downloadLinks.push(link)
        }
        if (item.sd) {
          const link = createDownloadLink(item.sd, "SD", "mp4")
          if (link) downloadLinks.push(link)
        }

        // Extract other URLs from the object
        const extractedUrls = extractUrlsFromObject(item, "Twitter")
        extractedUrls.forEach((extracted) => {
          const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
          if (link) downloadLinks.push(link)
        })
      }
    })
  }

  // Method 2: Handle single URL
  if (data.url && typeof data.url === "string") {
    const link = createDownloadLink(data.url, "Video", "mp4")
    if (link) downloadLinks.push(link)
  }

  // Method 3: Check for direct video properties
  const twitterUrlProps = ["video", "download_url", "video_url"]
  twitterUrlProps.forEach((prop) => {
    if (data[prop] && typeof data[prop] === "string") {
      const link = createDownloadLink(data[prop], "Video", "mp4")
      if (link) downloadLinks.push(link)
    }
  })

  // Method 4: Handle media array
  if (data.media && Array.isArray(data.media)) {
    data.media.forEach((mediaItem: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(mediaItem, "Media")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  // Method 5: Handle formats array
  if (data.formats && Array.isArray(data.formats)) {
    data.formats.forEach((format: any, index: number) => {
      const extractedUrls = extractUrlsFromObject(format, "Format")
      extractedUrls.forEach((extracted) => {
        const link = createDownloadLink(extracted.url, extracted.quality, extracted.format)
        if (link) downloadLinks.push(link)
      })
    })
  }

  console.log("Twitter download links found:", downloadLinks)

  return {
    title: data.title || data.description || "Twitter Video",
    thumbnail: validateAndCleanUrl(data.thumbnail) || "/placeholder.svg?height=200&width=320",
    downloadLinks,
  }
}

export function transformResponse(data: any): VideoData {
  // Check if the response has success property and data
  if (data.success && data.data) {
    return transformBackendResponse(data.data, detectPlatformFromData(data.data))
  }

  // If no success property, assume the data is the actual content
  return transformBackendResponse(data, detectPlatformFromData(data))
}

function detectPlatformFromData(data: any): string {
  // Try to detect platform from data structure
  if (data.video && Array.isArray(data.video) && data.audio) {
    return "tiktok"
  }
  if (data.HD || data.Normal_video) {
    return "facebook"
  }
  if (data.mp4 || data.mp3 || data.formats || data.video_url) {
    return "youtube"
  }
  if (Array.isArray(data)) {
    return "instagram"
  }
  if (data.url && Array.isArray(data.url)) {
    return "twitter"
  }

  return "unknown"
}

export function transformBackendResponse(data: any, platform: string): VideoData {
  console.log("Transforming response for platform:", platform, "Data:", data)

  // Handle nested data structure - check if data has a nested 'data' property
  let actualData = data
  if (data && data.data && typeof data.data === "object") {
    console.log("Found nested data structure, using inner data")
    actualData = data.data
  }

  let result: VideoData

  switch (platform) {
    case "tiktok":
      result = transformTikTokResponse(actualData)
      break
    case "facebook":
      result = transformFacebookResponse(actualData)
      break
    case "youtube":
      result = transformYouTubeResponse(actualData)
      break
    case "instagram":
      result = transformInstagramResponse(actualData)
      break
    case "twitter":
      result = transformTwitterResponse(actualData)
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
