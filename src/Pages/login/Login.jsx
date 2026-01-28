import React from 'react'
import loginImage from "../../assets/images/login.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLocationPinLock, faLock, faLockOpen, faRoadLock, faStarAndCrescent, faStarHalf, faStarHalfAlt, faTruckArrowRight, faUserPlus, faUsers, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { API_CONFIG } from '../../config/config';
import { sendDataToLogin } from '../../services/auth-servier';
 
 

export default function Login() {
  const navgate= useNavigate()
   const [isExistError,setIsExistError]=useState(null)
   const [isShownPassword,setIsShownPassword]=useState(false)
  const regexEmail=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
   const regexPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
   const sechma=yup.object({
    
    email:yup.string().required("Email is required").email("Invalid email address").matches(regexEmail),
     password:yup.string().required("Password is required").matches(regexPassword,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
     rememberme:yup.boolean().oneOf([true],"You must check 'Remember me' before proceeding.")

    


  })
const formik=useFormik({
  initialValues:{
     email:"",
    password:"",
    rememberme:false
  },
validationSchema:sechma,
onSubmit:handleLogin
  
})
  
   async function handleLogin(values){
     try {
  
   const response= await sendDataToLogin(values)
  if(response.success){
    toast.success("You have successfully logged in, redirecting to the home page...")
    setTimeout(()=>{
      navgate("/")
    },1000)
  }
    
  } catch (error) {
  setIsExistError(error.message)
  }

  }
  function handleChange(e){
    setIsExistError("")
    formik.handleChange(e)
  }
  function toggleIsShownPassword(){
    setIsShownPassword(!isShownPassword)
  }
  return (
    <>
    <div className='bg-gray-50  '>
      <div className="container grid lg:grid-cols-2 gap-2">
        {/* left-side */}
        <div className="left text-center space-y-4 p-20">
          <img className='w-96 rounded-2xl shadow-lg mx-auto' src={loginImage} alt=' Fresh Groceries Delivered'/>
          <h1 className='font-bold text-2xl'> Fresh Groceries Delivered</h1>
          <p className='text-gray-600'>   Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
          <ul className='flex items-center justify-center gap-4  *:flex *:items-center *:gap-2'>
            <li>
               <FontAwesomeIcon className='text-primary-600' icon={faTruckArrowRight} />
                <span className='text-gray-600'>Free Delivery</span>
            </li>
              <li>
               <FontAwesomeIcon className='text-primary-600' icon={faCircleQuestion} />
                   <span className='text-gray-600'>Secure Payment</span>
            </li>
                <li>
               <FontAwesomeIcon className='text-primary-600' icon={faClock} />
                  <span className='text-gray-600'>24/7 Support</span>
            </li>
          </ul>
        </div>
        {/* Right-side */}
        <div className="right p-6 rounded-lg shadow-xl space-y-4 bg-white">
           <div className='header space-y-8'>
                    <div className="title-form space-y-2">
                    <h2 className='font-bold text-3xl text-center'>Welcome Back!</h2>
                    <p className='text-sm text-black/70 text-center'>Login to containe your fresh shopping experience</p>
                  </div>
                   <div className="button flex  flex-col items-center gap-2">
                    <button className='btn w-full   bg-transparent border border-gray-300 flex items-center gap-2 justify-center hover:bg-gray-200'>
                      <FontAwesomeIcon className='text-red-600' icon={faGoogle} />
                      <h4>Google</h4>
                    </button>
                     <button className='btn  w-full  bg-transparent border border-gray-300 flex items-center gap-2 justify-center hover:bg-gray-200'>
                     <FontAwesomeIcon className='text-blue-600' icon={faFacebook} />
                      <h4>Facebook</h4>
                    </button>
                  </div>
                   <div className="relative  w-full text-center my-4 ">
            <span className="block w-full h-px bg-gray-200"></span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-white px-2 text-gray-400 text-sm">
              OR
            </span>
                   </div>   
                  </div> 
            <form className='space-y-4' onSubmit={formik.handleSubmit}>
                    
                        <div className="email flex flex-col gap-1">
                      <label>Email</label>
                    <input className='form-control w-full ' type='email' name='email' placeholder='Pleace Enter Your Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                     {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-sm">{formik.errors.email}</span>
              )}
                     
                     </div>
                     
                      <div className="password flex flex-col gap-1 relative">
                      <label>Password</label>
                   <div className='relative'>
                      <input className='form-control  w-full '  type={isShownPassword ? "text" : "password"} placeholder='Pleace Enter Your password' name='password' value={formik.values.password} onChange={handleChange} onBlur={formik.handleBlur}/>
                       <button onClick={toggleIsShownPassword} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-800'>
                        {isShownPassword ? <FontAwesomeIcon icon={faEyeSlash} /> :<FontAwesomeIcon icon={faEye} />}
                       </button>
                   </div>
                    <Link to={`/forgetpassword`} className='text-primary-600 absolute right-0'>ForgetPassword?</Link>
                     {formik.touched.password && formik.errors.password && (
                <span className="text-red-500 text-sm">{formik.errors.password}</span>
              )}
                     {isExistError && <p className='text-red-600'>{isExistError}</p>}  
                     </div>
                       <div className="check flex flex-col gap-2 text-sm text-black space-y-2">
    

    <label className='flex items-center'>
     
     <div className='flex flex-col'>
      <div>
            <input type="checkbox" className='me-1 accent-primary-600' name='rememberme' value={formik.values.rememberme} onChange={formik.handleChange} onBlur={formik.handleBlur} />
     <span className='text-sm text-gray-700'> Keep me login</span>
      </div>
        {formik.touched.rememberme && formik.errors.rememberme && (
                <span className="text-red-500 text-sm">{formik.errors.rememberme}</span>
              )}
     </div>
    </label>
    
           </div>
                    
                     
                     <button type="submit" className='btn  w-full  bg-primary-600 text-white flex gap-2 items-center  justify-center'>
                      <span>Login</span>
                     </button>
                  </form>
                      <div className="footer-text mx-auto  w-fit ">
      Already have an account? <Link className='text-primary-600'  to={`/signup`}>Create an account</Link>
    </div>
    <ul className='flex items-center justify-center gap-4 text-gray-500  *:flex *:items-center *:gap-2'>
      <li>
        <FontAwesomeIcon icon={faLock} />
        <span>SSl Securd</span>
      </li>
       <li>
   <FontAwesomeIcon icon={faUsers} />
        <span>50K+ User</span>
      </li>
        <li>
 <FontAwesomeIcon icon={faStarHalfAlt} />
        <span>4.9 Rating</span>
      </li>
    </ul>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}
