import { createSlice } from '@reduxjs/toolkit'



const favouriteSlice = createSlice({
  name: 'favourite',
  initialState:{
    favouriteMovies: []
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteMovies.push(action.payload)
    },
    removeFavourite: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(movie => movie.imdbID !== action.payload)
    }
  }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer
