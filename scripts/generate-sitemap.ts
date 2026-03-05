import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { articles, categories } from '../src/data/content'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = process.env.VITE_SITE_URL || 'https://rough-copy.vercel.app'
const base = SITE_URL.replace(/\/$/, '')

const urls: Array<{ loc: string; lastmod?: string; changefreq: string; priority: string }> = [
  { loc: `${base}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${base}/about`, changefreq: 'monthly', priority: '0.6' },
]

for (const cat of categories) {
  urls.push({
    loc: `${base}/category/${cat.slug}`,
    changefreq: 'weekly',
    priority: '0.8',
  })
}

for (const article of articles) {
  urls.push({
    loc: `${base}/article/${article.slug}`,
    lastmod: article.date,
    changefreq: 'monthly',
    priority: '0.7',
  })
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>
    <loc>${escapeXml(u.loc)}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const outDir = join(__dirname, '..', 'public')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'sitemap.xml'), xml, 'utf8')
console.log('Wrote public/sitemap.xml')

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`
writeFileSync(join(outDir, 'robots.txt'), robotsTxt, 'utf8')
console.log('Wrote public/robots.txt')
