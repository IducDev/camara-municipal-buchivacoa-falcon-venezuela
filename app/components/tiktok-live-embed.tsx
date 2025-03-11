"use client"

import { useEffect, useState } from "react"

interface TikTokLiveEmbedProps {
  username: string
}

export default function TikTokLiveEmbed({ username }: TikTokLiveEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Remove any existing TikTok embed scripts to avoid duplicates
    const existingScripts = document.querySelectorAll('script[src*="tiktok.com/embed.js"]')
    existingScripts.forEach((script) => script.remove())

    // Load TikTok embed script
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true

    script.onload = () => {
      setIsLoading(false)

      // Force TikTok to scan for new embeds
      interface TikTokWindow extends Window {
        TikTok?: {
          scan: () => void;
        };
      }

      const tiktokWindow: TikTokWindow = window;

      if (tiktokWindow.TikTok && tiktokWindow.TikTok.scan()) {
        setTimeout(() => {
          tiktokWindow.TikTok!.scan()
        }, 100)
      }
    }

    script.onerror = () => {
      setIsLoading(false)
      setError("Failed to load TikTok embed script")
    }

    document.body.appendChild(script)

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [username])

  return (
    <div className="w-full">
      {isLoading && (
        <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading TikTok live stream...</div>
        </div>
      )}

      {error && (
        <div className="aspect-video w-full bg-red-50 rounded-lg flex items-center justify-center">
          <div className="text-red-500">{error}</div>
        </div>
      )}

      <blockquote
        className={`tiktok-embed ${isLoading ? "hidden" : ""}`}
        cite={`https://www.tiktok.com/@${username}/live`}
        data-video-id="live"
        style={{ maxWidth: "100%" }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href={`https://www.tiktok.com/@${username}?refer=embed`}>
            @{username}
          </a>{" "}
          TikTok Live
        </section>
      </blockquote>
    </div>
  )
}

