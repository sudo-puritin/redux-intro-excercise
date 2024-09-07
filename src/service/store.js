import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/slice";
import { productSlice } from "./product/slice";

const store = configureStore({
  reducer: combineReducers({
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  }),
});

export default store;
