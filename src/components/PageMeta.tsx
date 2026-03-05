import { Helmet } from 'react-helmet-async'
import { absoluteUrl, SITE_NAME, DEFAULT_OG_IMAGE_PATH } from '../config'

export interface PageMetaProps {
  title: string
  description: string
  path: string
  imagePath?: string
}

export function PageMeta({ title, description, path, imagePath = DEFAULT_OG_IMAGE_PATH }: PageMetaProps) {
  const url = absoluteUrl(path)
  const imageUrl = imagePath.startsWith('http') ? imagePath : absoluteUrl(imagePath)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
