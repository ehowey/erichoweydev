import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypePrettyCode from 'rehype-pretty-code'
import react from '@astrojs/react'
const prettyCodeOptions = {
  theme: 'github-dark',
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.erichowey.dev',
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  integrations: [tailwind(), mdx(), sitemap(), react()],
})
