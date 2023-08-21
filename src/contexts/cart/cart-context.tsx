import { CartItem, CartContextProps, CartProviderProps } from './types'
import { createContext } from 'react'
import { useLocalStorage } from '@mantine/hooks'

export const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [CartItems, setCartItems] = useLocalStorage<CartItem[]>({
    key: 'ls-shop-cart',
    defaultValue: [],
  })

  const increaseCount = (itemId: string) => {
    const items = [...CartItems]
    const index = items.findIndex((item) => item.id === itemId)
    items[index].count += 1
    setCartItems(items)
  }

  const decreaseCount = (itemId: string) => {
    const items = [...CartItems]
    const index = items.findIndex((item) => item.id === itemId)
    if (items[index].count > 1) {
      items[index].count -= 1
    }
    setCartItems(items)
  }

  const addItem = (item: CartItem) => {
    setCartItems((prevState) => [...prevState, item])
  }

  const removeItem = (itemId: string) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== itemId)
    })
  }

  const resetItems = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        resetItems,
        CartItems,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
