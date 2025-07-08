import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  // Skip during build time to prevent connection errors
  if (process.env.NODE_ENV === "production" && !process.env.VERCEL_URL) {
    return NextResponse.json({
      backendStatus: "skipped",
      message: "Debug API skipped during build process",
    })
  }

  try {
    const backendUrl = process.env.BACKEND_URL
    const apiKey = process.env.API_KEY

    console.log("Debug API called")
    console.log("Environment check:", {
      backendUrl: backendUrl ? "SET" : "NOT_SET",
      apiKey: apiKey ? "SET" : "NOT_SET",
    })

    if (!backendUrl || !apiKey) {
      return NextResponse.json({
        backendStatus: "error",
        error: "Missing environment variables",
        details: {
          backendUrl: backendUrl ? "SET" : "NOT_SET",
          apiKey: apiKey ? "SET" : "NOT_SET",
        },
      })
    }

    // Test backend connection
    console.log("Testing backend connection to:", backendUrl)

    const testResponse = await fetch(`${backendUrl}/health`, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        "ngrok-skip-browser-warning": "true",
      },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    })

    console.log("Backend test response status:", testResponse.status)

    if (testResponse.ok) {
      const responseData = await testResponse.text()
      console.log("Backend test response:", responseData)

      return NextResponse.json({
        backendStatus: "connected",
        backendUrl: backendUrl,
        message: "Backend connection successful",
        response: responseData,
      })
    } else {
      const errorText = await testResponse.text()
      console.error("Backend test failed:", errorText)

      return NextResponse.json({
        backendStatus: "error",
        error: `Backend responded with status ${testResponse.status}`,
        details: errorText,
        backendUrl: backendUrl,
      })
    }
  } catch (error) {
    console.error("Debug API error:", error)

    let errorMessage = "Unknown error"
    if (error instanceof Error) {
      errorMessage = error.message
    }

    // Check for specific error types
    if (errorMessage.includes("fetch")) {
      errorMessage = "Network error: Unable to reach backend service"
    } else if (errorMessage.includes("timeout")) {
      errorMessage = "Timeout: Backend service took too long to respond"
    } else if (errorMessage.includes("ENOTFOUND")) {
      errorMessage = "DNS error: Backend URL not found"
    } else if (errorMessage.includes("ECONNREFUSED")) {
      errorMessage = "Connection refused: Backend service is not running"
    }

    return NextResponse.json({
      backendStatus: "error",
      error: errorMessage,
      backendUrl: process.env.BACKEND_URL || "NOT_SET",
    })
  }
}
