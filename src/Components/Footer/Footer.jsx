import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../assets/images/freshcart-logo.svg"
import logoFooter from "../../assets/images/mini-logo.png"
import { faFacebook, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router";

export default function Footer() {
  return (
    <>

    
    <footer className="py-5 bg-white border-t border-gray-400/20">
   <div className="container">
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 py-8">
      {/*  Logo and Description */}
      <div className="xl:col-span-2 space-y-3">
         <img  src={logo} alt="FreshCartLogo"/>
         <p>FreshCart is your one-stop destination for fresh groceries, organic produce, and household essentials delivered right to your doorstep.</p>
         <ul className="flex items-center gap-4 *:text-gray-500  *:hover:text-primary-600 *:transition-colors *:duration-200 text-lg">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPinterestP} />
          </li>
         </ul>
      </div>
      {/* Categories */}
      <div>
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul  className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
         <li>
            < Link>Men is Fashion</ Link>
         </li>
           <li>
            < Link>Women is Fashion</ Link>
           </li>
           <li>
            < Link> Baby & toys</ Link>
           </li>
          <li>
             < Link>Beauty & Health</ Link>
          </li>
           <li>
            < Link>Electronics</ Link>
           </li>
        </ul>
      </div>
      {/* Quick Links */}
       <div>
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
           <li>
            < Link>About Us</ Link>
           </li>
          <li>
             < Link>Contact Us</ Link>
          </li>
          <li>
             < Link>Privacy PoliLinkcy</ Link>
          </li>
         <li>
            < Link>Terms of Service</ Link>
         </li>
          <li>
             < Link>Shipping PoliLinkcy</ Link>
          </li>
        </ul>
      </div>
      {/* Customer Service */}
        <div>
        <h2 className="text-xl font-bold mb-4">Customer Service</h2>
        <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
           <li>
            < Link>My Account</ Link>
           </li>
           <li>
            < Link>Order History</ Link>
           </li>
           <li>
            < Link>Wishlist Linkst</ Link>
           </li>
         <li>
            < Link>Returns & Refund</ Link>
         </li>
         <li>
            < Link>Help Center</ Link>
         </li>
        </ul>
      </div>




    </div>
    {/* Bottom Line */}
    <div className="flex justify-between py-3 border-t border-gray-400/20">
    <p>© 2023 FreshCart. All rights reserved.</p>
    <img src={logoFooter} className="w-6"/>
    </div>
   </div>
    </footer>
    
    
    
    
    
    </>
  )
}
