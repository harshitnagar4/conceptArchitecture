import { configureStore } from '@reduxjs/toolkit'
import moviereducer from '../redux/features/movieSlice'
export const store = configureStore({
  reducer: {
    movierecommend:moviereducer
  },
})