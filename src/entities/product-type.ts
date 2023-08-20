import { CategoryType } from '.'

type Rating = {
  rate: number
  count: number
}

export type ProductType = {
  id: string
  name: string
  description: string
  price: number
  rating: Rating
  slug: string
  mainImage: string
  category: CategoryType
  gallery: string[]
}
