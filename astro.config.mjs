import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import { remarkCustomFrontmatter } from './src/lib/remarkCustomFrontmatter'

export default defineConfig({
  site: 'https://www.erichowey.dev',
  integrations: [
    tailwind(),
    mdx({
      remarkPlugins: [remarkCustomFrontmatter],
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
})
