import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import RestaurantCard from './src/components/RestaurantCard'
import Body from './src/components/Body'
import Navbar from "./src/components/Navbar"
/* Header
   --logo
   --Nav Items
Body 
   --Search
   --restaurantContainer
   --restaurantCard
Footer
   --Copyright
   --Links
   --Address
   --Contact */

   const AppLayout = () => {
    return (
    <div className="app">
        <Navbar/>
        <Body/>
        <RestaurantCard/>
    </div>
        )
   };

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout/>);

   