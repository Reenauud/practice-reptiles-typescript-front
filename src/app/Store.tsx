import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../app/MessageSlice';
import testSlice from "../app/ReptileSlice"
import PictureSlice from "./PictureSlice";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
    reducer:{
        message: messageReducer,
        reptileI: testSlice,
        photoId: PictureSlice,
        categoryId: CategorySlice
    }
})

