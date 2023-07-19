
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const categorySlice = createSlice({
  name: "categoryId",
  initialState: {
    categoryId: 0
  },
  reducers: {
    setCategoryId(state, action: PayloadAction<number>){
        state.categoryId = action.payload
    }
  }
});

export const {setCategoryId} = categorySlice.actions
export default categorySlice.reducer