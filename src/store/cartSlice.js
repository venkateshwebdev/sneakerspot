import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        productList:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.productList.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.productList.push(action.payload)
        },

    }
})
export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer