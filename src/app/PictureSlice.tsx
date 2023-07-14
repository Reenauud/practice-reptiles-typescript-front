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



export const {setPhotoId} = pictureSlice.actions
// export const {setName} = nameSlice.actions
export default pictureSlice.reducer