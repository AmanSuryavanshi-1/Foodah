import React from 'react';

const ShimmerCard = () => (
  <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
    <div className="w-full h-40 mb-4 bg-gray-300 rounded-lg"></div>
    <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
    <div className="w-1/2 h-4 mb-2 bg-gray-300 rounded"></div>
    <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
  </div>
);

const ShimmerRestaurantMenu = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary-bgColor via-primary-bgColor to-primary-dark animate-pulse">
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <div className="w-3/4 h-8 mx-auto mb-12 bg-gray-300 rounded"></div>
      <div className="p-1 mb-8 rounded-2xl bg-gradient-to-br from-primary-yellow to-primary-light">
        <div className="flex flex-col items-stretch p-4 rounded-xl md:flex-row bg-primary-bgColor">
          <div className="mb-4 md:w-1/3 md:mb-0 md:mr-6">
            <div className="w-full h-48 bg-gray-300 rounded-md"></div>
          </div>
          <div className="flex-grow">
            <div className="w-3/4 h-6 mb-2 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-4 mb-2 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 mb-3 bg-gray-300 rounded"></div>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-gray-300 rounded-full"></div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-8 mx-auto">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-8">
            <div className="w-1/4 h-6 mb-4 bg-gray-300 rounded"></div>
            {[...Array(4)].map((_, itemIndex) => (
              <div key={itemIndex} className="flex items-center mb-4">
                <div className="w-16 h-16 mr-4 bg-gray-300 rounded"></div>
                <div className="flex-grow">
                  <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
                  <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Shimmer = ({ type = 'list' }) => {
  if (type === 'menu') {
    return <ShimmerRestaurantMenu />;
  }

  return (
    <div className="p-8 font-serif mx-28 bg-primary-bgColor max-sm:mx-1">
      <div className="mx-4 mb-6">
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex sm:w-auto">
            <div className="w-11/12 h-10 mr-2 bg-gray-300 rounded-2xl animate-pulse"></div>
            <div className="w-24 h-10 bg-gray-300 rounded-2xl animate-pulse"></div>
          </div>
          <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:space-x-2">
            <div className="w-full h-10 mb-2 bg-gray-300 rounded-2xl animate-pulse sm:w-48 sm:mb-0"></div>
            <div className="w-full h-10 bg-gray-300 rounded-2xl animate-pulse sm:w-32"></div>
          </div>
        </div>
      </div>
      <div className="grid min-h-screen grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;