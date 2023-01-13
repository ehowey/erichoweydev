import getReadingTime from 'reading-time'
import { toHast } from 'mdast-util-to-hast'
import { toString } from 'mdast-util-to-string'
import prune from 'just-prune'

export const remarkCustomFrontmatter = () => {
  return function (tree, { data }) {
    const asHast = toHast(tree)
    const asString = toString(asHast)
    const readingTime = getReadingTime(asString)
    const generatedExcerpt = prune(asString, 300)
    const generatedDescription = prune(asString, 150)
    data.astro.frontmatter.readingTime = readingTime.text
    data.astro.frontmatter.generatedExcerpt = generatedExcerpt
    data.astro.frontmatter.generatedDescription = generatedDescription
  }
}
