import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  genre: '',
  cinema: {
    id: '',
    name: '',
    movieIds: [],
  },
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload
    },
    setGenre: (state, { payload }) => {
      state.genre = payload
    },
    setCinema: (state, { payload }) => {
      state.cinema = {
        id: payload.id,
        name: payload.name,
        movieIds: payload.movieIds,
      }
    },
  },
})

export const filterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions
