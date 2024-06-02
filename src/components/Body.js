import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer/Shimmer'
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
      const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999',
      {
        headers: {
          'x-cors-api-key': 'temp_7c2e6610d552855652c720ec06b89198'
        }
      }
    );
      const json = await data.json();
      const responseRes = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      console.log(responseRes);
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
    <div className='body'>
      <div className="search-filter">
        <div className="search">
          <input type="text" className='search-box' value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />

        <button className='search-btn'
        onClick={()=>{
          const searchedRestaurants = listOfRestaurants.filter((res)=>{
            return res.data.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setFilteredRestaurants(searchedRestaurants);
        }}
        >Search</button>

        </div>
      </div>
      
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
        {filteredRestaurants.map((restaurant) => (
                <RestaurantCard resInfo={restaurant} key={restaurant.info.id} />
            ))}
        </div>
    </div>
  )
}

export default Body