import { Hero } from '@src/components'
import { AllProducts } from '@src/components/all-products/all-products'
import { ProductType } from '@src/entities'
import { sanityClient } from '@src/utils'
import { groq } from 'next-sanity'

const getAllProductsQueries = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`

const getProductsAsync = () => {
  return sanityClient.fetch(groq`${getAllProductsQueries}`)
}

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function ProductsPage() {
  const products: ProductType[] = await getProductsAsync()

  return (
    <>
      <Hero
        heading="Best and Quality Products"
        description="Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more"
        imageUrl="/bags.jpg"
        btnLabel="View All Categories"
        btnLink="/categories"
      />
      <AllProducts products={products} />
    </>
  )
}
