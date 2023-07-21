import { combineReducers } from "@reduxjs/toolkit";
import messageSlice from "./MessageSlice"
import MessageSlice from "./MessageSlice";
import ReptileSlice from "./ReptileSlice"
import PictureSlice from "./PictureSlice";
import CategorySlice from "./CategorySlice";

const rootReducer = combineReducers({
    message: MessageSlice,
    reptileI: ReptileSlice,
    photoId: PictureSlice,
    categoryId: CategorySlice
    
})


export type RootState = ReturnType<typeof rootReducer>