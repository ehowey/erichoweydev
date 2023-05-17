import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get() {
  const posts = await getCollection('writing')
  return rss({
    title: 'Eric Howey | Writing',
    description:
      'Musing, ramblings and articles about modern frontend web development.',
    site: 'https://www.erichowey.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/writing/${post.slug}/`,
    })),
    customData: `<language>en</language>`,
  })
}
