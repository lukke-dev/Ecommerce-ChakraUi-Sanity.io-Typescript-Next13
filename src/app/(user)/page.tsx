import { FeaturedType } from '@src/entities'
import { getFeaturedItems } from '@src/queries'
import { Banner, FeaturedProducts, TopCategories } from './home'

export default async function Home() {
  const featuredItems: FeaturedType[] = await getFeaturedItems()

  return (
    <main>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems[0].bestDeals}
      />
      <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems[0].mostSellingProducts}
      />
      <FeaturedProducts
        title="Trending Products"
        products={featuredItems[0].trendingProducts}
      />
    </main>
  )
}

export const revalidate = 60 * 10 // 10 minutes
