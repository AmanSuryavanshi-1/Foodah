import React, { useEffect, useState } from 'react'
import { resAPI_URL } from "../utils/constant"

const useRestaurantMenu = (resId) => {
    const [res, setRes] = useState(null);
    const [recommended, setRecommended] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch (resAPI_URL+ resId); 
        const json = await data.json();
        console.log(json);

        const restaurantData = json?.data?.cards[2]?.card?.card?.info;  
        setRes(restaurantData);

        const RecommendedData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        setRecommended(RecommendedData);
  };
  return [res,recommended]
}

export default useRestaurantMenu