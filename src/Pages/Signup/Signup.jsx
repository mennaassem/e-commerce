import { faLeaf, faShieldHalved, faStar, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import customerImage from "../../assets/images/review.png"
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_CONFIG } from '../../config/config';
import { sendDataToSignup } from '../../services/auth-servier';
import { checkPasswordStrenght } from '../../utils/validation';


export default function Signup() {
  const navgate= useNavigate()
  const [isExistError,setIsExistError]=useState(null)
  const regexEmail=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  const regexPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const regexPhone=/^01[0125][0-9]{8}$/

  const sechma=yup.object({
    name:yup.string().required("please enter your name").min(3,"Name must be at least 3 characters"),
    email:yup.string().required("Email is required").email("Invalid email address").matches(regexEmail),
     password:yup.string().required("Password is required").matches(regexPassword,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
     rePassword:yup.string().required("Please confirm your password").oneOf([yup.ref("password")], "Passwords must match"),
     phone:yup.string().required("Phone is required").matches(regexPhone,"Invalid Egyptian phone number"),
     terms:yup.boolean().oneOf([true],"Terms and conditions must be agreed to before proceeding.")

    


  })
 async function handleSignUp(values){
  try {
   
    const response = await sendDataToSignup(values)
  if(response.success){

    toast.success("Your Email is Created")
    setTimeout(()=>{
      navgate("/login")
    },1000)
  }
    
  } catch (error) {
    setIsExistError(error.message)
  }
  }
  const formik=useFormik({
    initialValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"",
    terms:false
},
validationSchema:sechma,
onSubmit:handleSignUp
  })
   function handleChange(e){
    setIsExistError("")
    formik.handleChange(e)
  }
  const passwordFeedBack=checkPasswordStrenght(formik.values.password)
  return (
     <>
    <div className='bg-gray-50  '>
        <div className="container  items-center justify-between gap-8 grid lg:grid-cols-2 ">
      {/* left-side */}
      <div className=' space-y-4'>
       <h1 className='text-2xl font-bold'>Welcome to <span className='text-primary-600'>Fresh<span className='text-black'>Cart</span></span></h1>
      <p className='text-sm text-gray-700'>
      Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
    </p>
    <div>
      <ul className='flex flex-col gap-4'>
        <li className='flex items-center gap-3'>
          <div className="icon bg-primary-300/60 flex items-center justify-center size-10 rounded-full">
            <FontAwesomeIcon className='text-primary-600' icon={faLeaf} />
          </div>
         <div className="text">
          <h4 className='font-black text-sm'>Fresh & Organic</h4>
           <p className='text-sm text-gray-700'>Premium quality products sourced directly from farms</p>
         </div>
        </li>
         <li className='flex items-center gap-3'>
          <div  className="icon bg-primary-300/60 flex items-center justify-center size-10 rounded-full">
           <FontAwesomeIcon className='text-primary-600' icon={faTruck} />
          </div>
         <div className="text">
             <h4 className='font-black text-sm'>Fast Delivery</h4>
          <p  className='text-sm text-gray-700'>Same-day delivery available in most areas</p>
         </div>
        </li>
         <li className='flex items-center gap-3'>
          <div  className="icon bg-primary-300/60 flex items-center justify-center size-10 rounded-full">
        <FontAwesomeIcon className='text-primary-600' icon={faShieldHalved} />
          </div>
         <div className="text">
              <h4 className='font-black text-sm'>Secure Shopping</h4>
          <p  className='text-sm text-gray-700'>Your data and payments are completely secure</p>
         </div>
        </li>
      </ul>
   
    </div>
      <div className="review border border-primary-400/40 p-5 rounded shadow bg-white">
     <div className='image&className flex items-center gap-3 mb-3'>
       <img className='size-10' src={customerImage} alt='customer image'/>
      <div className="name">
          <h4>Sarah Johnson</h4>
        <span className='text-amber-300 text-sm'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />

        </span>
      </div>
     </div>
      <blockquote  className='text-sm text-gray-700 bg-white'>
          “FreshCart has completely changed how I shop for groceries.
          The quality is amazing and delivery is always on time!”
        </blockquote>

    </div>
      </div>
      {/* right-side */}
      <div className=' p-6 rounded-lg shadow-xl space-y-4 bg-white'>
        <div className='header space-y-8'>
          <div className="title-form space-y-2">
          <h2 className='font-bold text-3xl text-center'>Start Your Account</h2>
          <p className='text-sm text-black/70 text-center'>Start your fresh journey with us today</p>
        </div>
         <div className="button flex items-center gap-2">
          <button className='btn w-full bg-transparent border border-gray-300 flex items-center gap-2 justify-center hover:bg-gray-200'>
            <FontAwesomeIcon className='text-red-600' icon={faGoogle} />
            <h4>Google</h4>
          </button>
           <button className='btn w-full bg-transparent border border-gray-300 flex items-center gap-2 justify-center hover:bg-gray-200'>
           <FontAwesomeIcon className='text-blue-600' icon={faFacebook} />
            <h4>Facebook</h4>
          </button>
        </div>
         <div className="relative w-full text-center my-4 ">
  <span className="block w-full h-px bg-gray-200"></span>
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-white px-2 text-gray-400 text-sm">
    OR
  </span>
         </div>   
        </div>       
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
           <div className="name flex flex-col gap-1">
            <label>Name</label>
          <input className='form-control' type='text' placeholder='Pleace Enter Your Name' value={formik.values.name} name='name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.name && formik.errors.name && (
                <span className="text-red-500 text-sm">{formik.errors.name}</span>
              )}
           </div>
              <div className="email flex flex-col gap-1">
            <label>Email</label>
          <input className='form-control' type='email' placeholder='Pleace Enter Your Email'value={formik.values.email} name='email' onChange={handleChange} onBlur={formik.handleBlur}/>
           {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-sm">{formik.errors.email}</span>
              )}
              {isExistError && <p className='text-red-600'>{isExistError}</p>}
           </div>
              <div className="phone flex flex-col gap-1">
            <label>Phone</label>
          <input className='form-control' type='tel' placeholder='Pleace Enter Your Phone' value={formik.values.phone} name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.phone && formik.errors.phone && (
                <span className="text-red-500 text-sm">{formik.errors.phone}</span>
              )}
           </div>
            <div className="password flex flex-col gap-1">
            <label>Password</label>
          <input className='form-control'  type='password' placeholder='Pleace Enter Your password' value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.values.password && <div className="password-strenght flex items-center gap-2 ">
                <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-200">
                  <div className={`progress w-1/4 ${passwordFeedBack.background} ${passwordFeedBack.width} h-full`}></div>
                </div>
                <span className='text-nowrap w-28 text-center'>{passwordFeedBack.text}</span>
              </div>}
             {formik.touched.password && formik.errors.password ? (
  <span className="text-red-500 text-sm">{formik.errors.password}</span>
) : (
  <p className='text-red-600'>Must be at least 8 characters with number and symbols</p>
)}

              
           </div>
            <div className="re-password flex flex-col gap-1">
            <label>Confirm Password</label>
          <input className='form-control' type='password' placeholder='confirm your password' value={formik.values.rePassword} name='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
             {formik.touched.rePassword && formik.errors.rePassword && (
                <span className="text-red-500 text-sm">{formik.errors.rePassword}</span>
              )}
               
           </div>
           <div className="check flex flex-col gap-2 text-sm text-black space-y-2">
    

    <label className='flex items-center'>
      <input type="checkbox" className='me-1 accent-primary-600' value={formik.values.terms} name='terms' onChange={formik.handleChange} onBlur={formik.handleBlur} />
     <span className='text-sm text-gray-700'>I agree to the <a href="#">Terms of Service</a>and<a href="#">Privacy Policy</a></span>
    </label>
     {formik.touched.terms && formik.errors.terms && (
                <span className="text-red-500 text-sm">{formik.errors.terms}</span>
              )}
           </div>
           <button type="submit" className='btn bg-primary-600 text-white flex gap-2 items-center w-full justify-center'>
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Create My Account</span>
           </button>
        </form>
         <div className="footer-text mx-auto  w-fit ">
      Already have an account? <Link className='text-primary-600'  to={`/login`}>Login</Link>
    </div>
      </div>
     </div>
    </div>
     
     
     
     
     
     
     
     
     </>
  )
}
