import React from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useFallbackImage from "../utils/useFallbackImage";
import vegIcon from "../../Assets/veg.png"; 
import nonVegIcon from "../../Assets/nonVeg.png";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res,  categories, nestedCategories] = useRestaurantMenu(resId);
  const handleImageError = useFallbackImage();

  return res === null ? (
    <Shimmer />
  ) : (
    <div className="bg-primary-bgColor">
      <div className="max-w-5xl px-4 py-8 mx-72">
        <h1 className="mb-5 font-serif text-4xl font-bold text-primary-light">Menu</h1>

        <div className="flex items-center p-4 mb-8 border rounded-lg shadow-sm mainResInfo shadow-primary-light border-primary-yellow">
          <img
            className="object-cover mr-4 rounded w-36 h-36"
            src={CDN_URL + res?.cloudinaryImageId}
            alt={res?.name}
            onError={handleImageError}
          />
          <div>
            <h3 className="pb-1 text-2xl font-semibold text-primary-light">
              {res?.name}
            </h3>
            <div className="flex items-center mb-1 text-primary-grey">
              <span className="text-sm text-green-500">★ {res?.avgRatingString} <span>({res?.totalRatingsString})</span></span>
            </div>
            <div className="text-sm text-primary-light">
              <span>{res?.cuisines?.join(", ")}</span>
            </div>
            <div className="flex items-center text-sm text-primary-light">
              <span>{res?.sla?.slaString}</span>
              <span className="mx-1">|</span>
              <span className="font-mono font-extrabold">{res?.costForTwoMessage}</span>
            </div>
            <div className="flex items-center text-sm text-primary-light">
              <span>{res?.feeDetails?.title}</span>
              <span className="mx-1">|</span>
              <span className="text-primary-light">₹{res?.feeDetails?.totalFee / 100}</span>
            </div>
            <div className="flex items-center mb-1 text-sm text-primary-light">
              <span className="text-primary-light">{res?.sla?.lastMileTravelString}</span>
              <span className="mx-1">|</span>
              <span className="text-primary-light">{res?.sla?.deliveryTime} mins</span>
            </div>
            <div className="flex items-center mb-1 text-sm text-primary-light">
              <span>{res?.minOrderAmountString}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-12">
          {/* Showing Categories  */}
        {categories.map((i)=> (<RestaurantCategory key={i?.card?.card?.title} catData={i?.card?.card} />))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
