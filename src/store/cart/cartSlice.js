import { addItemToCart, removeItemFromCart } from "./cart.utilis"
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartItems : [],
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
        reducers: {

            CART_ADD_ITEM : (state, action) => ({...state, cartItems: addItemToCart(state.cartItems, action.payload)}),
            CART_REMOVE_ITEM : (state, action) => ({...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}),
        }
})


export const {CART_ADD_ITEM, CART_REMOVE_ITEM} = cartSlice.actions
export default cartSlice.reducer;