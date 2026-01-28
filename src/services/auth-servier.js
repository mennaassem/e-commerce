import axios from "axios"
import { API_CONFIG } from "../config/config"
import { apiClient } from "./api-client"

  export async function sendDataToSignup(values){
    try {
          const options={
    method:"POST",
    url:`/auth/signup`,
    data:{
      name:values.name,
      email:values.email,
      phone:values.phone,
      password:values.password,
      rePassword:values.rePassword
    }
  }
  const response = await apiClient.request(options) 
  return response
    } catch (error) {
       throw error 
    }
}

  export async function sendDataToLogin(values){
  try {
        const options={
    method:"POST",
    url:`/auth/signin`,
    data:{
      email:values.email,
       
      password:values.password,
      
    }
  }
  const response = await apiClient.request(options)
  return response
    
  } catch (error) {
    throw error
    
  }
}
 export async function sendDataToForgetPassword(valuse){
  try {
        const options={
    method:"POST",
    url: `/auth/forgotPasswords`,
    data:{
      email:values.email,
       
       
      
    }
  }
   const response= await apiClient.request(options)
   return response
    
  } catch (error) {
    throw error
    
  }
}