import { useContext } from 'react'
import { CartContext, CartContextProps } from '@src/contexts'

export function useCartHook(): CartContextProps {
  const context = useContext(CartContext)

  return context
}
