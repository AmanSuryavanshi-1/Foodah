import React, { Suspense, lazy } from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Body from './src/components/Body'
import Navbar from "./src/components/Navbar"
import RestaurantMenu from './src/components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './src/components/NavComponents/About'
import Contact from './src/components/NavComponents/Contact'
import Cart from './src/components/NavComponents/Cart'
import Auth from './src/components/NavComponents/Auth'
import Error from './src/components/Error'

// import Wishlist from './src/components/NavComponents/Wishlist'

const wishlist = lazy(()=> import("./src/components/NavComponents/Wishlist"));

   const AppLayout = () => {
    return (
    <div className='bg-primary-bgColor'>
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
                     path:'/about',
                     element:<About/>
                  },
                  {
                     path:'/contact',
                     element:<Contact/>
                  },
                  {
                     path:'/wishlist',
                     element:<Suspense fallback={<h1  className='m-10 text-primary-light text-2xl font-semibold'>Resources are getting ready</h1>}> <wishlist/> </Suspense> ,
                  },
                  {
                     path:'/cart',
                     element:<Cart/>
                  },
                  {
                     path:'/auth',
                     element:<Auth/>
                  },
                  {
                     path:'/restaurants/:resId',
                     element:<RestaurantMenu/>
                  },
            ],
            errorElement:<Error/>,
},
   ]);

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={appRouter}/>)

   