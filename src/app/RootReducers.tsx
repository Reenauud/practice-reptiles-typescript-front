import { combineReducers } from "@reduxjs/toolkit";
import messageSlice from "./MessageSlice"
import MessageSlice from "./MessageSlice";

const rootReducer = combineReducers({
    message: MessageSlice
})

export type RootState = ReturnType<typeof rootReducer>