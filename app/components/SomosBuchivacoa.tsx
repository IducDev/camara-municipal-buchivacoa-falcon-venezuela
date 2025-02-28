import React from 'react';
import buchivacoa from "../../public/somos-buchivacoa.jpg";


const SomosBuchivacoa = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
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
        Somos Buchivacoa
      </h1>
    </div>
  </section>
  )
}

export default SomosBuchivacoa;