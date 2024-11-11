import { createSlice } from "@reduxjs/toolkit";


const watchSlice = createSlice({


name:"watch",
initialState:{
   watchList:[]
},
reducers:{
    addToWatchList: (state, action) => {
        const movie = action.payload;
        
        if (!state.watchList.some(item => item.id === movie.id)) {
          state.watchList.push(movie);
        }
      },
  
    clearWatchList:(state)=>{
        state.watchList = []
    },
    removeWatchList:(state,action)=>{
        const id = action.payload.id;
     state.watchList =   state.watchList.filter((movie)=> movie.id !== id)
    }
}






})
export const {addToWatchList,clearWatchList,removeWatchList} = watchSlice.actions;
export default watchSlice.reducer;