"use client"

import { useState } from "react"

interface TikTokIframeEmbedProps {
  username: string
}

export default function TikTokIframeEmbed({ username }: TikTokIframeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full aspect-video relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="animate-pulse text-gray-500">Loading TikTok live stream...</div>
        </div>
      )}

      <iframe
        src={`https://www.tiktok.com/@${username}/live`}
        className="w-full h-full rounded-lg border-0"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        style={{ zIndex: isLoading ? 0 : 1 }}
        title={`TikTok live stream of ${username}`}
      />
    </div>
  )
}

