import React from 'react'

const Plans = () => {
  return (
    <div 
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/Images/garden.png)',
        WebkitMaskImage: 'linear-gradient(to top, black 75%, transparent 100%)',
        maskImage: 'linear-gradient(to top, black 75%, transparent 100%)'
      }}
    >
      <h1 className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg text-center z-10">Plans</h1>
    </div>
  )
}

export default Plans