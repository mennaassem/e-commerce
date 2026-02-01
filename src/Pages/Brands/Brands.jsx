import React, { useEffect, useState } from 'react'
 
import Loading from '../../Components/Loading/Loading'
import BrandsCard from './../../Components/BrandsCard/BrandsCard';
import { getAllBrands } from '../../services/brands-servier';

export default function Brands() {
  const[brands,setIsBrands]=useState([])
      const[loading, setIsLoading]=useState(true)
  
  
  
  
      async function fetchBrands(){
          try {
              const response= await getAllBrands()
              if(response.success){
              setIsLoading(false)
              setIsBrands(response.data.data)
              }
              
          } catch (error) {
              setIsLoading(true)
              console.log(error)
              
          }
      }
      useEffect(()=>{
       fetchBrands()
       },[])
       if(loading){
          return <Loading/>
       }
  return (
    <>
    <div className='py-5'>
       <h2 className="text-3xl  font-bold mb-3 text-center bg-gray-100 p-3">All Brands</h2>
       <div className="container">
      
      <div className='py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
       {brands.map((brand) => (
  <BrandsCard key={brand.id} brandInfo={brand} />
))}

      </div>
    </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}
