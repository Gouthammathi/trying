import React from 'react'

const Plans = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(assets/Images/plans-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: '#8B4513'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Plans Content */}
      <div className="relative z-10 text-center text-white p-8 max-w-6xl mx-auto">
        <div 
          className="mb-8"
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
          <div className="text-4xl font-bold leading-tight">Our</div>
          <div className="text-7xl font-bold leading-tight">Plans</div>
        </div>
        
        <p className="text-xl mb-12 drop-shadow-lg">
          Choose from our delightful plans to get the freshest fruits delivered right to your door!
        </p>
        
        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white border-opacity-30">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Basic Basket</h2>
            <p className="text-lg mb-6">A weekly selection of seasonal favorites perfect for individuals.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>• 5-7 different fruits</li>
              <li>• Weekly delivery</li>
              <li>• Seasonal selection</li>
              <li>• Fresh guarantee</li>
            </ul>
            <p className="text-4xl font-bold mb-6 text-green-300">$19.99/month</p>
            <button className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
              Select Plan
            </button>
          </div>

          {/* Family Plan */}
          <div className="bg-white bg-opacity-25 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-yellow-400 border-opacity-50 transform scale-105">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              MOST POPULAR
            </div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Family Feast</h2>
            <p className="text-lg mb-6">Enough fruits for the whole family to enjoy together!</p>
            <ul className="text-left mb-6 space-y-2">
              <li>• 10-12 different fruits</li>
              <li>• Bi-weekly delivery</li>
              <li>• Family-sized portions</li>
              <li>• Premium quality</li>
              <li>• Free delivery</li>
            </ul>
            <p className="text-4xl font-bold mb-6 text-green-300">$34.99/month</p>
            <button className="w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full text-lg font-semibold transition duration-300 shadow-lg">
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white border-opacity-30">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Premium Harvest</h2>
            <p className="text-lg mb-6">Exotic and rare fruits for the discerning palate.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>• 15+ exotic fruits</li>
              <li>• Weekly delivery</li>
              <li>• Rare varieties</li>
              <li>• Organic certified</li>
              <li>• Priority support</li>
            </ul>
            <p className="text-4xl font-bold mb-6 text-green-300">$49.99/month</p>
            <button className="w-full px-6 py-4 bg-purple-500 hover:bg-purple-600 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans