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
    <div className='RestaurantCard'>
        <img className='ResLogo' src={CDN_URL+cloudinaryImageId} alt="ResLogo" />
        <h3>{name}</h3>
        <h4>Cuisines : {cuisines.join(", ")}</h4>
        <h4>Ratings : {avgRatingString} <span>{totalRatingsString}</span></h4>
        <h4>Cost: {costForTwo}</h4>
        <h4>{sla?.deliveryTime} min away</h4>
        <h4>Distance:{sla?.lastMileTravelString}</h4>
        <h4>{locality}</h4>
        {/* <h4>{veg ? "Veg" : "NonVeg"}</h4> */}
    </div>
  )
}

export default RestaurantCard