import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './CakeSlice'; // Update the path if necessary


const store = configureStore({
    reducer:{
        cakeSlice: cakeReducer
    }
})

export default store