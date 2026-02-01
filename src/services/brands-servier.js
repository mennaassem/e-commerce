 import { apiClient } from './api-client';
 
  export async function getAllBrands(){
 
    try {
        const option={
            url:"/brands",
            method:"GET"
        }
      const response= await  apiClient.request(option)
      return response
    } catch (error) {
        throw error
    }
}