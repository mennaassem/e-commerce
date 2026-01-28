 import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Components/Layout/Layout'
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/Signup';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Favourites from './Pages/Favourites/Favourites';
import Wishlist from './Pages/Wishlist/Wishlist';
import ForgetPassword from './Pages/Forgetpassword/ForgetPassword';
 
import ProductDetails from './Pages/ProductDetails/ProductDetails';
 
import Verifyemail from './Pages/Verifyemail/Verifyemail';
import Checkout from './Pages/Checkout/Checkout';
import Categories from './Pages/Categories/Categories';
import Searchproducts from './Pages/Searchproducts/Searchproducts';
import Brands from './Pages/Brands/Brands';
import Notefound from './Pages/Notefound/Notefound';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
 
 
 
 
 export default function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
         {
          index: true,
          element:<Home/>
        },
        {
          path:"login",
          element:<Login/>
        },
         {
          path:"signup",
          element:<Signup/>
        }, 
        {
          path:"orders",
          element:<Orders/>
        }, 
        {
          path:"cart",
          element:<Cart/>
        }, 
        {
          path:"favourites",
          element:<Favourites/>
        }, 
        {
          path:"wishlist",
          element:<Wishlist/>
        }, 
          {
          path:"forgetpassword",
          element:<ForgetPassword/>
        }, 
          {
          path:"verifyemail",
          element:<Verifyemail/>
        }, 
           {
          path:"productdetails/:id",
          element:<ProductDetails/>
        }, 
             {
          path:"checkout",
          element:<Checkout/>
        }, {
          path:"categories",
          element:<Categories/>
        }, {
          path:"searchproducts",
          element:<Searchproducts/>
        }, 
        {
          path:"brands",
          element:<Brands/>
        }, 
        {
          path:"*",
          element:<Notefound/>
        },

      ]

    }
  ])
   return (
     <>
     <RouterProvider router={router}/>
      <ToastContainer position='top-right' autoClose={3000} closeButton={false} closeOnClick={true} />
     </>
   )
 }
 
