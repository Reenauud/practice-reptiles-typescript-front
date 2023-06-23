import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../app/MessageSlice';

export const store = configureStore({
    reducer:{
        message: messageReducer
    }
})