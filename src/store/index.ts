import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { wishlistReducer, cartReducer } from './slices'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
