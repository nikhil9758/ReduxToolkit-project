import React from 'react'
import cartItems from '../cartItems'
import { useLoaderData } from 'react-router-dom'
import ProductsList from '../Components/ProductsList'
export const loader=()=>{
    return cartItems
}

const Landing = () => {
    const data= useLoaderData()
    console.log(data)
  return (
    <div>Your Bag
        <ProductsList products={data}/>
    </div>
  )
}

export default Landing