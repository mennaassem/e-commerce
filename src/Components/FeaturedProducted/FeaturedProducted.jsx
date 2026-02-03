import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import { getAllProducts } from '../../services/product-servier'
 
 
 

export default function FeaturedProducted() {
    const[featuredProduct,setIsFeaturedProducted]=useState([])
    const[loading, setIsLoading]=useState(true)




    async function fetchFeaturedProducted(){
        try {
            const response= await getAllProducts()
            if(response.success){
            setIsLoading(false)
            setIsFeaturedProducted(response.data.data)
            }
            
        } catch (error) {
            setIsLoading(true)
            console.log(error)
            
        }
    }
    useEffect(()=>{
       fetchFeaturedProducted()
     },[])
     if(loading){
        return <Loading/>
     }

  return (
    <>
   <div className='bg-gray-100 py-5'>
      <div className="container">
        <h2 className="font-bold text-black">Featured Producted</h2>
        <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
           {featuredProduct.map((product) => (
   <ProductCard key={product.id} productInfo={product} />
))}
             
        </div>
    </div>
   </div>
    
    
    
    
    
    </>
  )
}
