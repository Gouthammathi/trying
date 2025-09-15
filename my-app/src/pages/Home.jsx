import React from 'react'

const Home = () => {
  return (
    <div 
      id="home"
      className="min-h-screen bg-cover bg-no-repeat relative flex items-center justify-center pt-24 px-4"
      style={{
        backgroundImage: 'url(/assets/Images/bgg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%'
      }}
    >
      {/* Light blur layer */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          backdropFilter: 'blur(1.5px)',
          WebkitBackdropFilter: 'blur(1.5px) #000'
        }}
      ></div>
      {/* Welcome Text */}
      <div className="text-center z-10">
        <div 
          className="text-white"
          style={{
            fontFamily: 'Supercell-Magic, cursive',
            textShadow: `
              
              1px -1px 0px #000,
              -1px 1px 0px #000,
              0px 1px 0px #000,
              0px -1px 0px #000,
              1px 0px 0px #000,
              -1px 0px 0px #000,
              4px 4px 0px #333
            `,
            WebkitTextStroke: '0px #000'
          }}
        >
          <div className="text-2xl sm:text-3xl font-bold leading-tight">Welcome to</div>
          <div className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight">Fruitopia</div>
        </div>
      </div>
    </div>
  )
}

export default Home