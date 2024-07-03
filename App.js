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
import Footer from './src/components/Footer'

// import Wishlist from './src/components/NavComponents/Wishlist'

const WL_recommendations = lazy(()=> import("./src/components/NavComponents/Wishlist"));

   const AppLayout = () => {
    return (
    <div className='min-h-screen bg-primary-bgColor'>
        <Navbar/>
        <Outlet />
        <Footer/>
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
                     element:<Suspense fallback={<h1  className='m-10 text-2xl font-semibold text-primary-light'>Resources are getting ready</h1>}> <WL_recommendations /> </Suspense> ,
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

   