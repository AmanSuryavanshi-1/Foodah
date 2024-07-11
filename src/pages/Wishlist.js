import React from 'react';

const Wishlist = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-yellow via-red-500 to-pink-500">
      <div className="w-full max-w-md p-8 transition-transform duration-300 transform rounded-lg shadow-2xl bg-primary-white hover:scale-105">
        <h1 className="mb-4 font-serif text-4xl font-bold text-center text-primary-bgColor">Wishlist</h1>
        <div className="text-center">
          <svg className="w-24 h-24 mx-auto mb-4 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p className="mb-6 font-sans text-xl text-primary-dark">We're cooking up something special!</p>
          <p className="mb-8 font-sans text-primary-grey">Our wishlist feature is coming soon. Get ready to save all your favorite dishes in one place!</p>
          <div className="relative">
            <div className="h-1 rounded-full bg-primary-light">
              <div className="absolute top-0 left-0 w-1/2 h-1 rounded-full bg-primary-yellow animate-pulse"></div>
            </div>
          </div>
          <p className="mt-4 font-sans text-sm text-primary-grey">Estimated arrival: Soon™</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
