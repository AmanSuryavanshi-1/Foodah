import React from 'react'
import { CDN_URL } from "../utils/constant";
import vegIcon from "../../Assets/veg.png"; 
import nonVegIcon from "../../Assets/nonVeg.png";
import useFallbackImage from "../utils/useFallbackImage";
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const RestaurantItemList = ({ itemCardsData, isCart = false }) => {
    const handleImageError = useFallbackImage();
    const dispatch = useDispatch();

    const handleAddClick = (i) => {
        dispatch(addItem(i)); 
    }

    const handleRemoveClick = (index) => {
        dispatch(removeItem(index));
    }

    return (
        <div className="p-4 space-y-8">
            <h1 className="mb-6 font-serif text-2xl font-bold text-primary-light">{itemCardsData?.title}</h1>

            {itemCardsData?.map((i, index) => (
                <div key={index} className="flex items-center p-4 transition-transform duration-300 border-b border-primary-grey last:border-b-0">
                    <div className="flex-1 pr-4">
                    <img
                                src={i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? vegIcon : nonVegIcon}
                                alt={i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "Veg" : "Non-Veg"}
                                className="w-4 h-4 mr-2"
                            />
                        <div className="flex items-center mb-2">
                            
                            <h3 className="text-base font-semibold text-primary-light">
                                {i?.card?.info?.name}
                            </h3>
                        </div>
                        <span className="text-base font-bold text-primary-white">
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
                        <p className="mt-2 text-sm text-primary-white line-clamp-2">
                            {i?.card?.info?.description}
                        </p>
                    </div>
                    <div className="relative w-32 h-32">
                        <img 
                            className="object-cover w-full h-full rounded-lg" 
                            src={CDN_URL + i?.card?.info?.imageId} 
                            alt={i?.card?.info?.name} 
                            onError={handleImageError} 
                            loading='lazy'
                        />
                        <div className="absolute inset-x-0 flex justify-center -bottom-2">
                            <button 
                                 className={`px-4 py-1 text-sm font-semibold transition-all duration-300 rounded-md shadow-md border-2 border-primary-light
                                    ${isCart 
                                        ? "bg-red-500 hover:bg-red-600" 
                                        : "bg-green-500 hover:bg-green-600"
                                    } text-white`}
                                onClick={() => isCart ? handleRemoveClick(index) : handleAddClick(i)}
                            >
                                {isCart ? "REMOVE" : "ADD"}
                            </button>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default RestaurantItemList