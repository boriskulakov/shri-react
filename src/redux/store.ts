import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart/index'
import { movieApi } from './services/movieApi'
import { filterReducer } from './features/filters'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
})
