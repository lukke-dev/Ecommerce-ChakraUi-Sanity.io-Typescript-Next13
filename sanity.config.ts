import { Config } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { visionTool } from '@sanity/vision'
import { AdminNavbar } from '@src/components'

export const config: Config = {
  name: 'default',
  title: 'LS shop',
  basePath: '/admin',

  projectId: 'psk4jylf',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: AdminNavbar,
    },
  },
}
