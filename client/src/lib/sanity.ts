import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'o3009e44',
  dataset: 'production',
  apiVersion: '2026-04-05',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: unknown) => builder.image(source)

export interface SanityMenuItem {
  _id: string
  name: string
  description?: string
  priceMin?: number
  priceMax?: number
  category: string
  imageUrl?: string
  imageAlt?: string
}

export async function fetchMenuItems(): Promise<SanityMenuItem[]> {
  return client.fetch(`*[_type == "menuItem" && isAvailable == true] | order(sortOrder asc) {
    _id,
    name,
    description,
    priceMin,
    priceMax,
    category,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`)
}
