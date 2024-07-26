import React from 'react'
import { CDN_URL } from "../utils/constant";
import vegIcon from "../../Assets/veg.png"; 
import nonVegIcon from "../../Assets/nonVeg.png";
import useFallbackImage from "../utils/useFallbackImage";

const RestaurantItemList = ({ itemCardsData }) => {
    const handleImageError = useFallbackImage();
    
  return (
    <div className="p-4 space-y-6">
      <h1 className="mb-4 font-serif text-xl font-bold text-primary-light">{itemCardsData?.title}</h1>
    
          {itemCardsData?.map((i, index) => (
            <div key={index} className="flex flex-col items-center p-4 transition-transform duration-300 rounded-lg shadow-xl sm:flex-row bg-primary-bgColor hover:scale-105">
            <img 
                className="object-cover w-full h-32 mb-4 rounded-lg sm:w-32 sm:mb-0 sm:mr-4" 
                src={CDN_URL + i?.card?.info?.imageId} 
                alt={i?.card?.info?.name} 
                onError={handleImageError} 
                loading='lazy'
            />
            <div className="flex-1 w-full">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold truncate text-primary-light">
                        {i?.card?.info?.name}
                    </h3>
                    <img
                        src={i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? vegIcon : nonVegIcon}
                        alt={i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "Veg" : "Non-Veg"}
                        className="w-6 h-6 ml-2"
                    />
                </div>
                <span className="text-lg font-bold text-primary-white">
                    ₹{(i?.card?.info?.defaultPrice || i?.card?.info?.price > 0)
                        ? ((i?.card?.info?.defaultPrice || i?.card?.info?.price) / 100).toFixed(2)
                        : " "}
                </span>
                <p className="mt-1 text-sm text-green-600">
                    ★ {i?.card?.info?.ratings?.aggregatedRating?.rating}
                    {i?.card?.info?.ratings?.aggregatedRating?.ratingCount
                        ? ` (${i?.card?.info?.ratings?.aggregatedRating?.ratingCount})`
                        : " No ratings yet"}
                </p>
                <div className="flex flex-col items-start justify-between mt-2 sm:flex-row sm:items-center">
                    <p className="mb-2 text-sm text-primary-light sm:mb-0 sm:mr-4 line-clamp-2">
                        {i?.card?.info?.description}
                    </p>
                    <button className="px-4 py-2 font-semibold transition duration-300 rounded-full bg-primary-yellow text-primary-bgColor hover:bg-primary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-opacity-50">
                        ADD
                    </button>
                </div>
            </div>
        </div>
          ))} 
    </div>
  )
}

export default RestaurantItemList
