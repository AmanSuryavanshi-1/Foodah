import React from 'react'
import { CDN_URL } from '../utils/constant'
import useFallbackImage from '../utils/useFallbackImage';

const RestaurantCard = ({resInfo}) => {
    if (!resInfo || !resInfo.info) {
        return null;
      }

const handleImageError = useFallbackImage();

const{
cloudinaryImageId,
name,
cuisines, 
avgRatingString,
sla, 
totalRatingsString,
costForTwo,
locality,
} = resInfo?.info;


  return (
    <div className="overflow-hidden transform transition duration-500 hover:scale-95">
    <img
      className="mx-2 rounded-3xl w-11/12 h-44 object-fill shadow-xl"
      src={`${CDN_URL}${cloudinaryImageId}`}
      alt="ResLogo"
      onError={handleImageError}
    />
    <div className="p-4">
        <h3 className="text-lg font-semibold text-primary-light mb-1 truncate max-w-full">{name}</h3>
        <h4 className="text-primary-light truncate max-w-full">Cuisines: {cuisines.join(", ")}</h4>
        <h4 className="text-primary-light font-sans">
          Ratings: {avgRatingString} <span className="text-primary-light">({totalRatingsString})</span>
        </h4>
        <div className="flex justify-between text-primary-light">
          <h4 className='font-sans'>{sla?.deliveryTime} min away</h4>
          <h4 className='font-sans'>{sla?.lastMileTravelString}</h4>
        </div>
        <h4 className="text-primary-light font-bold">{costForTwo}</h4>     
        <h4 className="text-primary-light">{locality}</h4>
      </div>
  </div>
  )
}

export default RestaurantCard