import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils'

const getAllProductsQueries = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`

export const getAllProducts = () => {
  return sanityClient.fetch(groq`${getAllProductsQueries}`)
}
