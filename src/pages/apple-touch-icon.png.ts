import sharp from 'sharp'
import { renderFavicon } from '@/utils/icon'

export const prerender = true

// iOS expects 180×180 with an opaque background; the glyph gets ~20% padding.
export async function GET() {
  const glyph = await renderFavicon(140)
  const png = await sharp({ create: { width: 180, height: 180, channels: 3, background: '#fff' } })
    .composite([{ input: glyph, gravity: 'center' }])
    .png()
    .toBuffer()

  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } })
}
