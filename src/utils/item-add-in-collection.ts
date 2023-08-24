import { CartItem, WishlistItem } from '@src/store/slices'

type ItemAddedInCollectionProps = {
  itemId: string
  collection: CartItem[] | WishlistItem[]
}

export const itemAddedInCollection: React.FC<ItemAddedInCollectionProps> = ({
  itemId,
  collection,
}): boolean => {
  return collection.some((item) => item.id === itemId)
}
