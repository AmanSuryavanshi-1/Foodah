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
    const nestedCategories = Array.isArray(catData?.categories) ? catData.categories : [];

    return (
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg bg-primary-grey">
            <div 
                className="p-4 transition-colors duration-300 cursor-pointer hover:bg-primary-dark"
                onClick={handleClick}
            >
                <h1 className="flex items-center justify-between font-serif text-lg font-bold sm:text-xl md:text-2xl text-primary-light">
                    <p>
                        {catData?.title}   
                        <span>({catData?.itemCards?.length || nestedCategories.length || 0})</span>
                    </p> 
                    <span className="text-2xl sm:text-3xl text-primary-yellow">
                        {showDropdown ? <MdExpandLess /> : <MdExpandMore />}
                    </span>
                </h1>
            </div>
            {showDropdown && <RestaurantItemList itemCardsData={catData?.itemCards} />}
            {/* Map through nested categories if they exist */}
            {showDropdown && nestedCategories.map((i, index) => (
                <RestaurantItemList key={index} itemCardsData={i.itemCards} />
            ))}
        </div>
    )
}

export default RestaurantCategory