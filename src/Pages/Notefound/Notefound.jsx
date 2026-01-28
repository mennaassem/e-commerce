 import { Link } from "react-router"
import imgError from "../../assets/images/undraw_feeling-blue_8si6.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAppleWhole, faBreadSlice, faComment, faDrumstickBite, faEgg, faEnvelope, faHouse, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons"
import SubscribeForm from "../../Components/SubscribeForm/SubscribeForm"

export default function Notefound() {
  return (
    <>
     <section>
      <div className="flex flex-col items-center justify-center mt-8 space-y-10 px-4">
         <div>
        <img src={ imgError}  className="w-full max-w-md h-96 object-cover" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-black text-center">Opps! Page Note Found</h1>
      <p className="text-center text-base md:text-xl text-gray-700"> The page you're looking for seems to have gone shopping!<br />
        Don't worry, our fresh products are still available for you.</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
           <Link  to={`/`}>
           <button className="btn bg-primary-600/90 text-white px-4 py-2 rounded w-full md:w-auto">
            
            
           
               <span>
              <FontAwesomeIcon  className="me-2"icon={faHouse} />
            </span>
            Back To Home
            

            
            </button>
             </Link>
      
               <Link to="/search-products">
          <button className="btn bg-transparent border border-primary-600/50 text-primary-600 px-4 py-2 rounded w-full md:w-auto">
             
              <span>
             <FontAwesomeIcon className="me-2" icon={faMagnifyingGlass} />
            </span>
            Search Products 
          </button>
          </Link>
          </div>
          
          <h2 className="text-xl font-bold text-black text-center">Or explore our popular categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center rounded-xl shadow-xl bg-white p-6 text-center">
              <span className="size-12 flex items-center justify-center bg-primary-300/30 rounded-full mb-2">
                <FontAwesomeIcon  className="text-xl text-primary-600" icon={faAppleWhole} />
              </span>
              <h3 className="text-black text-sm">Fruits & Vegetable</h3>
            </div>
              <div className="flex flex-col items-center justify-center rounded-xl shadow-xl bg-white p-6 text-center">
              <span className="size-12 flex items-center justify-center bg-primary-300/30 rounded-full mb-2">
             <FontAwesomeIcon className="text-xl text-primary-600" icon={faEgg} />
              </span>
              <h3 className="text-black text-sm">Dairy & Eggs</h3>
            </div>
              <div className="flex flex-col items-center justify-center rounded-xl shadow-xl bg-white p-6 text-center">
              <span className="size-12 flex items-center justify-center bg-primary-300/30 rounded-full mb-2">
               <FontAwesomeIcon className="text-xl text-primary-600" icon={faBreadSlice} />
              </span>
              <h3 className="text-black text-sm">Bakery & Snacks</h3>
            </div>
              <div className="flex flex-col items-center justify-center rounded-xl shadow-xl bg-white p-6 text-center">
              <span className="size-12 flex items-center justify-center bg-primary-300/30 rounded-full mb-2">
               <FontAwesomeIcon className="text-xl text-primary-600" icon={faDrumstickBite} />
              </span>
              <h3 className="text-black text-sm">Meat & Seafood</h3>
            </div>
          </div>
          <div className="text-center border border-primary-300/30 p-6 md:p-12 space-y-4 bg-primary-300/20 rounded w-full max-w-4xl">
            <h3 className="text-black font-bold text-xl">Need Help?</h3>
            <p> Our customer support team is here to assist you 24/7</p>
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <li className="flex items-center gap-2">
                <span><FontAwesomeIcon className="text-primary-600" icon={faPhone} /></span>
                <span> +1 (800) 123-4567</span>
              </li>
                <li className="flex items-center gap-2">
                <span><FontAwesomeIcon className="text-primary-600" icon={faEnvelope} /></span>
                <span>support@freshcart.com </span>
              </li>
                <li className="flex items-center gap-2">
                <span><FontAwesomeIcon className="text-primary-600" icon={faComment} /></span>
                <span> Live Chat</span>
              </li>
            </ul>
          </div>
          <SubscribeForm/>
        </div>

      
    </section>
    
    
    
    
    
    </>
  )
}
