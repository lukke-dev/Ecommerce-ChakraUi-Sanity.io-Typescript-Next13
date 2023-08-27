export type CartItem = {
  id: string
  name: string
  price: number
  slug: string
  description: string
  mainImage: string
  count: number
}

export type CartState = {
  cartItems: CartItem[]
}
