import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
name:'movies',
initialState:{
   nowPlayingMovies:[],
   trailerVideo:null,
   popularMovies:[],
   topRated:[],
   upcoming:[],

},
reducers:{
addNowPlayingMovies:(state,action)=>{
    state.nowPlayingMovies = action.payload
 
},
addPopularMovies:(state,action)=>{
    state.popularMovies = action.payload
    
},
addTrailerVideo: (state,action) =>{

    state.trailerVideo= action.payload
},
addTopRated:(state,action) =>{
    state.topRated = action.payload
},

addUpcoming:(state,action) =>{
    state.upcoming = action.payload
}



}


    }
)
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming} = moviesSlice.actions

export default moviesSlice.reducer;































