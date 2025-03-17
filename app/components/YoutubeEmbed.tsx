interface YouTubeEmbedProps {
    videoId: string
}
  
export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
    return (
      <div className="w-full h-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
}
  
  