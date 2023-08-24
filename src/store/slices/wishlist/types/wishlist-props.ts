export type WishlistItem = {
  id: string
  name: string
  price: number
  slug: string
  mainImage: string
}

export type WishlistState = {
  wishlistItems: WishlistItem[]
}
