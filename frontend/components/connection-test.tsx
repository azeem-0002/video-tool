"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2, AlertTriangle } from "lucide-react"

export function ConnectionTest() {
  const [testing, setTesting] = useState(false)
  const [results, setResults] = useState<{
    backend: "success" | "error" | null
    message: string
  }>({
    backend: null,
    message: "",
  })

  const testConnection = async () => {
    setTesting(true)
    setResults({ backend: null, message: "" })

    try {
      console.log("Testing backend connection...")

      const response = await fetch("/api/debug", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Debug API response status:", response.status)

      if (response.ok) {
        const data = await response.json()
        console.log("Debug API response data:", data)

        if (data.backendStatus === "connected") {
          setResults({
            backend: "success",
            message: `✅ Backend connected successfully! Server: ${data.backendUrl}`,
          })
        } else {
          setResults({
            backend: "error",
            message: `❌ Backend connection failed: ${data.error || "Unknown error"}`,
          })
        }
      } else {
        const errorText = await response.text()
        setResults({
          backend: "error",
          message: `❌ Debug API failed (${response.status}): ${errorText}`,
        })
      }
    } catch (error) {
      console.error("Connection test error:", error)
      setResults({
        backend: "error",
        message: `❌ Connection test failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setTesting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Backend Connection Test
        </CardTitle>
        <CardDescription>
          Test the connection to your backend service to ensure video downloading works properly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={testConnection} disabled={testing} className="w-full">
          {testing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Testing Connection...
            </>
          ) : (
            "Test Backend Connection"
          )}
        </Button>

        {results.backend && (
          <Alert variant={results.backend === "success" ? "default" : "destructive"}>
            {results.backend === "success" ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            <AlertDescription className="font-medium">{results.message}</AlertDescription>
          </Alert>
        )}

        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>What this test checks:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Backend server accessibility</li>
            <li>API key authentication</li>
            <li>Network connectivity</li>
            <li>Environment variable configuration</li>
          </ul>
          <p className="mt-4">
            <strong>If the test fails:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Check if your backend service is running</li>
            <li>Verify the ngrok tunnel is active</li>
            <li>Update BACKEND_URL in environment variables</li>
            <li>Ensure API_KEY is correctly set</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
