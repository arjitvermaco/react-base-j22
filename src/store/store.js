import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './CakeSlice';
export const store = configureStore({
    reducer:{
        cake:cakeReducer,
    }
})