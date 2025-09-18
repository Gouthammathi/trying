import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const headerRef = useRef(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY
    let animating = false
    const getHeight = () => (headerRef.current ? headerRef.current.offsetHeight : 80)

    const onScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY
      lastY = currentY

      // Scrolling downwards (delta > 0): hide header by increasing translate
      // Scrolling upwards (delta < 0): show header by decreasing translate
      const maxHide = getHeight()
      setTranslateY(prev => {
        let next = prev
        if (delta > 0) {
          next = Math.min(maxHide, prev + delta) // hide more while scrolling down
        } else if (delta < 0) {
          next = Math.max(0, prev + delta) // reveal while scrolling up
        }
        return next
      })

      if (!animating) {
        animating = true
        requestAnimationFrame(() => {
          animating = false
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full h-20 bg-repeat-x bg-center z-20 transition-transform duration-150 ease-linear will-change-transform"
      style={{
        backgroundImage: 'url(/assets/Images/header.png)',
        backgroundSize: 'auto 100%',
        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))',
        transform: `translateY(-${translateY}px)`
      }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/Images/logo.png"
            alt="Fruitopia logo"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow"
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
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-2 sm:gap-4 md:gap-6">
          {[
            { id: 'home', label: 'Home' },
            { id: 'plans', label: 'Plans' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById(item.id)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white hover:text-yellow-300 text-sm sm:text-base font-semibold transition-colors"
              style={{ fontFamily: 'Supercell-Magic, cursive' }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header