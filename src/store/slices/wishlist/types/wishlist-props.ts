export type WishlistItem = {
  id: string
  name: string
  price: number
  slug: string
  description: string
  mainImage: string
}

export type WishlistState = {
  wishlistItems: WishlistItem[]
}
