import { createSlice} from "@reduxjs/toolkit";

import type{ ProductType } from "../../types";

const cartSlice = createSlice({
    name:"cart",
    initialState:[] as ProductType[],
    reducers:{
        addItem:(state, action)=>{state.push(action.payload);
            return state;
        },
        removeItem:(state, action)=>{
            return state.filter((item)=>item.productId !== action.payload);
        },
    }
});
export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;