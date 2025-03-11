interface LiveIndicatorProps {
    isLive: boolean
  }
  
  export function LiveIndicator({ isLive }: LiveIndicatorProps) {
    return (
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${isLive ? "bg-green-500" : "bg-red-500"}`}>
          {/* Indicador de color */}
        </div>
        <span className={`text-sm font-medium ${isLive ? "text-green-600" : "text-red-600"}`}>
          {isLive ? "Estamos en VIVO" : "Fuera del aire"}
        </span>
      </div>
    )
  }
  
  