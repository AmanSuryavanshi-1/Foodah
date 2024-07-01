import React from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import img1 from "../../Assets/Foodah.jpg";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, recommended] = useRestaurantMenu(resId);

  return res === null ? (
    <Shimmer />
  ) : (
    <div className="bg-primary-bgColor">
      <div className="max-w-5xl mx-72 px-4 py-8 ">
      <h1 className="text-4xl font-bold text-primary-light font-serif mb-5">Menu</h1>

        <div className="mainResInfo shadow-primary-light shadow-md rounded-lg border border-primary-yellow p-5 mb-8 flex items-center">
          <img
            className="w-32 h-26 object-cover rounded mr-4"
            src={CDN_URL + res?.cloudinaryImageId}
            alt={res?.name}
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
              <span className="mx-1 font-extrabold">|</span>
              <span>{res?.costForTwoMessage}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-xl font-bold text-primary-light font-serif ">{recommended?.title}</h1>
          {recommended?.itemCards.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4">
              <img className="w-24 h-24 object-cover rounded mr-4" src={CDN_URL + item?.card?.info?.imageId} alt={img1} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item?.card?.info?.name}</h3>
                  <span className="text-lg font-bold text-gray-800">₹{(item?.card?.info?.defaultPrice) / 100}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{item?.card?.info?.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600">★ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})</span>
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">ADD</button>
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
