import React from 'react'
import cover from '../../assets/images/cover.jpeg'
import {faCodeCompare, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import { calcDisCount } from '../../utils/discount'
import Rating from '../Rating/Rating'

export default function ProductCard({productInfo}) {
  const {imageCover,price,ratingsAverage,category,title,ratingsQuantity,priceAfterDiscount}=productInfo
    return (
    <>
    <section>
        <div className="card   bg-white relative rounded-xl shadow-lg overflow-hidden border border-primary-600/20 ">
        <div className="relative">
            <img src={imageCover} className="w-44 h-52 object-contain  mx-auto"/>
        </div>
        <div className="content  p-4 space-y-1.5">
            <span className='text-sm  text-gray-500'>{category.name}</span>
            <h2 className='font-semibold line-clamp-1'>{title}</h2>
            <div className="rating flex gap-2 items-center">
              <Rating rating={ratingsAverage}/>
                <span>({ratingsAverage})</span>
                 <span>{ratingsQuantity}</span>
                 
            </div>
             
            <div className="flex justify-between items-center">
                 <div className='price space-x-2'>
                    <span className="text-lg text-primary-600 font-bold">{price}$</span>
                    <del className='text-gray-500'>{priceAfterDiscount}$</del>
                 </div>
                 <button className="btn hover:bg-primary-700 transition-colors duration-200 bg-primary-600 text-white rounded-full p-0 size-8">
                    <FontAwesomeIcon icon={faPlus} />
                 </button>
            </div>
                <div className="  text-xl py-2 px-2 rounded-full actions absolute top-4 right-1 flex flex-col gap-4 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
                            <button  >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button>
                              <FontAwesomeIcon icon={faCodeCompare} />
                            </button>
                            <button>
                                <Link to={`/product`}>
                                 <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </button>
                </div>
                 <span className="badges text-sm badges absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md">-{calcDisCount(price,priceAfterDiscount)}%</span>
        </div>
        </div>

    </section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
