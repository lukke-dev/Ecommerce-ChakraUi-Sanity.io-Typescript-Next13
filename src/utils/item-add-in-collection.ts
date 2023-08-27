import { CartItem, WishlistItem } from '@src/store/slices'

type ItemAddedInCollectionProps = {
  itemId: string
  collection: CartItem[] | WishlistItem[]
}

export const itemAddedInCollection = ({
  itemId,
  collection,
}: ItemAddedInCollectionProps): boolean => {
  return collection.some((item) => item.id === itemId)
}
