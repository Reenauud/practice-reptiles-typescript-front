import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const categoryNameSlice = createSlice({
  name: "categoryName",
  initialState: {
    categoryName: ""
  },
  reducers: {
    setCategoryName(state, action: PayloadAction<string>){
        state.categoryName = action.payload
    }
  }
});

export const {setCategoryName} = categoryNameSlice.actions
export default categoryNameSlice.reducer