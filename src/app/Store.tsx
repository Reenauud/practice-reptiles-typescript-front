import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../app/MessageSlice';
import testSlice from "../app/ReptileSlice"
import PictureSlice from "./PictureSlice";
import CategorySlice from "./CategorySlice";
import CategoryNameSlice from "./CategoryNameSlice";
import reptileIdSlice from "./reptileIdSlice";
import OrderReducer from "./OrderSlice";

export const store = configureStore({
    reducer:{
        message: messageReducer,
        reptileI: testSlice,
        photoId: PictureSlice,
        categoryId: CategorySlice,
        categoryName: CategoryNameSlice,
        reptileId: reptileIdSlice,
        order: OrderReducer,
    }
})

