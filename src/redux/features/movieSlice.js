import { createSlice } from '@reduxjs/toolkit'
import { act } from '@testing-library/react'

const initialState = {
  recommendedMovies: [],
  type:"movie",
  selection:[],
  searchdata:""
}

export const movieSlice = createSlice({
  name: 'movierecommend',
  initialState,
  reducers: {
    getrecommendMovie: (state,action) => {
      state.recommendedMovies = action.payload
    },
    typeMovie: (state,action) => {
      state.type = action.payload
    },
    selectMovie:(state,action)=>{
      state.selection = action.payload
    },
    searchfunc:(state,action)=>{
      state.searchdata = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getrecommendMovie , typeMovie , selectMovie , searchfunc} = movieSlice.actions

export default movieSlice.reducer