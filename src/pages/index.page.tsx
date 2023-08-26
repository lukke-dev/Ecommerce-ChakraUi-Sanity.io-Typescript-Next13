import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { FeaturedType } from '@src/entities'
import { getFeaturedItems } from '@src/queries'
import { Banner, FeaturedProducts, TopCategories } from './home/components'

export default function Home({
  featuredItems,
}: {
  featuredItems: FeaturedType
}) {
  return (
    <>
      <NextSeo title="LD Shop - Home" description="Best Deals For You" />
      <Banner />
      <TopCategories categories={featuredItems.topCategories} />
      <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems.bestDeals}
      />
      <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems.mostSellingProducts}
      />
      <FeaturedProducts
        title="Trending Products"
        products={featuredItems.trendingProducts}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredItems = await getFeaturedItems()

  return {
    props: {
      featuredItems: featuredItems[0],
    },
    revalidate: 60 * 60 * 10, // 10 hours
  }
}
