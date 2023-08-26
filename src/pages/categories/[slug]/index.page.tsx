import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from '@src/queries'
import React from 'react'
import { AllProducts, Hero } from '@src/components'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CategoryType, ProductType } from '@src/entities'
import { NextSeo } from 'next-seo'

export default function Category({ products }: { products: ProductType[] }) {
  return (
    <>
      <NextSeo title={`LD Shop - ${products[0].category.name}`} />
      <Hero
        heading={products[0].category.name}
        description={`Best and Affordable ${products[0].category.name}`}
        imageUrl={products[0].category.image}
        btnLabel="View All Categories"
        btnLink="/categories"
      />
      <AllProducts
        products={products}
        breadcrumbItems={[
          {
            name: 'Products',
            link: '/products',
          },
          {
            name: 'Categories',
            link: '/categories',
          },
          {
            name: products[0].category.name,
            link: '#',
          },
        ]}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: CategoryType[] = await getAllCategories()

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}) => {
  const category = await getCategoryBySlug(String(params?.slug))
  const products = await getProductsByCategory(category.id)

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 10, // 10 hours
  }
}
