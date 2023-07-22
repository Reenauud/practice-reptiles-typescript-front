import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const reptileIdSlice = createSlice({
  name: "reptileId",
  initialState: {
    reptileId:  0
  },
  reducers: {
    setReptileId(state, action: PayloadAction<any>){
        state.reptileId = action.payload
    }
  }
});

export const {setReptileId} = reptileIdSlice.actions
export default reptileIdSlice.reducer