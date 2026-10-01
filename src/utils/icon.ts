import fs from 'node:fs/promises'
import sharp from 'sharp'

/**
 * Render public/favicon.svg to a transparent PNG that fits within `size`×`size`.
 * The favicon is the single icon source; other icons are derived from it at build time.
 */
export async function renderFavicon(size: number) {
  const svg = await fs.readFile('public/favicon.svg')
  // Pick a rasterisation density from the SVG's intrinsic size so any viewBox renders crisply.
  const { width = size, height = size } = await sharp(svg).metadata()
  const density = Math.min(72 * ((size * 2) / Math.max(width, height)), 10000)
  return sharp(svg, { density }).resize(size, size, { fit: 'contain', background: '#0000' }).png().toBuffer()
}
