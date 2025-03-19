import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

export function generateSEO({
  title,
  description,
  image,
  url,
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : undefined,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
