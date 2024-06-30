import React, { useState } from 'react';
// import mainLogo from '../../Assets/MainLogo.png';
import mainLogo from '../../Assets/Logo.png';
import { MdOutlineAddShoppingCart, MdOutlineFavoriteBorder, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { LiaInfoSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex items-center justify-between font-serif bg-primary-bgColor px-4 py-1 shadow-2xl">
      <div className="flex items-center">
        <Link to="/"> 
        {/* <img className="h-20 w-36 my-2" src={mainLogo} alt="Logo" />  */}
          <img className="h-24 w-24" src={mainLogo} alt="Logo" /> 
        </Link>
      </div>

      <div className="navItems">
        <ul className="flex space-x-4">
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/about" className="flex items-center"> 
              <LiaInfoSolid className="h-6 w-6 mr-1" /> 
              About 
            </Link>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/contact" className="flex items-center"> 
              <IoCallOutline className="h-6 w-6 mr-1" /> 
              Contact 
            </Link>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/wishlist" className="flex items-center"> 
              <MdOutlineFavoriteBorder className="h-6 w-6 mr-1" /> 
              Wishlist 
            </Link>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/cart" className="flex items-center"> 
              <MdOutlineAddShoppingCart className="h-6 w-6 mr-1" /> 
              Cart 
            </Link>
          </li>
          <li 
            className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white" 
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            <Link to="/auth" className="flex items-center"> 
              {btnName === "Login" ? <LuLogIn className="h-6 w-6 mr-1"/> : <CiLogout className="h-6 w-6 mr-2"/> }
              {btnName} 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
