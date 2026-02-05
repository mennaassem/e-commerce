import { faCartShopping, faClockRotateLeft, faTrash, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Loading from './../Loading/Loading';
import Rating from '../Rating/Rating';
import { calcDisCount } from './../../utils/discount';
import ImageGallery from "react-image-gallery"
 

export default function ProductInfo({ product }) {
  if (!product) return <Loading/>
  // console.log(product)
  
  const{images
,
description
,
price,
priceAfterDiscount
,
quantity
,
ratingsAverage
,ratingsQuantity,
title

}=product 
 
  return (
    <>
    <nav className="p-2 text-sm font-semibold text-gray-500 mb-4 bg-white">
 <div className="container">
    <ol className="flex items-center space-x-2">
    <li>
      <a href="/" className="hover:text-primary-600">
        Home
      </a>
    </li>

    <li>/</li>

    <li>
      <a href="/fruits-vegetables" className="hover:text-primary-600">
       product-details
      </a>
    </li>

     
  </ol>
 </div>
</nav>

     
   
     <div>
         
        <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
      
           {/* image-details */}
     <div className="image-gallery-wrapper">
  <ImageGallery
    showNav={false}
    showPlayButton={false}
    showFullscreenButton={false}
    items={images.map((image) => ({
      original: image,
      thumbnail: image
    }))}
  />
</div>
        {/* <!-- Details --> */}
        <div>
         {Number(quantity) > 0 ? (
  <span className="text-green-600 bg-primary-100 font-semibold text-sm p-1 rounded">
    In Stock
  </span>
) : (
  <span className="text-red-600 bg-red-100 font-semibold text-sm p-1 rounded">
    Out of Stock
  </span>
)}


          <h1  className="text-xl font-bold mt-2"> {title}</h1>

          {/* <!-- Rating --> */}
          <div  className="flex items-center gap-2 mt-2">
            <Rating rating={ratingsAverage}/>
             <span>({ratingsAverage})</span>
                 <span>{ratingsQuantity}</span>
          </div>

          {/* <!-- Price --> */}
         {priceAfterDiscount ? (
  <div className="flex items-center gap-3 mt-4">
      <span className="text-2xl font-bold">{priceAfterDiscount}$</span> 
    <span className="line-through text-gray-400 text-xl">{price}$</span> 
   
    <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">
      {calcDisCount(price, priceAfterDiscount)}%
    </span>
  </div>
) : (
  <span className="text-2xl font-bold">{price}$</span>  
)}


          {/* <!-- Description --> */}
          <p  className="text-gray-600 mt-4">
           {description}
          </p>

          

          {/* <!-- Quantity --> */}
          <div  className="flex items-center gap-4 mt-6">
            <div  className="flex items-center border rounded-lg">
              <button  className="px-4 py-2 text-lg">−</button>
              <span  className="px-4">1</span>
              <button  className="px-4 py-2 text-lg">+</button>
            </div>
            <span  className="text-sm text-gray-500">Only {quantity} items left in stock</span>
          </div>

          {/* <!-- Buttons --> */}
          <div  className="flex items-center justify-between gap-4 mt-6">
            <button  className="flex items-center justify-center gap-1 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
              <FontAwesomeIcon icon={faCartShopping} />
              <span> Add to Cart</span>
              </button>
            <button  className="flex items-center justify-center gap-1 w-full border py-3 rounded-lg font-semibold"> 
              <FontAwesomeIcon icon={faTrash} />
              <span>Buy Now</span>
            </button>
          </div>

          {/* <!-- Info --> */}
          <div  className="flex justify-between mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-3   py-3 px-5 rounded-lg">
    <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
            <FontAwesomeIcon icon={faTruckFast} />
            </div>
             <div className="content">
             <h2 className='font-semibold'>Free Delivery</h2>
              <p className='text-gray-600/80 text-sm'>Orders $50 or more</p>
             </div>
      </div>
             <div className="flex items-center gap-3   py-3 px-5 rounded-lg">
    <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
           <FontAwesomeIcon icon={faClockRotateLeft} />
            </div>
             <div className="content">
             <h2 className='font-semibold'>30 Days Return</h2>
              <p className='text-gray-600/80 text-sm'>Satisfaction guaranteed</p>
             </div>
      </div>
          </div>

        </div>
      </div>
      </div>
     </div>

    
    
    
    
    
    
    
    </>
  )
}
