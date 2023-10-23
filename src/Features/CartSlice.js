import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../cartItems'
const initialState={
    cartItems:cartItems,
    amount:0,
    total:0
}
// let InitialState=null
const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        increase:(state,action)=>{
            const id=action.payload
            console.log("id",id,action)
            const cartItem=state.cartItems.find((item)=>item.id===id)
            console.log(cartItem)
            cartItem.amount=cartItem.amount+1
        },
        decrease:(state,action)=>{
            const id= action.payload
            let cartItem= state.cartItems.find((item)=>item.id===id)
            console.log('decrease',cartItem)
            cartItem.amount=cartItem.amount>1?cartItem.amount-1:1
        },
        remove:(state,action)=>{
            const id= action.payload
            const itemIndex=state.cartItems.findIndex((item)=>item.id===id)
            console.log(itemIndex,id)
            const cartItems= state.cartItems.splice(itemIndex,1)
        }
    }
})

export const {increase,decrease,remove} = CartSlice.actions
export default CartSlice.reducer 