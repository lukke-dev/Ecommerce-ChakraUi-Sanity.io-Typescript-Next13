import {
  WishlistItem,
  WishlistContextProps,
  WishlistProviderProps,
} from './types'
import { createContext } from 'react'
import { useCartHook } from '@src/hooks'
import { useLocalStorage } from '@mantine/hooks'

export const WishlistContext = createContext({} as WishlistContextProps)

export const WishlistProvider: React.FC<WishlistProviderProps> = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] = useLocalStorage<WishlistItem[]>({
    key: 'ls-shop-wishlist',
    defaultValue: [],
  })

  const { cartItems } = useCartHook()

  const addItem = (item: WishlistItem) => {
    setWishlistItems((prevState) => [...prevState, item])
  }

  const removeItem = (itemId: string) => {
    setWishlistItems((prevState) => {
      return prevState.filter((item) => item.id !== itemId)
    })
  }

  const resetItems = () => {
    setWishlistItems([])
  }

  const isAddedInCart = (itemId: string): boolean => {
    return cartItems.some((cartItem) => cartItem.id === itemId)
  }

  return (
    <WishlistContext.Provider
      value={{
        addItem,
        removeItem,
        resetItems,
        wishlistItems,
        isAddedInCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}
