"use client"

import { useRef } from "react"
import { Play, Volume2, VolumeX, Maximize } from "lucide-react"
import { Button } from "flowbite-react"

interface VideoPlayerProps {
  streamUrl: string
}

export default function TikTokVideoPlayer({ streamUrl }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const isMutedRef = useRef(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      isMutedRef.current = videoRef.current.muted
    }
  }

  const toggleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        playerRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div ref={playerRef} className="relative aspect-video w-full bg-black rounded-lg overflow-hidden group">
      <video ref={videoRef} src={streamUrl} className="w-full h-full object-contain" playsInline controls={false} />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button color="gray" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
              <Play className="h-5 w-5" />
            </Button>

            <Button color="gray" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
              {isMutedRef.current ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>

          <Button color="gray" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
            <Maximize className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

