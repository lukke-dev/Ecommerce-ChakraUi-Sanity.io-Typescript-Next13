import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils/sanityClient'

const getFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`

export const getFeaturedItems = () => {
  return sanityClient.fetch(groq`${getFeaturedItemsQueries}`)
}
