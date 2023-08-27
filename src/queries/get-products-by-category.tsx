import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils'

const getProductsByCategoryQueries = `
  *[_type == "product" && references($id)] {
    ...,
    "id": _id,
    "slug": slug.current,
    description,
    "mainImage": mainImage.asset->url,
    category->{ name, "image": image.asset->url  },
  }
`

export const getProductsByCategory = (id: string) => {
  return sanityClient.fetch(groq`${getProductsByCategoryQueries}`, { id })
}
