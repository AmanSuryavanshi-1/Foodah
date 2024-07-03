import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { menuAPI_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

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
    <div className="p-8 font-serif bg-primary-bgColor">
      <div className="mb-6">
        <div className="flex justify-center">
          <input
            type="text"
            className="justify-center w-1/3 px-3 mx-8 shadow-sm border-primary-grey rounded-2xl"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2 transition bg-primary-light text-primary-bgColor rounded-2xl hover:bg-primary-dark hover:text-primary-light"
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

      <div className="grid grid-cols-1 gap-1 px-12 mx-8 sm:grid-cols-2 lg:grid-cols-4">
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