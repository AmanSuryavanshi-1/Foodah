import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"; // Example: using AiOutlineHome from react-icons/ai

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary-light via-primary-yellow to-yellow-200">
      <div className="text-center p-10 bg-primary-bgColor shadow-2xl rounded-2xl transform transition duration-500 hover:scale-105">
        <div className="flex justify-center mb-4">
          <AiOutlineHome className="h-16 w-16 text-primary-yellow animate-bounce" /> {/* Example: using AiOutlineHome */}
        </div>
        <h1 className="text-6xl font-bold text-primary-yellow mb-4">OOPS!!!</h1>
        <h2 className="text-2xl font-semibold text-primary-light mb-2">Something went wrong</h2>
        <h3 className="text-lg text-primary-light mb-4">Check URL path again</h3>
        <h4 className="text-lg text-primary-light mb-6">
          {err.status}: {err.statusText}
        </h4>
        <button className="bg-primary-yellow text-primary-bgColor px-6 py-2 rounded-full shadow-md hover:bg-primary-light transition duration-300">
            <Link to="/" className="flex items-center"> 
            <AiOutlineHome className="h-5 w-5 mr-2" /> 
            Go Back Home
            </Link>
            
        </button>
      </div>
    </div>
  );
};

export default Error;
