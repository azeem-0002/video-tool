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
      console.error("Missing environment variables:", {
        backendUrl: backendUrl ? "SET" : "NOT_SET",
        apiKey: apiKey ? "SET" : "NOT_SET",
      })
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    console.log("Making request to:", `${backendUrl}/api/youtube`)

    const response = await fetch(`${backendUrl}/api/youtube`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ url }),
    })

    console.log("Backend response status:", response.status)
    console.log("Backend response headers:", Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log("Backend response text:", responseText.substring(0, 500))

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}`

      try {
        const errorData = JSON.parse(responseText)
        errorMessage = errorData.error || errorData.message || errorMessage
      } catch {
        errorMessage = responseText || errorMessage
      }

      console.error("Backend error:", errorMessage)
      return NextResponse.json({ success: false, error: `Backend error: ${errorMessage}` }, { status: response.status })
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      console.error("Failed to parse response:", parseError)
      return NextResponse.json({ success: false, error: "Invalid response from backend" }, { status: 500 })
    }

    console.log("Parsed backend data:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("YouTube API error:", error)
    return NextResponse.json(
      { success: false, error: `Internal server error: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 },
    )
  }
}
