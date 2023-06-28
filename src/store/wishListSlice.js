import { createSlice } from "@reduxjs/toolkit";
// const getUserDetails = async()=>{
//     const data = fetch("")
// }
const wishListSlice = createSlice({
    name:"whishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishlist : (state,action)=>{
          state.wishlist.push(action.payload)
        },
        removeFromWishlist : (state,action)=>{
            const foundIndex = state.wishlist.findIndex(e => e === action.payload);
            if(foundIndex !== -1) state.wishlist.splice(foundIndex,1);
        }
    }

})

// await fetch("http://localhost:8000/removefromwhishlist",{
//     method:"POST",
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body:JSON.stringify(email,Wishlist)
// })
export const {addToWishlist,removeFromWishlist} = wishListSlice.actions
export default wishListSlice.reducer