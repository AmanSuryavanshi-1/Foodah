import React, {useState, useEffect} from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from './Shimmer'
import { menuAPI_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async () => {
    try{
      const data = await fetch(menuAPI_URL);
      const json = await data.json();
      
      const checkJsonData = (json) =>{
        for(let i=0; i<json?.data?.cards.length; i++){
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if(checkData != undefined){
            return checkData;
          }
        }
      }
      const responseRes = checkJsonData(json);
        console.log(responseRes);
        setListOfRestaurants(responseRes);
        setFilteredRestaurants(responseRes);
    }catch(error){
      console.error("Error in fetching data:", error);
    }
  };
   
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <h1 className="p-4 text-xl font-semibold text-red-600 bg-red-200 rounded-md shadow-lg">
        Looks like you are offline!! Please check your internet connection
      </h1>
    </div>
  );
  
  return listOfRestaurants.length == 0 ? <Shimmer/> : (
    
  // ~ FILTER BY SEARCH
    <div className="p-8 font-serif mx-28 bg-primary-bgColor">
      <div className="mx-4 mb-6">
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="flex sm:w-auto">
          <input
            type="text"
            className="justify-center w-11/12 px-4 mr-2 shadow-sm border-primary-grey rounded-2xl"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="inline-flex items-center px-4 py-2 transition-all duration-300 border-2 shadow-sm cursor-pointer rounded-2xl shadow-primary-light border-primary-yellow text-primary-light bg-primary-bgColor hover:bg-primary-light hover:text-primary-bgColor hover:border-transparent"
            onClick={() => {
              const searchedRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(searchedRestaurants);
            }}
          >
            Search <FaSearch className="ml-2 text-sm"/>
          </button>
          </div>
{/* FILTER BY RATING - Top Rated Restaurants */}
<div className="flex flex-col w-full sm:w-auto sm:flex-row sm:space-x-2">
        <button className="flex items-center justify-center px-4 py-2 transition-all duration-300 border-2 shadow-sm cursor-pointer rounded-2xl shadow-primary-light bg-primary-yellow text-primary-bgColor border-primary-white hover:bg-primary-light hover:text-primary-bgColor hover:border-transparent"
        onClick={()=>{
          const filteredList = listOfRestaurants.filter((res) =>{
            return res.info.avgRating >= 4.5;
          })
          setFilteredRestaurants(filteredList);
        }}
        >Top Rated Restaurants </button>
      {/* </div> */}

{/* RESET FILTERS */}
      {/* <div className="flex justify-center mt-8"> */}
        <button className="flex items-center justify-center px-4 py-2 transition-all duration-300 border-2 shadow-sm cursor-pointer rounded-2xl shadow-primary-light bg-primary-yellow text-primary-bgColor border-primary-white hover:bg-primary-light hover:text-primary-bgColor hover:border-transparent"
        onClick={()=>{
          setFilteredRestaurants(listOfRestaurants);
          setSearchText(""); // Clear the search text
        }}
        >Reset Filters </button>
      </div>
</div>
</div>
{/* RESTAURANT CARDS */}
      <div className="grid min-h-screen grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resInfo={restaurant} />
          </Link>
        ))} */}
        {filteredRestaurants.length === 0 ? (
            <h2 className="text-xl text-gray-600">No restaurants found for "{searchText}"</h2>
          ) : (
        filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resInfo={restaurant} />
          </Link>
        ))
         )}
      </div>
    </div>
  )
}

export default Body