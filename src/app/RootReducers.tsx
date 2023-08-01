import { combineReducers } from "@reduxjs/toolkit";
import messageSlice from "./MessageSlice"
import MessageSlice from "./MessageSlice";
import ReptileSlice from "./ReptileSlice"
import PictureSlice from "./PictureSlice";
import CategorySlice from "./CategorySlice";
import CategoryNameSlice from "./CategoryNameSlice";
import reptileIdSlice from "./reptileIdSlice";
import OrderReducer from "./OrderSlice";

const rootReducer = combineReducers({
    message: MessageSlice,
    reptileI: ReptileSlice,
    photoId: PictureSlice,
    categoryId: CategorySlice,
    categoryName: CategoryNameSlice,
    reptileId : reptileIdSlice,
    order: OrderReducer,
    
})

export type RootState = ReturnType<typeof rootReducer>