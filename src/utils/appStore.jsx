import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from './moviesSlice'
import gptSliceReducer from "./gptSlice"

import configReducer  from "./configSlice"
import favourite from "./favouriteSlice"
import favouriteReducer from "./favouriteSlice"

const appStore = configureStore(

{

reducer:{

user:userReducer,
movies:moviesReducer,
gpt:gptSliceReducer,
config:configReducer,
favourite:favouriteReducer
}


}



)

export default  appStore;