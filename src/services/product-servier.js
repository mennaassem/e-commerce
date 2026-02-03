import { apiClient } from "./api-client"

 export function getAllProducts({
    page,
    keyword,
    priceGretarThan,
    priceLessThan,
    storedBy,
    category,
    brand

  }={}){
    try {
         const options={
        method: "GET",
        url:`/products?${page ? `page=${page}` : ""}${keyword ? `&keyword=${ keyword}` : ""}${priceGretarThan ? `&price[gte]=${priceGretarThan}` : ""}${priceLessThan ? `&price[lte]=${priceLessThan}` : ""}${storedBy ? `&sort=${storedBy}` : ""}${category ? `&category[in]=${category}` : ""}${ brand ? `&brand=${ brand}` : ""}`
    }
    const response= apiClient.request(options)
    return response
    } catch (error) {
        throw error
        
    }
}

  export function getSpecificProduct({id}){
    try {
        const options={
             method: "GET",
        url:`/products/${id}`

        }
        const response=apiClient.request(options)
        return response
    } catch (error) {
        throw error
        
    }
}
 