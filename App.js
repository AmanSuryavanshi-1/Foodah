import React, { Suspense, lazy } from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Body from './src/pages/Body'
import Navbar from "./src/components/Navbar"
import RestaurantMenu from './src/pages/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './src/pages/About'
import Contact from './src/pages/Contact'
import Cart from './src/pages/Cart'
import Auth from './src/pages/Auth'
import Error from './src/pages/Error'
import Footer from './src/components/Footer'
import ScrollToTop from './src/components/ScrollToTop'

// import Wishlist from './src/components/NavComponents/Wishlist'

const WL_recommendations = lazy(()=> import("./src/pages/Wishlist"));

   const AppLayout = () => {
    return (
    <div className='min-h-screen bg-primary-bgColor'>
      <ScrollToTop/>
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

   