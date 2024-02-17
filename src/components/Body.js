import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import { ALL_RESTAURANTS_LIST } from  '../utils/mockData';

const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  useEffect(() => {
    setListOfRestaurants(ALL_RESTAURANTS_LIST);
   }, []);
   
  return (
    <div className='body'>
      <div className="filter" >
        <button className='filter-btn'
        onClick={()=>{
          const filteredList = listOfRestaurants.filter((restaurant) =>{
            return restaurant.data.avgRating >= 4;
          })
          setListOfRestaurants(filteredList);
        }}
        >Top Rated Restaurants </button>
      </div>
        <div className="RestaurantContainer">
        {listOfRestaurants.map((restaurant) => (
                <RestaurantCard resData={restaurant} key={restaurant.data.id} />
            ))}
        </div>
    </div>
  )
}

export default Body