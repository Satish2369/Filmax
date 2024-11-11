import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from './moviesSlice'
import gptSliceReducer from "./gptSlice"

import configReducer  from "./configSlice"
import favouriteReducer from "./favouriteSlice"
import watchReducer from "./watchSlice"

const appStore = configureStore(

{

reducer:{

user:userReducer,
movies:moviesReducer,
gpt:gptSliceReducer,
config:configReducer,
favourite:favouriteReducer,
watch:watchReducer
}


}



)

export default  appStore;