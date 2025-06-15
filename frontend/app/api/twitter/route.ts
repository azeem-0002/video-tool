import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 })
    }

    const backendUrl = process.env.BACKEND_URL
    const apiKey = process.env.API_KEY

    if (!backendUrl || !apiKey) {
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    const response = await fetch(`${backendUrl}/api/twitter`, {
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
    console.error("Twitter API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
