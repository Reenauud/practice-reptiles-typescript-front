import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const pictureSlice = createSlice({
  name: "photoId",
  initialState: {
    photoId: ""
  },
  reducers: {
    setPhotoId(state, action: PayloadAction<string>){
        state.photoId = action.payload
    }
  }
});

export const {setPhotoId} = pictureSlice.actions
export default pictureSlice.reducer