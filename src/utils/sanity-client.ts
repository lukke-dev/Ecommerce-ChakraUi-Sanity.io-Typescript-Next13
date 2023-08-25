import { ClientConfig, createClient } from 'next-sanity'

export const clientConfig: ClientConfig = {
  projectId: 'psk4jylf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-23',
}

export const sanityClient = createClient(clientConfig)
