import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils'

const getProductBySlugQueries = `
  *[_type == "product" && slug.current == $slug][0] {
    ...,
    "id": _id,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    category->{
        name,
        "slug": slug.current,
        "id": _id,
        "image": image.asset->url
    },
    "gallery": gallery[].asset->url
  }
`

export const getProductBySlug = (slug: string) => {
  return sanityClient.fetch(groq`${getProductBySlugQueries}`, { slug })
}
