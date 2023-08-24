import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { wishlistReducer, cartReducer } from './slices'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
})
export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
