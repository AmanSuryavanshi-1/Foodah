import React, { useState } from 'react'
import RestaurantItemList from './RestaurantItemList';
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const RestaurantCategory = ({ catData }) => {
    const [showDropdown, setShowDropdown] = useState(false); 

    const handleClick = () =>{
        // setShowDropdown(true);
        setShowDropdown(!showDropdown); // for toggle feature of drop down menu
    }
    // console.log(catData);
    
    // Check if catData.categories is an array
    const nestedCat = Array.isArray(catData?.categories) ? catData.categories : [];

    return (
        <div className="mb-4 overflow-hidden">
            <div 
                className="px-8 py-3 transition-colors duration-300 rounded-lg cursor-pointer bg-primary-yellow hover:bg-primary-light"
                onClick={handleClick}
            >
                <h1 className="flex items-center justify-between font-serif font-bold sm:text-lg md:text-xl text-primary-bgColor">
                    <p>
                        {catData?.title}   
                        <span> ({catData?.itemCards?.length || nestedCat.length || 0})</span>
                    </p> 
                    <span className="text-2xl sm:text-3xl text-primary-bgColor">
                        {showDropdown ? <MdExpandLess /> : <MdExpandMore />}
                    </span>
                </h1>
            </div>
            {showDropdown && <RestaurantItemList itemCardsData={catData?.itemCards} />}
            {/* Map through nested categories if they exist */}
            {showDropdown && nestedCat.map((i, index) => (
                <RestaurantItemList key={index} itemCardsData={i.itemCards} />
            ))}
        </div>
    )
}

export default RestaurantCategory