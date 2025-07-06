import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

console.log("oncreate store :", store.getState());

store.subscribe(() => console.log("STORE CHANGE", store.getState()));
export default store;
