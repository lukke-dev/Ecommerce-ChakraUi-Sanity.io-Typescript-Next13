import { CategoryType, ProductType } from '.'

export type FeaturedType = {
  topCategories: CategoryType[]
  bestDeals: ProductType[]
  mostSellingProducts: ProductType[]
  trendingProducts: ProductType[]
}
