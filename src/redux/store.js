import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './themeReducer'
import rootReducer from './rootReducer'
const store = configureStore({
    reducer:rootReducer})



export default store