import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Initial message"
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>){
        state.message = action.payload
    }
  }
});

const nameSlice = createSlice({
  name: "name",
  initialState: {
    message: ""
  },
  reducers: {
    setName(state, action: PayloadAction<string>){
        state.message = action.payload
    }
  }
})



export const {setMessage} = messageSlice.actions
export const {setName} = nameSlice.actions
export default messageSlice.reducer