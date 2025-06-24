import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    backendUrl: process.env.BACKEND_URL || "NOT_SET",
    apiKey: process.env.API_KEY ? "SET" : "NOT_SET",
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  })
}
