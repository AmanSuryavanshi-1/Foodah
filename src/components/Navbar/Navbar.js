import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constant'
const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className='Navbar'> 
        <div className='logoContainer'>
          <img className='logo' src={LOGO_URL} alt="logo.img" />
        </div>
        <div className='navItems'>
        <ul>
            <li>Logo</li>
            <li>home</li>
            <button className='login' onClick={()=>{
             btnName=== "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
            <li>sign up</li>
            <li>Cart</li>
            <li>wishlist</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar