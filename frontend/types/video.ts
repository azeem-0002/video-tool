export interface DownloadLink {
  quality: string
  url: string
  format: string
}

export interface VideoData {
  title: string
  thumbnail: string
  downloadLinks: DownloadLink[]
}
