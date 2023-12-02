import {configureStore} from '@reduxjs/toolkit'
import googleReducer from './slices/authSlice'
const store = configureStore({
    reducer:{
       auth: googleReducer
    }
})



export default store