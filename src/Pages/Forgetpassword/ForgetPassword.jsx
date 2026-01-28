import React from 'react'
import forgetPassword from "../../assets/images/forgot.png"
import { Link, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { API_CONFIG } from '../../config/config';
import { sendDataToForgetPassword } from '../../services/auth-servier';


export default function ForgetPassword() {
   const [isExistError,setIsExistError]=useState(null)
  const navgate= useNavigate()
   const regexEmail=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
   const sechma=yup.object({
      
      email:yup.string().required("Email is required").email("Invalid email address").matches(regexEmail),
  
    })
const formik =useFormik({
   initialValues:{
     email:"",
  
  },
validationSchema:sechma,
onSubmit:handleForgetPassword
  
})
   async function handleForgetPassword(values){
     try {
  
  const response= await sendDataToForgetPassword(values)
 
  if(response.statusMsg === "success"){
    toast.success("Reset code sent to your email!")
    setTimeout(()=>{
      navgate("/verifyemail")
    },1000)
  }
    
  } catch (error) {
    setIsExistError(error.response.data.message)
  
  
  }

  }
  return (
     <>
     <div className='bg-gray-50  '>
      <div className="container p-20">
         <div className=" bg-white w-fit p-5 mx-auto border border-white rounded-xl shadow space-y-5">
          <img className='size-40 mx-auto shadow border border-primary-200 rounded-full' src={forgetPassword}/>
          <h1 className='font-bold text-2xl text-center'>Forgot your password?</h1>
          <p className='text-sm text-gray-600'> Enter your email address and we’ll send you a reset link.</p>
          <form onSubmit={formik.handleSubmit} >
            <input className='form-control w-full' type='email' placeholder="Your registered email address" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
             {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}

          {isExistError && <p className="text-red-500 text-sm">{isExistError}</p>}
            <button  type="submit"className=' mt-5 btn bg-primary-600 text-white w-full'>Send Reset Link</button>
          </form>
 
          <p className='text-center'> Remember your password? <Link className='text-primary-600' to={`/login`}>Login</Link></p>

         </div>
      </div>
     </div>
     
     
     
     
     
     
     </>
  )
}
