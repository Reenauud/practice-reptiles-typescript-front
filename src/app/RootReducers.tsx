import { combineReducers } from "@reduxjs/toolkit";
import messageSlice from "./MessageSlice"
import MessageSlice from "./MessageSlice";
import ReptileSlice from "./ReptileSlice"
import PictureSlice from "./PictureSlice";

const rootReducer = combineReducers({
    message: MessageSlice,
    reptileI: ReptileSlice,
    photoId: PictureSlice
    
})


export type RootState = ReturnType<typeof rootReducer>