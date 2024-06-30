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
   
  return listOfRestaurants.length == 0 ? <Shimmer/> : (
    <div className="bg-primary-bgColor p-8 font-serif">
      <div className="mb-6">
        <div className="flex justify-center">
          <input
            type="text"
            className="border-primary-grey rounded-2xl px-3 mx-8 w-1/3 justify-center shadow-sm"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-primary-light text-primary-bgColor rounded-2xl px-6 py-2 hover:bg-primary-dark hover:text-primary-light transition"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 px-12 mx-8">
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