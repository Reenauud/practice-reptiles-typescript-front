import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const testSlice = createSlice({
    name: "reptileI",
    initialState: {
      reptileI : "ahh"
    },
    reducers: {
      setReptileI(state, action: PayloadAction<string>){
          state.reptileI = action.payload
      }
    }
  })
  export const {setReptileI} = testSlice.actions
  export default testSlice.reducer