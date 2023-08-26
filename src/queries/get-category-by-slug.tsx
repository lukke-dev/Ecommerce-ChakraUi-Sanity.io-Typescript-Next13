import { groq } from 'next-sanity'
import { sanityClient } from '@src/utils'

const getCategoryBySlugQueries = `
  *[_type == "category" && slug.current == $slug][0] {
    "id": _id,
  }
`

export const getCategoryBySlug = (slug: string) => {
  return sanityClient.fetch(groq`${getCategoryBySlugQueries}`, { slug })
}
