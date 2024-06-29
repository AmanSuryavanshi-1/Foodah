import React from 'react'
import { CDN_URL } from '../utils/constant'

const RestaurantCard = ({resInfo}) => {
    if (!resInfo || !resInfo.info) {
        return null;
      }
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
      className="rounded-2xl w-full h-56 object-fill"
      src={`${CDN_URL}${cloudinaryImageId}`}
      alt="ResLogo"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-primary-light mb-2">{name}</h3>
      <h4 className="text-primary-light">Cuisines: {cuisines.join(", ")}</h4>
      <h4 className="text-primary-light">Ratings: {avgRatingString} <span className="text-primary-light">({totalRatingsString})</span></h4>
      <h4 className="text-primary-light">Cost: {costForTwo}</h4>
      <h4 className="text-primary-light">{sla?.deliveryTime} min away</h4>
      <h4 className="text-primary-light">Distance: {sla?.lastMileTravelString}</h4>
      <h4 className="text-primary-light">{locality}</h4>
    </div>
  </div>
  )
}

export default RestaurantCard