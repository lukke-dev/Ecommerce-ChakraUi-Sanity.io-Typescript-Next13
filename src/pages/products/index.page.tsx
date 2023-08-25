import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Hero } from '@src/components'
import { AllProducts } from './components'
import { ProductType } from '@src/entities'
import { getAllProducts } from '@src/queries'

export default function Products({ products }: { products: ProductType[] }) {
  return (
    <>
      <Head>
        <title>LD Shop - Products</title>
      </Head>
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

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 10, // 10 hours
  }
}
