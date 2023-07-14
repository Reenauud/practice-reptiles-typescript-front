import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../app/MessageSlice';
import testSlice from "../app/ReptileSlice"
import PictureSlice from "./PictureSlice";

export const store = configureStore({
    reducer:{
        message: messageReducer,
        reptileI: testSlice,
        photoId: PictureSlice


    }
})

