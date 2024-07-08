import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 gap-5 px-12 mx-20 mt-20 sm:grid-cols-2 lg:grid-cols-4 h-4/5 animate-pulse bg-primary-bgColor min-h-dvh" >
      {[...Array(16)].map((_, index) => (
        <div key={index} className="overflow-hidden rounded-lg bg-primary-grey h-70">
          <div className="h-40 bg-primary-grey"></div>
          <div className="p-2 space-y-1">
            <div className="w-3/4 h-4 rounded bg-primary-dark"></div>
            <div className="w-1/2 h-4 rounded bg-primary-dark"></div>
            <div className="w-full h-4 rounded bg-primary-dark"></div>
            <div className="w-2/3 h-4 rounded bg-primary-dark"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
