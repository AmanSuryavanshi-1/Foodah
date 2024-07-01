import React from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, recommended] = useRestaurantMenu(resId);

  return res === null ? (
    <Shimmer />
  ) : (
    <div className="bg-primary-bgColor">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mainResInfo bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-primary-yellow mb-4">Menu</h1>
          <h3 className="text-xl font-semibold">{res?.name}</h3>
          <div className="flex items-center text-primary-grey">
            <span className="text-sm">
              Ratings: {res?.avgRatingString} <span>{res?.totalRatingsString}</span>
            </span>
          </div>
          <div className="text-sm text-primary-grey">
            <span>Cuisines: {res?.cuisines?.join(", ")}</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>Cost: {res?.costForTwoMessage}</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>{res?.feeDetails?.totalFee / 100} Delivery fee will apply</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>{res?.sla?.lastMileTravelString}</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>{res?.sla?.slaString}</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>
              {res?.locality} {res?.areaName} {res?.city}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-3xl font-bold text-primary-yellow mb-4">{recommended?.title}</h1>
          {recommended?.itemCards.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-10" src={CDN_URL + item?.card?.info?.imageId} alt="Restaurant Logo" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-yellow mb-2">{item?.card?.info?.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{item?.card?.info?.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-yellow">${(item?.card?.info?.defaultPrice) / 100}</span>
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
