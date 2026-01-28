import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from '../../services/product-servier';
import Loading from './../Loading/Loading';
import HomeDealsSkeleto from '../Skeleton/HomeDealsSkeleto';

export default function HomeDeals() {
  const [products , setProducts]=useState([])
  const [loading,setLoading]=useState(true)


   async function fetchDealsofTheDay(){
    try {
      const response= await getAllProducts()
      // console.log(response)
      if(response.success){
        setLoading(false)
        setProducts(response.data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
  }

  useEffect(()=>{
    fetchDealsofTheDay()
  },[])
  if(loading)
  {
    return <HomeDealsSkeleto/>
  }
  const deals=products.filter((product)=> product.priceAfterDiscount).slice(0,10)
  return (
    <>
    <section className='py-5'>
        <div className="container">
              <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-3">Deals of the Days</h2>
                    <div className="flex  gap-2 items-center">
                        <p>Offers ends in:</p>
                        <div className="counter flex  gap-2 items-center">
                            <div className="size-7 rounded-md  flex items-center justify-center bg-gray-900 text-white text-sm">2</div>
                            <span>:</span>
                               <div className="size-7 rounded-md flex items-center justify-center bg-gray-900 text-white text-sm">7 </div>
                            <span>:</span>
                              <div className="size-7 rounded-md flex items-center justify-center bg-gray-900 text-white text-sm">8 </div>
                            <span>:</span>
                            
                        </div>
                    </div>

                </div>
                <Link className="text-primary-600 hover:text-primary-700 transition duration-200" to={`/deals`}>View All Deals</Link>

            </div>
            <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {deals.map((product)=>(<ProductCard key={product.id} productInfo={product}/>))}
                 {/* {products.map((product)=>(<ProductCard key={product.id} productInfo={product}/>))} */}
            </div>
        </div>







    </section>
    

    
    
    
    
    
    
    
    </>
  )
}
