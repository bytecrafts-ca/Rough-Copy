/**
 * Site URL for canonical links, Open Graph, sitemap, and robots.
 * Set VITE_SITE_URL in production (e.g. https://rough-copy.vercel.app).
 */
export const SITE_URL =
  typeof import.meta.env.VITE_SITE_URL === 'string' && import.meta.env.VITE_SITE_URL
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
    : (typeof window !== 'undefined' ? window.location.origin : '')

export const SITE_NAME = 'Rough Copy'
/** Use /og-default.png (1200×630) for best compatibility; /og-default.svg works for dev. */
export const DEFAULT_OG_IMAGE_PATH = '/og-default.svg'

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return SITE_URL ? `${SITE_URL}${p}` : p
}
