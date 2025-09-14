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
    </header>
  )
}

export default Header