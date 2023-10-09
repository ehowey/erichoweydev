import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get() {
  const blogEntries = await (
    await getCollection('writing')
  ).filter((post) => {
    if (import.meta.env.DEV) {
      return post
    }
    if (post.data.published === true) {
      return post
    }
  })
  return rss({
    title: 'Eric Howey | Writing',
    description:
      'Musing, ramblings and articles about modern frontend web development.',
    site: 'https://www.erichowey.dev',
    items: blogEntries.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/writing/${post.slug}/`,
    })),
    customData: `<language>en</language>`,
  })
}
