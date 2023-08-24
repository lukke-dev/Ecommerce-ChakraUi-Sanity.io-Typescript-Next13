import { useAppSelector } from '@src/store'

export function useWishlistHook() {
  return useAppSelector((state) => {
    return { wishlistItems: state.wishlist.wishlistItems }
  })
}
