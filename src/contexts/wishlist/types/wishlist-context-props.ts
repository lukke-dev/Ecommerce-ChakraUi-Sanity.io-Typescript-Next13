import { ReactElement } from 'react'

export type WishlistProviderProps = {
  children: ReactElement
}

export type WishlistItem = {
  id: string
  name: string
  price: number
  slug: string
  mainImage: string
}

export type WishlistContextProps = {
  wishlistItems: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (itemId: string) => void
  resetItems: () => void
  isAddedInCart: (itemId: string) => boolean
}
