import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils'

const searchProductsQuery = groq`
  *[_type == "product" && (name match $searchText || description match $searchText) ] {
    ...,
    "id": _id,
    "slug": slug.current,
      "mainImage": mainImage.asset->url,
      category->{
        name,
        "id": _id,
        "image": image.asset->url
      },
      "gallery": gallery[].asset->url
  }
`

export const searchProducts = (searchText: string) => {
  return sanityClient.fetch(searchProductsQuery, {
    searchText: `*${searchText}*`,
  })
}
