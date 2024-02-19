import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import { ALL_RESTAURANTS_LIST } from  '../utils/mockData';

const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setListOfRestaurants(ALL_RESTAURANTS_LIST);
    setFilteredRestaurants(ALL_RESTAURANTS_LIST);
   }, []);
   
  return (
    <div className='body'>
      <div className="search-filter">
        <div className="search">
          <input type="text" value={searchText}
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
        ></button>

        </div>
      </div>
      {/* <div className="search-filter">
      <div className="search">

      <input type="text" className='search-box' value={searchText} 
      onChange={(e)=>{
        setSearchText(e.target.value);
      }}
      />
      <button className='search-btn'
      onClick={()=>{
      const filteredRestaurants = listOfRestaurants.filter((res) =>{
        return res.data.name.toLowerCase().includes(searchText.toLowerCase());
      })
      setFilteredRestaurants(filteredRestaurants);
      }}
      >
        search
      </button>
      </div>
      </div> */}
      

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
                <RestaurantCard resData={restaurant} key={restaurant.data.id} />
            ))}
        </div>
    </div>
  )
}

export default Body