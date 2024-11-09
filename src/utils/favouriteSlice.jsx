import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice =  createSlice({


   name:"favourite",
   initialState:{
    favouriteList:[]
   },
   reducers:{
    addToFavourites:(state,action)=>{
        state.favouriteList.push(action.payload)
    },
    removeFromFavourites:(state,action)=>{
       const id = action.payload.id;
       state.favouriteList =  state.favouriteList.filter((movie) => movie.id !== id);

    },
    clearFavourites:(state)=>{
        state.favouriteList = [];
    }
   }


})

export const {addToFavourites,removeFromFavourites,clearFavourites} = favouriteSlice.actions;
export default favouriteSlice.reducer;