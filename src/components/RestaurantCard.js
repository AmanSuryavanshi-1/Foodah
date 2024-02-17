import React from 'react'
import { CDN_URL } from '../utils/constant'

const RestaurantCard = ({resData}) => {
    if (!resData || !resData.data) {
        return null;
      }
const{
cloudinaryImageId,
name,
cuisines, 
avgRating, 
deliveryTime, 
costForTwo,
veg,
address,
locality,
} = resData.data;

  return (
    <div className='RestaurantCard'>
        <img className='ResLogo' src={CDN_URL+cloudinaryImageId} alt="ResLogo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo/100} FOR TWO</h4>
        <h4>{deliveryTime}MINUTES</h4>
        <h4>{address}</h4>
        <h4>{locality}</h4>
        {/* <h4>{veg ? "Veg" : "NonVeg"}</h4> */}
    </div>
  )
}

export default RestaurantCard