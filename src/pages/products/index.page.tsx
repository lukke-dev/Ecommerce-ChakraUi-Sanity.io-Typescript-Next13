import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { Hero } from '@src/components'
import { AllProducts } from './components'
import { ProductType } from '@src/entities'
import { getAllProducts } from '@src/queries'

export default function Products({ products }: { products: ProductType[] }) {
  const description =
    'Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more'
  return (
    <>
      <NextSeo title="LD Shop - Products" description={description} />
      <Hero
        heading="Best and Quality Products"
        description={description}
        imageUrl="/bags.jpg"
        btnLabel="View All Categories"
        btnLink="/categories"
      />
      <AllProducts products={products} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 10, // 10 hours
  }
}
