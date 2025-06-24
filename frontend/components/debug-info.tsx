"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function DebugInfo() {
  const [debugInfo, setDebugInfo] = useState<any>(null)

  const checkEnvironment = async () => {
    try {
      // Test the API route to see what's happening
      const response = await fetch("/api/debug", {
        method: "GET",
      })

      const data = await response.json()
      setDebugInfo(data)
    } catch (error) {
      setDebugInfo({ error: error.message })
    }
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Debug Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={checkEnvironment} className="mb-4">
          Check Environment
        </Button>

        {debugInfo && (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-xs overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        )}
      </CardContent>
    </Card>
  )
}
