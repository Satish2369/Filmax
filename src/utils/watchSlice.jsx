import { createSlice } from "@reduxjs/toolkit";


const watchSlice = createSlice({


name:"watch",
initialState:{
   watchList:[]
},
reducers:{
    addToWatchList:(state,action)=>{
        state.watchList.push(action.payload);
    },
    clearWatchList:(state)=>{
        state.watchList = []
    },
    removeWatchList:(state,action)=>{
        // logic later
    }
}






})
export const {addToWatchList,clearWatchList,removeWatchList} = watchSlice.actions;
export default watchSlice.reducer;