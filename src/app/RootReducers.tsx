import { combineReducers } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
import ReptileSlice from "./ReptileSlice"
import PictureSlice from "./PictureSlice";
import CategorySlice from "./CategorySlice";
import CategoryNameSlice from "./CategoryNameSlice";
import reptileIdSlice from "./reptileIdSlice";
import OrderReducer from "./OrderSlice";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
    message: MessageSlice,
    reptileI: ReptileSlice,
    photoId: PictureSlice,
    categoryId: CategorySlice,
    categoryName: CategoryNameSlice,
    reptileId : reptileIdSlice,
    order: OrderReducer,
    token: tokenReducer,
})

export type RootState = ReturnType<typeof rootReducer>