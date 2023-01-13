import rss from '@astrojs/rss'

const postImportResult = import.meta.glob('./writing/**/*.mdx', { eager: true })
const posts = Object.values(postImportResult).sort(
  (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
)
const site = import.meta.env.SITE

export const get = () =>
  rss({
    title: 'Eric Howey | Writing',
    description:
      'Musing, ramblings and articles about modern frontend web development.',
    site: site,
    items: posts.map((post) => ({
      link: new URL(post.url, site).href,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
    })),
    customData: `<language>en</language>`,
  })
