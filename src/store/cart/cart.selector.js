import { createSelector } from "reselect";

const selectCart = (state) => state.cartSlice;



export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);


export const selectCartTotal = createSelector(
  [selectCartItems],
cartItems => cartItems.reduce(
    (accumulatedProce, cartItem) =>
    accumulatedProce + cartItem.quantity * cartItem.price,
  0
))