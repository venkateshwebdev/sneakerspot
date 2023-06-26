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
            // const filterdList = state.productList.filter((e)=>e!==action.payload)
            // state.productList = [...filterdList]
            const _foundIndex = state.productList.findIndex(e => e === action.payload);
            if(_foundIndex !== -1) state.productList.splice(_foundIndex,1);
        },

    }
})
export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer