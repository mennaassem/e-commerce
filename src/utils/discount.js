 export function calcDisCount(price,priceAfterDiscount){
    const disCount=((price - priceAfterDiscount) / price) * 100
    return disCount.toFixed(0)

}