import React from 'react'
import { Link } from 'react-router'
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Verifyemail() {
  return (
    <>
    <div>
      <div className="container">
          <div className='bg-gray-50  '>
      <div className="container p-20">
         <div className=" bg-white w-fit p-5 mx-auto border border-white rounded-xl shadow space-y-5">
          <div className='  flex items-center justify-center size-20 mx-auto bg-primary-200 rounded-full'>
            <FontAwesomeIcon className='text-4xl text-primary-600' icon={faCertificate} />
          </div>
          <h1 className='font-bold text-2xl text-center'>Verify Reset Email</h1>
          <p className='text-sm text-gray-600 text-center'>we’have sent a verification code to your email address</p>
          <form  >
            <span className='text-sm text-gray-600'>Enter Your Code</span>
            <input className='form-control w-full' type='text' placeholder="|"/>
            <button  type="submit"className=' mt-5 btn bg-primary-600 text-white w-full'>Verify Code</button>
          </form>
 
          <p className='text-center'> Don't receive the code? <Link className='text-primary-600'>Resend Code</Link></p>
          

         </div>
      </div>
     </div>


      </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}
