import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const ProductsList = ({products}) => {
    const {cartItems}= useSelector((store)=>{return store.cart})
    console.log("data",cartItems)
  return (
    <div>
        {
            cartItems?.map((product)=>{
                return <Product {...product} key={product.id}/>
            })
        }
    </div>
  )
}

export default ProductsList