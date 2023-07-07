import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../app/MessageSlice';
import testSlice from "../app/ReptileSlice"

export const store = configureStore({
    reducer:{
        message: messageReducer,
        reptileI: testSlice
    }
})

