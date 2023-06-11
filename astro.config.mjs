import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.erichowey.dev',
  integrations: [
    tailwind(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
  ],
})
