import React, { useState } from 'react';
// import mainLogo from '../../Assets/MainLogo.png';
import mainLogo from '../../Assets/Logo.png';
import { MdOutlineAddShoppingCart, MdOutlineFavoriteBorder, MdOutlineShoppingCartCheckout } from "react-icons/md";
import useOnlineStatus from "../utils/useOnlineStatus"
import { LiaInfoSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { RiSignalWifiOffLine } from "react-icons/ri";
import { MdOutlineNetworkWifi } from "react-icons/md";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex items-center justify-between px-4 py-1 font-serif bg-primary-bgColor h-1/5">
      <div className="flex items-center">
        <Link to="/"> 
        {/* <img className="h-20 my-2 w-36" src={mainLogo} alt="Logo" />  */}
          <img className="w-24 h-24" loading="eager" src={mainLogo} alt="Logo" /> 
        </Link>
        
      </div>

      <div className="navItems">
        <ul className="flex space-x-4">
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/about" className="flex items-center"> 
              <LiaInfoSolid className="w-6 h-6 mr-1" /> 
              About 
            </Link>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/contact" className="flex items-center"> 
              <IoCallOutline className="w-6 h-6 mr-1" /> 
              Contact 
            </Link>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/wishlist" className="flex items-center"> 
              <MdOutlineFavoriteBorder className="w-6 h-6 mr-1" /> 
              Wishlist 
            </Link>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white">
            <Link to="/cart" className="flex items-center"> 
              <MdOutlineAddShoppingCart className="w-6 h-6 mr-1" /> 
              Cart 
            </Link>
          </li>
          <li 
            className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white" 
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            <Link to="/auth" className="flex items-center"> 
              {btnName === "Login" ? <LuLogIn className="w-6 h-6 mr-1"/> : <CiLogout className="w-6 h-6 mr-2"/> }
              {btnName} 
            </Link>
          </li>

          <li 
            className="flex items-center px-2 cursor-pointer text-primary-light hover:text-primary-white" 
            title={onlineStatus ? "Connected to internet" : "Offline"}
          >
            {onlineStatus ? <MdOutlineNetworkWifi className="w-6 h-6"/> : <RiSignalWifiOffLine className="w-6 h-6"/>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
