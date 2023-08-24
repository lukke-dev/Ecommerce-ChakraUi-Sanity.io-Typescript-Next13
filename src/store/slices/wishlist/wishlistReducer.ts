import { WishlistItem, WishlistState } from './types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: WishlistState = {
  wishlistItems: [],
}

const wishlistSlice = createSlice({
  name: 'wishlistSlice',
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      state.wishlistItems = [...state.wishlistItems, action.payload]
    },

    removeItemFromWishlist: (
      state,
      action: PayloadAction<WishlistItem['id']>,
    ) => {
      state.wishlistItems = state.wishlistItems.filter((item) => {
        return item.id !== action.payload
      })
    },

    resetWishlistItems: (state) => {
      state.wishlistItems = []
    },
  },
})

export const wishlistReducer = wishlistSlice.reducer

export const { addItemToWishlist, removeItemFromWishlist, resetWishlistItems } =
  wishlistSlice.actions
