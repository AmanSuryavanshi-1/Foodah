import React from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useFallbackImage from "../utils/useFallbackImage";
import RestaurantCategory from "../components/RestaurantCategory";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res,  categories, nestedCategories] = useRestaurantMenu(resId);
  const handleImageError = useFallbackImage();

  return res === null ? (
    <Shimmer type="menu" />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-primary-bgColor via-primary-bgColor to-primary-dark">
  <div className="max-w-4xl px-4 py-12 mx-auto">
    <h1 className="mb-12 font-serif text-4xl font-bold text-center text-primary-light drop-shadow-lg">
      Culinary Delights
    </h1>
    <div className="relative p-1 shadow-lg rounded-2xl bg-gradient-to-br shadow-primary-dark from-primary-yellow to-primary-light">
  <div className="flex flex-col items-stretch p-4 rounded-xl md:flex-row bg-primary-bgColor">
    <div className="mb-4 md:w-1/3 md:mb-0 md:mr-6">
      <img
        className="object-cover w-full h-48 mx-auto rounded-md"
        src={CDN_URL + res?.cloudinaryImageId}
        alt={res?.name}
        onError={handleImageError}
      />
    </div>
    <div className="flex flex-col justify-between flex-grow">
      <div>
        <h3 className="mb-2 font-serif text-2xl font-semibold text-primary-light">
          {res?.name}
        </h3>
        <div className="flex items-center mb-2">
          <span className="text-sm text-green-500">★ {res?.avgRatingString} <span className="ml-1">({res?.totalRatingsString})</span></span>
        </div>
        <div className="mb-3 font-sans text-md text-primary-light">
          <span>{res?.cuisines?.join(" • ")}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 font-sans text-sm text-primary-light">
        <div className="flex items-center">
          <span className="mr-2 text-xl material-icons text-primary-yellow"><TbTruckDelivery/></span>
          <span>{res?.sla?.slaString}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xl material-icons text-primary-yellow"><GiMoneyStack /></span>
          <span className="font-mono font-bold">{res?.costForTwoMessage}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xl material-icons text-primary-yellow"><MdDeliveryDining /></span>
          <span>{res?.feeDetails?.title}: ₹{res?.feeDetails?.totalFee / 100}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xl material-icons text-primary-yellow"><FaLocationDot /></span>
          <span>{res?.sla?.lastMileTravelString}</span>
        </div>
        <div className="flex items-center col-span-2">
          <span className="mr-2 text-xl material-icons text-primary-yellow"><FaClock /></span>
          <span>{res?.sla?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  </div>
</div>
    
    <div className="w-full px-4 py-8 mx-auto">
      {/* Showing Categories  */}
      {categories.map((i) => (
        <RestaurantCategory key={i?.card?.card?.title} catData={i?.card?.card} />
      ))}
      {nestedCategories.map((i) => (
        <RestaurantCategory key={i?.card?.card?.title} catData={i?.card?.card} />
      ))}
    </div>
  </div>
</div>
);
};

export default RestaurantMenu;
