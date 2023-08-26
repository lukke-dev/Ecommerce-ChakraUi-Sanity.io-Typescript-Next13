import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { Hero } from '@src/components'
import { CategoryType } from '@src/entities'
import { getAllCategories } from '@src/queries'
import { AllCategories } from './components'

export default function Categories({
  categories,
}: {
  categories: CategoryType[]
}) {
  return (
    <>
      <NextSeo
        title="LD Shop - Categories"
        description="We've got all your favorite Categories"
      />
      <Hero
        heading="Product Categories"
        description="We've got all your favorite Categories"
        imageUrl="/store.png"
        btnLabel="View All Products"
        btnLink="/products"
      />
      <AllCategories categories={categories} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories()
  return {
    props: {
      categories,
    },
    revalidate: 60 * 60 * 10, // 10 hours
  }
}
