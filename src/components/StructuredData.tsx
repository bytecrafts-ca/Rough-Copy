import { Helmet } from 'react-helmet-async'
import { absoluteUrl, SITE_NAME, DEFAULT_OG_IMAGE_PATH } from '../config'

const defaultPublisher = {
  '@type': 'Organization' as const,
  name: SITE_NAME,
  url: absoluteUrl('/'),
  logo: {
    '@type': 'ImageObject' as const,
    url: absoluteUrl('/favicon.svg'),
  },
}

export function StructuredDataHome() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: absoluteUrl('/'),
        description: "Clear takes on what's happening — tech, climate, culture, and the ideas that shape the day.",
      },
      {
        ...defaultPublisher,
      },
    ],
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export interface StructuredDataArticleProps {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  path: string
  categoryName: string
  categoryPath: string
}

export function StructuredDataArticle({
  headline,
  description,
  datePublished,
  dateModified,
  path,
  categoryName,
  categoryPath,
}: StructuredDataArticleProps) {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(DEFAULT_OG_IMAGE_PATH)

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article' as const,
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    url,
    image: imageUrl,
    author: defaultPublisher,
    publisher: defaultPublisher,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList' as const,
    itemListElement: [
      { '@type': 'ListItem' as const, position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem' as const, position: 2, name: categoryName, item: absoluteUrl(categoryPath) },
      { '@type': 'ListItem' as const, position: 3, name: headline, item: url },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(article)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

export interface StructuredDataCategoryProps {
  name: string
  description: string
  path: string
}

export function StructuredDataCategory({ name, description, path }: StructuredDataCategoryProps) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList' as const,
    itemListElement: [
      { '@type': 'ListItem' as const, position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem' as const, position: 2, name, item: absoluteUrl(path) },
    ],
  }

  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage' as const,
    name,
    description,
    url: absoluteUrl(path),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(collectionPage)}</script>
    </Helmet>
  )
}

export function StructuredDataAbout() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList' as const,
    itemListElement: [
      { '@type': 'ListItem' as const, position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem' as const, position: 2, name: 'About', item: absoluteUrl('/about') },
    ],
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}
