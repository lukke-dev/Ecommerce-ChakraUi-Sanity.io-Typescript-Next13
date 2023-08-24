import { useAppSelector } from '@src/store'

export function useCartHook() {
  return useAppSelector((state) => {
    return { cartItems: state.cart.cartItems }
  })
}
