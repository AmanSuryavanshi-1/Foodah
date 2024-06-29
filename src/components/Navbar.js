import React, { useState } from 'react'
import mainLogo from '../../Assets/mainlogo.png'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LiaInfoSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex items-center justify-between font-serif bg-primary-bgColor px-2 shadow-2xl">
      <div className="flex items-center">
        <img className="h-24 w-26" src={mainLogo} alt="Logo" />
      </div>

      <div className="navItems">
        <ul className="flex space-x-1">
          <li className="flex items-center px-4 py-2 cursor-pointer text-primary-light hover:text-primary-white">
            <IoHomeOutline className="h-6 w-6 mr-2 " /> Home
          </li>
          <li className="flex items-center px-4 py-2 cursor-pointer text-primary-light hover:text-primary-white">
            <LiaInfoSolid className="h-6 w-6 mr-2" /> About
          </li>
          <li className="flex items-center px-4 py-2 cursor-pointer text-primary-light hover:text-primary-white">
            <MdOutlineFavoriteBorder className="h-6 w-6 mr-2" /> Wishlist
          </li>
          <li className="flex items-center px-4 py-2 cursor-pointer text-primary-light hover:text-primary-white">
            <MdOutlineAddShoppingCart className="h-6 w-6 mr-1" /> Cart
          </li>
          <li 
            className="flex items-center px-4 py-2 cursor-pointer text-primary-light hover:text-primary-white" 
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            <LuLogIn className="h-6 w-6 mr-1"/>{btnName}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar