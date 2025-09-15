import React from 'react'

const Header = () => {
  return (
    <header 
      className="absolute top-0 left-0 w-full h-20 bg-repeat-x bg-center z-20"
      style={{
        backgroundImage: 'url(/assets/Images/header.png)',
        backgroundSize: 'auto 100%',
        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))'
      }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 flex items-center">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/Images/logo.png"
            alt="Fruitopia logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow"
          />
          <span
            className="text-white font-bold text-xl sm:text-2xl tracking-wide select-none hidden xs:inline"
            style={{
              textShadow: '0 2px 2px rgba(0,0,0,0.35)'
            }}
          >
            FRUITOPIA
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header