import { ProductType } from '@src/entities'

export type AllProductsProps = {
  products: ProductType[]
  breadcrumbItems?: {
    name: string
    link: string
  }[]
}
