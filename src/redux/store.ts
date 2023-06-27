import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart/index'
import { movieApi } from './services/movieApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
})
