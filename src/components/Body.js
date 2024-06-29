import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { menuAPI_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async () => {
    try{
      // const data = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999"));
      const data = await fetch(menuAPI_URL);
      const json = await data.json();
      // const responseRes = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      const responseRes = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log(responseRes);
      if(Array.isArray(responseRes)){
        setListOfRestaurants(responseRes);
        setFilteredRestaurants(responseRes);
      }else{
        console.error("Invalid data format", restaurants);
      }
    }catch(error){
      console.error("Error in fetching data:", error);
    }
  };
   
  return listOfRestaurants.length == 0 ? <Shimmer/> : (
    <div className="bg-primary-textColor p-8 font-serif">
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-3 mx-8 w-96 justify-center shadow-sm"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-light transition"
            onClick={() => {
              const searchedRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* <div className="filter" >
        <button className='filter-btn'
        onClick={()=>{
          const filteredList = listOfRestaurants.filter((res) =>{
            return res.info.avgRating <= 4.5;
          })
          setListOfRestaurants(filteredList);
        }}
        >Top Rated Restaurants </button>
      </div> */}
      
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-5 px-8 mx-8">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resInfo={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body