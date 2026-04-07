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
  isFeatured?: boolean
  tags?: string[]
}

export interface SanityReview {
  _id: string
  reviewerName: string
  rating: number
  reviewText: string
  reviewDate: string
  source?: string
  isFeatured?: boolean
}

export interface SanityGalleryImage {
  _id: string
  title: string
  imageUrl: string
  imageAlt: string
  category?: string
}

export interface SanitySiteSettings {
  cafeName: string
  tagline: string
  description: string
  contact: {
    phone: string
    email: string
    whatsappNumber: string
    instagram: string
  }
  location: {
    address: string
    googlePlusCode: string
    googleMapsUrl?: string
    latitude?: number
    longitude?: number
  }
  openingHours: {
    opensAt: string
    closesAt: string
    daysOpen: string[]
    displayLabel: string
  }
  paymentMethods: string[]
}

export interface SanityHeroSection {
  heading: string
  subheading: string
  bodyText: string
  backgroundVideoUrl?: string
  posterImageUrl?: string
  posterImageAlt?: string
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
    "imageAlt": image.alt,
    isFeatured,
    tags
  }`)
}

export async function fetchReviews(): Promise<SanityReview[]> {
  return client.fetch(`*[_type == "review" && isPublished == true] | order(isFeatured desc, sortOrder asc) {
    _id,
    reviewerName,
    rating,
    reviewText,
    reviewDate,
    source,
    isFeatured
  }`)
}

export async function fetchGalleryImages(): Promise<SanityGalleryImage[]> {
  return client.fetch(`*[_type == "galleryImage" && isPublished == true] | order(sortOrder asc) {
    _id,
    title,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    category
  }`)
}

export async function fetchSiteSettings(): Promise<SanitySiteSettings> {
  return client.fetch(`*[_type == "siteSettings"][0] {
    cafeName,
    tagline,
    description,
    contact,
    location,
    openingHours,
    paymentMethods
  }`)
}

export async function fetchHeroSection(): Promise<SanityHeroSection> {
  return client.fetch(`*[_type == "heroSection"][0] {
    heading,
    subheading,
    bodyText,
    "backgroundVideoUrl": backgroundVideo.asset->url,
    "posterImageUrl": posterImage.asset->url,
    "posterImageAlt": posterImage.alt
  }`)
}
