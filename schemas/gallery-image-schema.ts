import { SchemaTypeDefinition } from 'sanity'

export const GalleryImageSchema: SchemaTypeDefinition = {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHightLight: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
}
