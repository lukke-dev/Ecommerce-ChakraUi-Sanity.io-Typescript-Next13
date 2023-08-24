import { useAppSelector } from '@src/store'
import { memoizedCartItems, memoizedCartTotalPrice } from '@src/store/slices'

export function useCartHook() {
  const cartItemsLength = useAppSelector(memoizedCartItems)
  const cartItemsTotalPrice = useAppSelector(memoizedCartTotalPrice)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  return {
    cartItems,
    cartItemsLength,
    cartItemsTotalPrice,
  }
}
