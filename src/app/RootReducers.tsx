import { combineReducers } from "@reduxjs/toolkit";
import messageSlice from "./MessageSlice"
import MessageSlice from "./MessageSlice";
import ReptileSlice from "./ReptileSlice"

const rootReducer = combineReducers({
    message: MessageSlice,
    reptileI: ReptileSlice
})


export type RootState = ReturnType<typeof rootReducer>