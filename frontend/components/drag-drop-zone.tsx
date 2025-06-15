"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface DragDropZoneProps {
  onUrlDrop: (url: string) => void
  className?: string
}

export function DragDropZone({ onUrlDrop, className }: DragDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      // Try to get text from the drag event
      const text = e.dataTransfer.getData("text")
      if (text && (text.startsWith("http://") || text.startsWith("https://"))) {
        onUrlDrop(text)
        return
      }

      // If no text, try to get files
      const items = e.dataTransfer.items
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          if (item.kind === "file" && item.type === "text/plain") {
            const file = item.getAsFile()
            if (file) {
              const reader = new FileReader()
              reader.onload = (event) => {
                const content = event.target?.result as string
                if (content && (content.startsWith("http://") || content.startsWith("https://"))) {
                  onUrlDrop(content.trim())
                }
              }
              reader.readAsText(file)
            }
          }
        }
      }
    },
    [onUrlDrop],
  )

  return (
    <Card
      className={cn(
        "border-2 border-dashed p-6 flex flex-col items-center justify-center text-center transition-colors",
        isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50",
        className,
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className={cn("h-10 w-10 mb-4", isDragging ? "text-primary" : "text-muted-foreground")} />
      <p className="text-sm font-medium">Drag and drop a URL or text file containing a URL</p>
      <p className="text-xs text-muted-foreground mt-1">
        Supported platforms: YouTube, TikTok, Instagram, Facebook, Twitter, CapCut
      </p>
    </Card>
  )
}
