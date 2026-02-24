import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name:"currency",
    initialState:"INR",
    reducers:{
        //action logic 

        //actions are functions related to data changes you want to do 
        //action_name :(state,action)=>{}
        //action: conains the actoin related information to be given to the store bu th components
        //every action must return the updated data back to the store
        changeCurrency:(state,action)=>{
            return action.payload;
        }//payload is an optional data that can be sent to the store by the component

    }
});
export const { changeCurrency } = currencySlice.actions;

//reducer are used by the store to update the data inside it

export default currencySlice.reducer;