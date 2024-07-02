import React from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useFallbackImage from "../utils/useFallbackImage";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, menuItems] = useRestaurantMenu(resId);
  const handleImageError = useFallbackImage();
  
  return res === null ? (
    <Shimmer />
  ) : (
    <div className="bg-primary-bgColor">
      <div className="max-w-5xl mx-72 px-4 py-8 ">
      <h1 className="text-4xl font-bold text-primary-light font-serif mb-5">Menu</h1>

        <div className="mainResInfo shadow-primary-light shadow-sm rounded-lg border border-primary-yellow p-4 mb-8 flex items-center">
          <img
            className="w-32 h-32 object-cover rounded mr-4"
            src={CDN_URL + res?.cloudinaryImageId}
            alt={res?.name}
            onError={handleImageError}
          />
          <div>
            <h3 className="text-2xl font-semibold text-primary-light pb-2">{res?.name}</h3>
            <div className="flex items-center text-primary-grey mb-1">
              <span className="text-sm text-green-500">★ {res?.avgRatingString} <span>({res?.totalRatingsString})</span></span>
            </div>
            <div className="text-sm text-primary-light mb-1">
              <span>{res?.cuisines?.join(", ")}</span>
            </div>
            <div className="flex items-center text-sm text-primary-light mb-1">
              <span>{res?.sla?.slaString}</span>
              <span className="mx-1">|</span>
              <span className="font-extrabold font-mono">{res?.costForTwoMessage}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-12">
          <h1 className="text-xl font-bold text-primary-light font-serif">{menuItems?.title}</h1>
          {menuItems?.itemCards.map((item, index) => (
            <div key={index} className="flex items-center p-4 shadow-xl rounded-lg overflow-hidden">
              <img className="w-28 h-24 object-cover rounded mr-4" src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} onError={handleImageError} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary-light">{item?.card?.info?.name}</h3>
                  <span className="text-lg font-bold  text-primary-white">
                    {item?.card?.info?.defaultPrice > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.card?.info?.defaultPrice / 100)
                        : " "}
                  </span>
                </div>
                <p className="text-sm text-primary-light mb-2 mr-12">{item?.card?.info?.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600">★ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})</span>
                  <button className="bg-primary-yellow text-primary-bgColor shadow-md hover:bg-primary-light transition duration-300 px-3 py-1 rounded">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
