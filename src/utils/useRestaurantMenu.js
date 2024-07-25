import React, { useEffect, useState } from 'react'
import { resAPI_URL } from "../utils/constant"
import { RESTAURANT_TYPE_KEY } from '../utils/constant';
import { MENU_ITEM_TYPE_KEY } from '../utils/constant';
const useRestaurantMenu = (resId) => {
    const [res, setRes] = useState(null);
    // const [menuItems, setMenuItems] = useState(null);
    const [categories, setCategories] = useState(null);
    const [nestedCategories, setNestedCategories] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch (resAPI_URL+ resId); 
        const response = await data.json();
        // console.log(response);

        const restaurantData = response?.data?.cards[2]?.card?.card?.info;  
        setRes(restaurantData);
        // const restaurantData =
        //   json?.data?.cards
        //     ?.map((x) => x.card)
        //     ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        //     ?.info || null;
        // setRes(restaurantData);

        // const menuItemsData = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // setMenuItems(menuItemsData);

        const categoriesData = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (i) => i.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
        setCategories(categoriesData);
        console.log(categoriesData);

        const nestedCategoriesData = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (i) => i.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" );
        setNestedCategories(nestedCategoriesData);
        console.log(nestedCategoriesData);
  };
  return [ res, categories, nestedCategories]
}

export default useRestaurantMenu