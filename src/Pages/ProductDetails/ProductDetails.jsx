import React, { useEffect, useState } from 'react'
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import { getSpecificProduct } from '../../services/product-servier'
import { useParams } from 'react-router'
import ProductDetailsTab from '../../Components/ProductDetailsTab/ProductDetailsTab'

export default function ProductDetails() {
  const {id}=useParams()
  const[productInfo,setProductInfo]=useState(null)
  const[loaading,setIsLoading]=useState(true)

   async function fetchDataToGetSpecificProduct(){
    try {
      setIsLoading(true)
      const response=await getSpecificProduct({id})
      console.log(response)
      if(response.success){
         
        setProductInfo(response.data.data)
      }
      
    } catch (error) {
      setIsLoading(true)
      console.log(error)
      
    }
  }
    useEffect(()=>{
      fetchDataToGetSpecificProduct()
    },[])
  return (
    <>
  <div className='bg-gray-100'>
       <ProductInfo product={productInfo}/>
  {<ProductDetailsTab product={productInfo} />}
  </div>
    
    
    
    
    
    
    </>
  )
}
