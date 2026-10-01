import fs from 'node:fs/promises'
import { OGImageRoute } from 'astro-og-canvas'
import { siteConfig } from '../../config'
import { getFilteredPosts } from '../../utils/draft'
import { renderFavicon } from '../../utils/icon'

export const prerender = true

interface OGPage {
  title: string
  description: string
}

// astro-og-canvas only accepts a logo file path, so render the favicon to a cached PNG.
const logoPath = 'node_modules/.cache/og/logo.png'
await fs.mkdir('node_modules/.cache/og', { recursive: true })
await fs.writeFile(logoPath, await renderFavicon(160))

const posts = await getFilteredPosts()

// `index` is the homepage share image; every other key is a post slug.
const pages: Record<string, OGPage> = {
  index: { title: siteConfig.site.title, description: new URL(siteConfig.site.website).host },
  ...Object.fromEntries(
    posts.map((post) => [
      post.id.replace(/\.(md|mdx)$/, ''),
      { title: post.data.title, description: siteConfig.site.title }
    ])
  )
}

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path: string, page: OGPage) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: logoPath,
      size: [80, 80]
    },
    bgGradient: [[255, 255, 255]],
    padding: 64,
    font: {
      title: {
        color: [28, 28, 28],
        size: 68,
        weight: 'SemiBold',
        families: ['Inter']
      },
      description: {
        color: [180, 180, 180],
        size: 40,
        weight: 'Medium',
        families: ['Inter']
      }
    },
    fonts: ['./public/fonts/Inter.woff2']
  })
})
