import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import playformInline from '@playform/inline'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import rehypeKatex from 'rehype-katex'
import remarkEmbeddedMedia from './src/plugins/remark-embedded-media.mjs'
import remarkReadingTime from './src/plugins/remark-reading-time.mjs'
import rehypeCleanup from './src/plugins/rehype-cleanup.mjs'
import rehypeImageProcessor from './src/plugins/rehype-image-processor.mjs'
import rehypeCopyCode from './src/plugins/rehype-copy-code.mjs'
import remarkTOC from './src/plugins/remark-toc.mjs'
import { siteConfig } from './src/config'
import { imageConfig } from './src/utils/image-config'
import path from 'path'
import cloudflare from '@astrojs/cloudflare'
import { unified } from '@astrojs/markdown-remark'

export default defineConfig({
  // Deployed to Cloudflare Workers (see wrangler.jsonc).
  // `prerenderEnvironment: 'node'` keeps prerendering in Node instead of workerd
  // (the v14 default) so the `canvaskit-wasm` externalisation below still works.
  adapter: cloudflare({ prerenderEnvironment: 'node' }),
  site: siteConfig.site.website,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: imageConfig
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: false
    },
    // Astro 7 defaults to the Sätteri processor; opt back into the remark/rehype
    // pipeline this site's plugins are written against.
    processor: unified({
      remarkPlugins: [remarkMath, remarkDirective, remarkEmbeddedMedia, remarkReadingTime, remarkTOC],
      rehypePlugins: [rehypeKatex, rehypeCleanup, rehypeImageProcessor, rehypeCopyCode]
    })
  },
  integrations: [
    playformInline({
      Exclude: [(file) => file.toLowerCase().includes('katex')]
    }),
    mdx(),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    // canvaskit-wasm (via astro-og-canvas) is CommonJS and uses `__dirname` to locate
    // canvaskit.wasm. The Cloudflare adapter emits ESM, where `__dirname` is undefined.
    // OG images are prerendered at build time, so keep canvaskit external and let Node
    // resolve it from node_modules rather than inlining it into the worker bundle.
    ssr: {
      external: ['canvaskit-wasm']
    }
  },
  devToolbar: {
    enabled: false
  }
})
