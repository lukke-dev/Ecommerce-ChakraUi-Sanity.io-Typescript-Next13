import { CartItem, CartState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = [...state.cartItems, action.payload]
    },

    removeItemFromCart: (state, action: PayloadAction<CartItem['id']>) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload
      })
    },

    resetCartItems: (state) => {
      state.cartItems = []
    },

    increaseCount: (state, action: PayloadAction<CartItem['id']>) => {
      const newCartItems = [...state.cartItems]
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      )
      newCartItems[itemIndex].count += 1
      state.cartItems = newCartItems
    },

    decreaseCount: (state, action: PayloadAction<CartItem['id']>) => {
      const newCartItems = [...state.cartItems]
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      )
      if (newCartItems[itemIndex].count > 1) {
        newCartItems[itemIndex].count -= 1
      }
      state.cartItems = newCartItems
    },
  },
})

export const cartReducer = cartSlice.reducer

export const {
  addItemToCart,
  increaseCount,
  decreaseCount,
  resetCartItems,
  removeItemFromCart,
} = cartSlice.actions
