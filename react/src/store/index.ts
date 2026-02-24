import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlices";
import CartReducer from "./slices/CartSlice";

// import Currency from "../store/slices/currencySlices";
import useReducer from "./slices/userSclice";
export const store = configureStore({
    reducer:{
        //data:reducer
        currency:currencyReducer,
        cart:CartReducer,
        user:useReducer
    },
})
export type RootState = ReturnType<typeof store.getState>;


