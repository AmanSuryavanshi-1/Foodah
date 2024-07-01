import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 h-200 gap-5 px-12 mx-8 my-12 animate-pulse bg-primary-bgColor min-h-dvh" >
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-primary-grey rounded-lg h-72 overflow-hidden">
          <div className="h-48 bg-primary-grey"></div>
          <div className="p-2 space-y-1">
            <div className="h-4 bg-primary-dark rounded w-3/4"></div>
            <div className="h-4 bg-primary-dark rounded w-1/2"></div>
            <div className="h-4 bg-primary-dark rounded w-full"></div>
            <div className="h-4 bg-primary-dark rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
