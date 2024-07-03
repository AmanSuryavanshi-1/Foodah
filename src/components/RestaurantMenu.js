import React from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useFallbackImage from "../utils/useFallbackImage";
import vegIcon from "../../Assets/veg.png"; 
import nonVegIcon from "../../Assets/nonVeg.png";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, menuItems] = useRestaurantMenu(resId);
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
          <h1 className="font-serif text-xl font-bold text-primary-light">{menuItems?.title}</h1>
          {menuItems?.itemCards.map((item, index) => (
            <div key={index} className="flex items-center p-4 pt-0 mt-0 overflow-hidden rounded-lg shadow-xl">
              <img className="object-cover w-32 h-32 mr-4 rounded" src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} onError={handleImageError} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary-light">
                    {item?.card?.info?.name}
                  </h3>
                  <img
                      src={item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? vegIcon : nonVegIcon}
                      alt={item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "Veg" : "Non-Veg"}
                      className="inline-block w-6 h-6 ml-2"
                    />
                </div>
                <span className="text-primary-white">
                    {item?.card?.info?.defaultPrice > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.card?.info?.defaultPrice / 100)
                      : " "}
                  </span>
                  <p className="text-sm text-green-600">★ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})</p>

                <div className="flex items-center justify-between">
                <p className="mb-2 mr-12 text-sm text-primary-light">{item?.card?.info?.description}</p>

                  <button className="px-3 py-1 transition duration-300 rounded shadow-md bg-primary-yellow text-primary-bgColor hover:bg-primary-light">ADD</button>
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
