import React from 'react';
import buchivacoa from "../../public/somos-buchivacoa.jpg";


const SomosBuchivacoa = ({message, showDownArrow = false}:{message?:string, showDownArrow:boolean}) => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${buchivacoa.src})`,
          }}
          />

    
    <div className="absolute inset-0 bg-black/40" />

    {/* Content container */}
    <div className="relative h-full w-full flex items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-wider uppercase">
        {message ? message : "Somos Buchivacoa"}
      </h1>

      {/* Down arrow */}
      {showDownArrow && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex flex-col items-center">
            <span className="text-sm">Desliza hacia abajo</span>
            <svg
              className="animate-bounce w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}
    
    </div>
  </section>
  )
}

export default SomosBuchivacoa;