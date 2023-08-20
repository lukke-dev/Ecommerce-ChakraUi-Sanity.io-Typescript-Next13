import { FeaturedType } from '@src/entities'
import { getFeaturedItems } from '@src/queries'

export default async function Home() {
  const items: FeaturedType[] = await getFeaturedItems()
  return (
    <div>
      <h2>Hello World</h2>
      {JSON.stringify(items[0].topCategories)}
    </div>
  )
}

export const revalidate = 60 * 10 // 10 minutes
