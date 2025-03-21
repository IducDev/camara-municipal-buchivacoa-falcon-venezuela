
"use client"
import { useState, useEffect } from "react"
import { LiveIndicator } from "@/app/components/LivesIndicator"
import Footer from '@/app/components/Footer'
import { NavBar } from '@/app/components/NavBar'
import React from 'react';
import { YouTubeEmbed } from "@/app/components/YoutubeEmbed";
import { isLiveNow } from "@/app/lib/Schedule";


const Page = () => {
    const [isLive, setIsLive] = useState(false);
    const videoIdSesion = "V8eZQyLU1Gc" // Reemplaza con tu ID de video de YouTube
    


    useEffect(() => {
      const checkLiveStatus = () => {
        setIsLive(isLiveNow());
      }
  
      // Comprobar inmediatamente
      checkLiveStatus();
  
      // Comprobar cada minuto
      const interval = setInterval(checkLiveStatus, 60000);
  
      return () => clearInterval(interval);
    }, [])

  return (
    <>
    <NavBar/>
        <main className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Nuestra Transmisión en Vivo</h1>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Transmisión De sesiones</h2>
                        <LiveIndicator isLive={isLive} />
                    </div>
                    <div className="aspect-video w-full">
                        {isLive ? (
                        <YouTubeEmbed videoId={videoIdSesion} />
                        ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <div className="text-center p-6">
                            <h3 className="text-xl font-medium mb-2">No estamos en vivo ahora</h3>
                            <p className="text-gray-600">Vuelve durante nuestro horario de transmisión</p>
                            </div>
                        </div>
                        )}
                    </div>
                    
                        <div className="p-4 bg-gray-50">
                            <h3 className="font-medium mb-2">Horario de transmisiones:</h3>
                            <ul className="space-y-1 text-sm">
                                <li>• Martes: 10:00 - 12:00</li>
                            </ul>
                        </div>
                    
                    </div>

                    <h2 className="text-3xl my-6">Historial de transmisiones</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Ejemplo de un video pasado */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1">
                        <YouTubeEmbed videoId={"AhRyZT1KqaA"} />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1">
                        <YouTubeEmbed videoId={"mYwK4CpBVZU"} />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1">
                        <YouTubeEmbed videoId={"-yOJ0gU5bpQ"} />
                    </div>
                    
                </div>

                </div>
                
            
            
            </main>
        <Footer/>
    </>
  )
}

export default Page;
