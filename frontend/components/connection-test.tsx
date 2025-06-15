"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Loader2, Wifi } from "lucide-react"

export function ConnectionTest() {
  const [testing, setTesting] = useState(false)
  const [results, setResults] = useState<{ [key: string]: boolean | null }>({})

  const testEndpoints = [
    { name: "YouTube", endpoint: "/api/youtube" },
    { name: "TikTok", endpoint: "/api/tiktok" },
    { name: "Instagram", endpoint: "/api/instagram" },
    { name: "Facebook", endpoint: "/api/facebook" },
  ]

  const testConnection = async () => {
    setTesting(true)
    const newResults: { [key: string]: boolean | null } = {}

    for (const test of testEndpoints) {
      try {
        console.log(`Testing: https://5e1d-39-34-187-218.ngrok-free.app${test.endpoint}`)

        const response = await fetch(`https://5e1d-39-34-187-218.ngrok-free.app${test.endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          mode: "cors",
          body: JSON.stringify({ url: "https://test.com" }),
        })

        newResults[test.name] = response.status !== 0
        console.log(`${test.name}: ${response.status}`)
      } catch (error) {
        console.error(`${test.name} failed:`, error)
        newResults[test.name] = false
      }
    }

    setResults(newResults)
    setTesting(false)
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wifi className="h-5 w-5" />
          Backend Connection Test
        </CardTitle>
        <CardDescription>Test the connection to your backend server to diagnose any issues</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
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

          {Object.keys(results).length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {testEndpoints.map((test) => (
                <div key={test.name} className="flex items-center justify-between p-2 rounded border">
                  <span className="text-sm">{test.name}</span>
                  {results[test.name] === true && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      OK
                    </Badge>
                  )}
                  {results[test.name] === false && (
                    <Badge variant="destructive">
                      <XCircle className="h-3 w-3 mr-1" />
                      Failed
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              <strong>Backend URL:</strong> https://5e1d-39-34-187-218.ngrok-free.app
            </p>
            <p>
              <strong>Common Issues:</strong>
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>
                ngrok URL expired (regenerate with <code>ngrok http 3000</code>)
              </li>
              <li>Backend server not running</li>
              <li>CORS policy blocking requests</li>
              <li>Firewall blocking connections</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
