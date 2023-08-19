import { Config } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export const config: Config = {
  name: 'default',
  title: 'LS shop',
  basePath: '/studio',

  projectId: 'psk4jylf',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
}
