import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex flex-col justify-center m-24 h-5/6 bg-primary-bgColor">
      <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute inset-0 -my-2 transform -skew-y-6 shadow-md shadow-primary-light bg-gradient-to-r from-primary-yellow to-primary-light sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-6 py-6 shadow-lg bg-primary-white sm:rounded-3xl">
          <div className="max-w-xs mx-auto">
            <h1 className="mb-4 font-serif text-xl font-semibold text-center text-primary-bgColor">{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <input autoComplete="off" id="name" name="name" type="text" className="w-full h-8 text-sm placeholder-transparent border-b text-primary-bgColor border-primary-grey peer focus:outline-none focus:border-primary-yellow" placeholder="Full Name" required />
                  <label htmlFor="name" className="absolute left-0 text-xs transition-all -top-3 text-primary-grey peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary-grey peer-placeholder-shown:top-1 peer-focus:-top-3 peer-focus:text-primary-yellow peer-focus:text-xs">Full Name</label>
                </div>
              )}
              <div className="relative">
                <input autoComplete="off" id="email" name="email" type="email" className="w-full h-8 text-sm placeholder-transparent border-b text-primary-dark border-primary-grey peer focus:outline-none focus:border-primary-yellow" placeholder="Email address" required />
                <label htmlFor="email" className="absolute left-0 text-xs transition-all -top-3 text-primary-grey peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary-grey peer-placeholder-shown:top-1 peer-focus:-top-3 peer-focus:text-primary-yellow peer-focus:text-xs">Email Address</label>
              </div>
              <div className="relative">
                <input autoComplete="off" id="password" name="password" type="password" className="w-full h-8 text-sm placeholder-transparent border-b text-primary-dark border-primary-grey peer focus:outline-none focus:border-primary-yellow" placeholder="Password" required />
                <label htmlFor="password" className="absolute left-0 text-xs transition-all -top-3 text-primary-grey peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary-grey peer-placeholder-shown:top-1 peer-focus:-top-3 peer-focus:text-primary-yellow peer-focus:text-xs">Password</label>
              </div>
              {isLogin && (
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="w-3 h-3 rounded text-primary-yellow focus:ring-primary-yellow border-primary-grey"
                    />
                    <label htmlFor="remember-me" className="ml-1 text-primary-grey">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="font-bold text-primary-yellow hover:text-primary-dark">
                    Forgot password?
                  </a>
                </div>
              )}
              <div>
                <button type="submit" className="w-full px-4 py-2 text-sm font-bold transition-colors duration-300 border-2 rounded-md border-primary-light text-primary-white bg-primary-yellow hover:bg-primary-dark">
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <button className="flex items-center justify-center w-full px-4 py-2 text-xs font-medium transition-colors duration-300 border rounded-lg shadow-sm text-primary-grey bg-primary-white border-primary-grey hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow">
              <FcGoogle className="mr-2" /> <span>Continue with Google</span>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-primary-grey">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className="ml-1 font-bold transition-colors duration-300 text-primary-yellow hover:text-primary-dark"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;