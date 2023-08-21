import {
  WishlistItem,
  WishlistContextProps,
  WishlistProviderProps,
} from './types'
import { createContext } from 'react'
import { useLocalStorage } from '@mantine/hooks'

export const WishlistContext = createContext({} as WishlistContextProps)

export const WishlistProvider: React.FC<WishlistProviderProps> = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] = useLocalStorage<WishlistItem[]>({
    key: 'ls-shop-wishlist',
    defaultValue: [],
  })

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

  return (
    <WishlistContext.Provider
      value={{
        addItem,
        removeItem,
        resetItems,
        wishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}
