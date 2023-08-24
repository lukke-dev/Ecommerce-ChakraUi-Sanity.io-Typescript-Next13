import { useAppSelector } from '@src/store'
import { memoizedWishlistItems } from '@src/store/slices'

export function useWishlistHook() {
  const wishlistItemsLength = useAppSelector(memoizedWishlistItems)
  const wishlistItems = useAppSelector((state) => state.wishlist.wishlistItems)
  return {
    wishlistItems,
    wishlistItemsLength,
  }
}
