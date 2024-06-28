import React, { useState } from 'react'
import mainLogo from '../../Assets/mainlogo.png'
const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className='flex justify-between bg-primary-dark'> 
        <div className=''>
          <img className='h-24 w-24' src={mainLogo} alt="logo.img" />
        </div>

        <div className='navItems'>
        <ul className='flex '>
            <li className='p-4 m-4'>home</li>
            <li className='p-4 m-4'>sign up</li>
            <li className='p-4 m-4'>Cart</li>
            <li className='p-4 m-4'>wishlist</li>
            <li className='p-4 m-4 cursor-pointer hover:bg-gray-300' onClick={()=>{
             btnName=== "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar