# Rough Copy

A blog about current events and ideas people search for: tech, climate, culture. Clear, short articles.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## SEO and production

**Production URL:** `https://rough-copy.vercel.app`

- **Canonical URLs, Open Graph, sitemap:** Set `VITE_SITE_URL=https://rough-copy.vercel.app` in Vercel (Project Settings → Environment Variables) so meta tags and the sitemap use the correct domain. The build script defaults to this URL if unset.
- **Sitemap URL (submit this to search consoles):**  
  **https://rough-copy.vercel.app/sitemap.xml**
- **robots.txt:** Generated at build; allows all crawlers and points to the sitemap above.
- **OG image:** `public/og-default.svg` is used for social sharing. For best compatibility (e.g. Facebook, LinkedIn), add a 1200×630 PNG at `public/og-default.png` and update `DEFAULT_OG_IMAGE_PATH` in `src/config.ts` to `'/og-default.png'`.
- Run `npm run generate-sitemap` to regenerate sitemap/robots without a full build.

### Search consoles to submit to

1. **Google Search Console** — https://search.google.com/search-console  
   Add property `https://rough-copy.vercel.app`, then submit sitemap: `https://rough-copy.vercel.app/sitemap.xml`.

2. **Bing Webmaster Tools** — https://www.bing.com/webmasters  
   Add site `https://rough-copy.vercel.app`, then submit sitemap: `https://rough-copy.vercel.app/sitemap.xml`. (Bing also powers Yahoo and DuckDuckGo.)

3. **Yandex Webmaster** (optional, for Russian/original Yandex traffic) — https://webmaster.yandex.com  
   Add site and submit the same sitemap URL.

## Stack

- Vite, React, TypeScript, React Router
- CSS with design tokens
- Semantic HTML and accessible layout
