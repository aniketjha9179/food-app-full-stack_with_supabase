// creating cartslice   
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    // it takes 3 things name, initialState, and reducer
    name: 'cart',
    initialState: {
        cart: []//for n numbers of items we used array
    },
    // in the form of objects
    reducers: {
        addToCart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id)
            if (itemPresent) {
                itemPresent.quantity++;
            } else {
                // initialize the quantity to 1
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        // removing item from cart
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter(
                (item) => item.id !== action.payload.id)
              state.cart=removeItem  
        },
        // increasing item to cart
        incrementQuantity:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.id===action.payload.id)
            itemPresent.quantity++;
        },
        //decrement item from cart
         decrementQuantity:(state, action)=>{
            const itemPresent=state.cart.find((item)=>item.id===action.payload.id)
            if(itemPresent.quantity===1){
                const removeItem = state.cart.filter(
                    (item) => item.id !== action.payload.id)
                  state.cart=removeItem  
            }else{
                itemPresent.quantity--;
            }
        },
        cleanCart:(state)=>{
            state.cart=[];
        },
    },


})

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity,cleanCart}=CartSlice.actions
export default CartSlice.reducer