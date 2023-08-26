import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils'

const getAllCategoriesQueries = `
  *[_type == "category"] {
    "id": _id,
    name,
    "slug": slug.current,
    "image": image.asset->url
  }
`

export const getAllCategories = () => {
  return sanityClient.fetch(groq`${getAllCategoriesQueries}`)
}
