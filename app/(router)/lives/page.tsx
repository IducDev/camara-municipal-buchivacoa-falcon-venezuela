
"use client"
import { useState, useEffect } from "react"
import { LiveIndicator } from "@/app/components/LivesIndicator"
import Footer from '@/app/components/Footer'
import { NavBar } from '@/app/components/NavBar'
import React from 'react';
import { YouTubeEmbed } from "@/app/components/YoutubeEmbed"
import { isLiveNow } from "@/app/lib/Schedule"

const Page = () => {
    const [isLive, setIsLive] = useState(false)
    const videoId = "ogfYd705cRs" // Reemplaza con tu ID de video de YouTube
    // Comprobar si estamos en vivo según el horario
    useEffect(() => {
      const checkLiveStatus = () => {
        setIsLive(isLiveNow())
      }
  
      // Comprobar inmediatamente
      checkLiveStatus();
  
      // Comprobar cada minuto
      const interval = setInterval(checkLiveStatus, 60000)
  
      return () => clearInterval(interval)
    }, [])

