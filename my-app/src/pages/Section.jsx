import React from 'react'

const Section = () => {
  return (
    <div 
      id="section"
      className="min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16 md:py-24"
      style={{
        backgroundImage: 'url(/assets/Images/wooden.png)'
      }}
    >
      <div className="text-center max-w-3xl">
        <h2 
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow"
          style={{ fontFamily: 'Supercell-Magic, cursive' }}
        >
          Fresh From The Wooden Crate
        </h2>
        <p className="mt-4 text-white/90 text-sm sm:text-base">
          Premium picks presented on a warm wooden backdrop.
        </p>
      </div>
    </div>
  )
}

export default Section