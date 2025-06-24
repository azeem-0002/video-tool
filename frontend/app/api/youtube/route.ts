import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 })
    }

    const backendUrl = process.env.BACKEND_URL
    const apiKey = process.env.API_KEY

    console.log("Environment check:", {
      backendUrl: backendUrl ? "SET" : "NOT_SET",
      apiKey: apiKey ? "SET" : "NOT_SET",
      nodeEnv: process.env.NODE_ENV,
    })

    if (!backendUrl || !apiKey) {
      console.error("Missing environment variables:", { backendUrl, apiKey })
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error - missing environment variables",
        },
        { status: 500 },
      )
    }

    console.log("Making request to:", `${backendUrl}/api/youtube`)

    const response = await fetch(`${backendUrl}/api/youtube`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ url }),
    })

    console.log("Backend response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Backend error:", errorText)
      return NextResponse.json(
        {
          success: false,
          error: `Backend error (${response.status}): ${errorText}`,
        },
        { status: response.status },
      )
    }

    const data = await response.json()
    console.log("Backend response data:", data)
    return NextResponse.json(data)
  } catch (error) {
    console.error("YouTube API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: `Internal server error: ${error.message}`,
      },
      { status: 500 },
    )
  }
}
