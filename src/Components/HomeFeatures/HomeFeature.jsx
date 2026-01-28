// import { faClockRotateLeft, faHeadset, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 

// export default function HomeFeatures() {
//   return (
//      <>
//  <div className="my-10">
//  <div className="container">
//  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//  <div className="flex items-center gap-3 border border-gray-100 py-3 px-5 rounded-lg">
//     <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
//             <FontAwesomeIcon icon={faTruckFast} />
//             </div>
//              <div className="content">
//              <h2 className='font-semibold'>Free Delivery</h2>
//               <p className='text-gray-600/80 text-sm'>Orders $50 or more</p>
//              </div>
//       </div>
//        <div className="flex items-center gap-3 border border-gray-100 py-3 px-5 rounded-lg">
//     <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
//            <FontAwesomeIcon icon={faClockRotateLeft} />
//             </div>
//              <div className="content">
//              <h2 className='font-semibold'>30 Days Return</h2>
//               <p className='text-gray-600/80 text-sm'>Satisfaction guaranteed</p>
//              </div>
//       </div>
//        <div className="flex items-center gap-3 border border-gray-100 py-3 px-5 rounded-lg">
//     <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
//           <FontAwesomeIcon icon={faShieldHalved} />
//             </div>
//              <div className="content">
//              <h2 className='font-semibold'>Secure Payment</h2>
//               <p className='text-gray-600/80 text-sm'>100% protected checkout</p>
//              </div>
//       </div>
//        <div className="flex items-center gap-3 border border-gray-100 py-3 px-5 rounded-lg">
//     <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
//             <FontAwesomeIcon icon={faHeadset} />
//             </div>
//              <div className="content">
//              <h2 className='font-semibold'>24/7 Support</h2>
//               <p className='text-gray-600/80 text-sm'>Ready to help anytime</p>
//              </div>
//       </div>
//             </div>
//         </div>
//      </div>



//      </>
//   )
// }
import { faClockRotateLeft, faHeadset, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeature() {
  return (
    <>
  <div className="my-10">
 <div className="container">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 <div className="flex items-center gap-3 border border-gray-300 py-3 px-5 rounded-lg">
    <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
            <FontAwesomeIcon icon={faTruckFast} />
            </div>
             <div className="content">
             <h2 className='font-semibold'>Free Delivery</h2>
              <p className='text-gray-600/80 text-sm'>Orders $50 or more</p>
             </div>
      </div>
       <div className="flex items-center gap-3 border border-gray-300 py-3 px-5 rounded-lg">
    <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
           <FontAwesomeIcon icon={faClockRotateLeft} />
            </div>
             <div className="content">
             <h2 className='font-semibold'>30 Days Return</h2>
              <p className='text-gray-600/80 text-sm'>Satisfaction guaranteed</p>
             </div>
      </div>
       <div className="flex items-center gap-3 border border-gray-300 py-3 px-5 rounded-lg">
    <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
          <FontAwesomeIcon icon={faShieldHalved} />
            </div>
             <div className="content">
             <h2 className='font-semibold'>Secure Payment</h2>
              <p className='text-gray-600/80 text-sm'>100% protected checkout</p>
             </div>
      </div>
       <div className="flex items-center gap-3 border border-gray-300 py-3 px-5 rounded-lg">
    <div className="icon size-10 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-600 ">
            <FontAwesomeIcon icon={faHeadset} />
            </div>
             <div className="content">
             <h2 className='font-semibold'>24/7 Support</h2>
              <p className='text-gray-600/80 text-sm'>Ready to help anytime</p>
             </div>
      </div>
            </div>
        </div>
     </div>
    </>
  )
}
