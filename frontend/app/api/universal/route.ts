import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 })
    }

    // Auto-detect platform from URL
    const platform = detectPlatform(url)
    if (!platform) {
      return NextResponse.json({ success: false, error: "Unsupported platform" }, { status: 400 })
    }

    // Forward to the appropriate platform endpoint
    const backendUrl = process.env.BACKEND_URL
    const apiKey = process.env.API_KEY

    if (!backendUrl || !apiKey) {
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    const response = await fetch(`${backendUrl}/api/${platform}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ success: false, error: `Backend error: ${errorText}` }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Universal API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

function detectPlatform(url: string): string | null {
  if (!url) return null

  const urlLower = url.toLowerCase()

  if (urlLower.includes("youtube.com") || urlLower.includes("youtu.be")) {
    return "youtube"
  } else if (urlLower.includes("tiktok.com")) {
    return "tiktok"
  } else if (urlLower.includes("instagram.com")) {
    return "instagram"
  } else if (urlLower.includes("facebook.com") || urlLower.includes("fb.watch")) {
    return "facebook"
  } else if (urlLower.includes("twitter.com") || urlLower.includes("x.com")) {
    return "twitter"
  } else if (urlLower.includes("pinterest.com")) {
    return "pinterest"
  }

  return null
}
