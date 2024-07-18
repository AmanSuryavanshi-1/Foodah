import React from 'react'

const Cart = () => {
  return (
    <div><div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-primary-bgColor text-primary-white">
    <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-primary-bgColor "></div>
    <div className="relative z-10 max-w-2xl p-10 mx-auto text-center transform -translate-y-12 border shadow-xl rounded-xl bg-primary-grey/30 backdrop-blur-md border-primary-white/10">
      <h1 className="mb-6 font-serif text-5xl font-bold tracking-wide text-primary-yellow">
        Cart Feature Coming Soon!
      </h1>
      <p className="mb-8 font-sans text-xl leading-relaxed text-primary-light">
        We're Working on it. Get ready for a smarter food ordering experience!
      </p>
      <div className="inline-block px-8 py-4 font-sans text-lg font-semibold transition-all duration-300 ease-in-out transform rounded-full hover:scale-105 text-primary-dark bg-primary-yellow hover:bg-primary-light hover:text-primary-dark">
        Stay Tuned
      </div>
    </div>
    {[...Array(20)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary-yellow animate-ping"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 1}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      ></div>
    ))}
  </div><h1>Cart</h1></div>
  )
}

export default Cart