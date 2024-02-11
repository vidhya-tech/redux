import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const store =configureStore({
    reducers:{
        counter:counterReducer
    }
})

export default store;