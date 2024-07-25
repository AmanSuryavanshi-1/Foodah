import React from 'react'
import { CDN_URL } from "../utils/constant";
import vegIcon from "../../Assets/veg.png"; 
import nonVegIcon from "../../Assets/nonVeg.png";
import useFallbackImage from "../utils/useFallbackImage";

const RestaurantItemList = ({ itemCardsData }) => {
    const handleImageError = useFallbackImage();
    
  return (
    <div>
       <h1 className="font-serif text-xl font-bold text-primary-light">{itemCardsData?.title}</h1>
          {itemCardsData?.map((i, index) => (
            <div key={index} className="flex items-center p-4 pt-0 mt-0 overflow-hidden rounded-lg shadow-xl">
              <img className="object-cover w-32 h-32 mr-4 rounded" src={CDN_URL + i.card?.info?.imageId} alt={i.card?.info?.name} onError={handleImageError} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary-light">
                    {i.card?.info?.name}
                  </h3>
                  <img
                      src={i.card?.info?.itemAttribute?.vegClassifier === "VEG" ? vegIcon : nonVegIcon}
                      alt={i.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "Veg" : "Non-Veg"}
                      className="inline-block w-6 h-6 ml-2"
                    />
                </div>
                <span className="text-primary-white">
                    {i.card?.info?.defaultPrice > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(i.card?.info?.defaultPrice / 100)
                      : " "}
                  </span>
                  <p className="text-sm text-green-600">★ {i.card?.info?.ratings?.aggregatedRating?.rating} ({i.card?.info?.ratings?.aggregatedRating?.ratingCount})</p>

                <div className="flex items-center justify-between">
                <p className="mb-2 mr-12 text-sm text-primary-light">{i.card?.info?.description}</p>

                  <button className="px-3 py-1 transition duration-300 rounded shadow-md bg-primary-yellow text-primary-bgColor hover:bg-primary-light">ADD</button>
                </div>
              </div>
            </div>
          ))} 
    </div>
  )
}

export default RestaurantItemList
