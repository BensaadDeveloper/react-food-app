import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import cartSlice from "./cart/cartSlice";

const rootReducer = combineReducers({ 
  mealSlice: mealSlice,
  cartSlice: cartSlice
})



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartSlice']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = configureStore({
  reducer: persistedReducer, 
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store