 
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../services/categore-service';
import Loading from '../Loading/Loading';
import CategoriesSkeleton from '../Skeleton/CategoriesSkeleton';

export default function HomeCategories() {
    const [categories,setCategories]=useState([])
    const[isLoading,setIsLoading]=useState(true)



     async function fetchCategories(){
        try {
            const response = await getAllCategories()
            if(response.success){
                setIsLoading(false)
                setCategories(response.data.data)
            }
            
            
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            
        }
    }
    useEffect(()=>{
        fetchCategories()
    },[])
    if(isLoading){
        return <CategoriesSkeleton/>
    }
  return (
  <>
  
      <section className='bg-gray-100 py-5'>
        <div className="container">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-black">Shop by Category</h2>
                <Link className=" flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200" to={`/categories`}>
                <span>View All Categories</span>
                <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
            <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {
                  categories ?.map((category)=>(
                     <Link to={`/category/${category._id}`} key={category._id} className="card bg-white  cursor-pointer flex flex-col gap-2 items-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200  p-4">
                    <img src={category.image} className="size-16 rounded-full object-cover"/>
                    <h3> {category.name}</h3>
                </Link>
                  ))
                }

            </div>
        </div>

     </section>
  
  
  
  
  
  
  
  
  </>
  )
}
