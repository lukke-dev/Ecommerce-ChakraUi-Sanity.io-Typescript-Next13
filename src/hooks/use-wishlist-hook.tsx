import { useContext } from 'react'
import { WishlistContext, WishlistContextProps } from '@src/contexts'

export function useWishlistHook(): WishlistContextProps {
  const context = useContext(WishlistContext)

  return context
}
