# gilliannepapasin.com

Personal site and writing of Gillianne Papasin, a creative technologist and design engineer in Melbourne. Built with [Astro](https://astro.build) and deployed to Cloudflare Workers.

## Development

```bash
npm install
npm run dev
```

## Commands

- `npm run dev`: start the local dev server
- `npm run build`: build to `dist/`
- `npm run deploy`: build and deploy to Cloudflare Workers
- `npm run new <title>`: create a new post (prefix the title with `_` to make it a draft)
- `npm run lint` / `npm run format`: lint and format

## Where things live

- `src/config.ts`: site metadata and display settings
- `src/content/about/about.md`: intro on the homepage
- `src/data/`: experience and skills
- `src/content/posts/`: posts. Files starting with `_` are drafts and aren't published.
- `public/favicon.svg`: the only icon source. The Apple touch icon and share images are generated from it at build time.

## Deployment

Deployment uses `@astrojs/cloudflare`, configured in `astro.config.ts` and `wrangler.jsonc`. Run `npm run deploy`.
