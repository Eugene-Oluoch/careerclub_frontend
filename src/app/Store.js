import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import AuthSlice from './features/AuthSlice/AuthSlice'
import UserSlice from './features/UserSlice/UserSlice'
// import JobSlice from './features/Job/JobSlice'

let store = configureStore({
    reducer:{
        otp:AuthSlice.reducer,
        user:UserSlice.reducer
    }
})


export default store