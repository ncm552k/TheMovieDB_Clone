import { createSlice } from '@reduxjs/toolkit'

const movieImgSlice = createSlice({
  name: 'image',
  initialState: {
    backdrops: [],
    poster: [],
    modalPoster: [],
  },
  reducers: {
    setMovieImg: (state, action) => ({ ...state, ...action.payload }),
    setModalPoster: (state, action) => ({ ...state, modalPoster: action.payload }),
  },
})
export const { setMovieImg, setModalPoster } = movieImgSlice.actions
export default movieImgSlice.reducer
