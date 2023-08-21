import { ReactElement } from 'react'

export type CartProviderProps = {
  children: ReactElement
}

export type CartItem = {
  id: string
  name: string
  price: number
  mainImage: string
  count: number
}

export type CartContextProps = {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  resetItems: () => void
  increaseCount: (itemId: string) => void
  decreaseCount: (itemId: string) => void
}
