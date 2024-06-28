import React, { useEffect, useState } from "react";

import Shimmer  from "./Shimmer"
import { CDN_URL } from "../utils/constant";
import { resAPI_URL } from "../utils/constant"
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
const [res, setRes] = useState(null);
const [recommended, setRecommended] = useState(null);

const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch (resAPI_URL+resId); 
        
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards[]?.card?.card?.info?.name);
        const restaurantData = json?.data?.cards[2]?.card?.card?.info;  
        setRes(restaurantData);

       const RecommendedData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // console.log(RecommendedData);
        setRecommended(RecommendedData);
  };

    return res===null ? (<Shimmer/>) : (
        <div>
            <div className="mainResInfo">
                <h1>Menu</h1>
                <h3>{res.name}</h3>
                <h4>Ratings:- {res.avgRatingString} <span>{res.totalRatingsString}</span> </h4>
                <h4>Cuisines:- {res.cuisines.join(", ")}</h4>
                <h4>Cost:- {res.costForTwoMessage}</h4>
                <h4>{res.feeDetails.totalFee/100} Delivery fee will apply</h4>
                <h4>{res.sla.lastMileTravelString}</h4>
                <h4>{res.sla.slaString}</h4>
                <h4>{res.locality} {res.areaName} {res.city}</h4>
            </div>

            {/* <div className="topPicks">
                <h2>Top Picks</h2>
                <div className="TopPicksCarousel">
                    {res.topPicks.map((item, index) => (
                        <div key={index}>
                            <img src={item.imageUrl} alt={item.name} />
                            <h4>{item.name}</h4>
                            <h4>${item.price}</h4>
                        </div>
                    ))}
                </div>

            </div> */}

            <div className="recommended">
                <h1>{recommended?.title}</h1>
                <ul>
                {recommended?.itemCards.map((item, index) => (
                        <li key={index}>
                            <div className="main">
                            <img className='ResLogo' src={CDN_URL+ item?.card?.info?.imageId} alt="ResLogo" />
                           <h3>{item?.card?.info?.name} - {(item?.card?.info?.defaultPrice)/100} </h3>
                           <p>{item?.card?.info?.description}</p>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu
