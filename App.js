import React, { Children } from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Body from './src/components/Body'
import Navbar from "./src/components/Navbar/Navbar"
import RestaurantMenu from './src/components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

   const AppLayout = () => {
    return (
    <div className="app">
        <Navbar/>
        <Outlet />
    </div>
        )
   };

   const appRouter = createBrowserRouter([
      {
         path:'/',
         element:<AppLayout/>,
         children:[
                  {
                     path:'/',
                     element:<Body/>
                  },
                  {
                     path:'/restaurants/:resId',
                     element:<RestaurantMenu/>
                  },
                  ],
                  errorElement:<Error/>,
      }
   ]);

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={appRouter}/>)

   