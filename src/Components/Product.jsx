import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrease, increase, remove } from '../Features/CartSlice'

const Product = ({id,title,price,img,amount}) => {
    const dispatch = useDispatch()
    const handleadd=()=>{
            dispatch(increase(id))
    }

    const handleremove=()=>{
        amount===1?dispatch(remove(id)):dispatch(decrease(id))
    }
  return (
    <>
        <div><img src={img} alt="mobile"/></div>
        <div>
            {title}
            {price}
            <button onClick={handleadd}>add</button>
            {amount}
            <button onClick={handleremove}>subtract</button>
        </div>
    </>
  )
}

export default Product