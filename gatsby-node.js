const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = ({actions: {createNode}, createNodeId, createContentDigest}) => {
  const authors = [
    {
      name: `Kyle Mathews`,
      authorId: `kylem`,
      summary: `who lives and works in San Francisco building useful things.`,
      twitter: `kylemathews`,
    },
    {
      name: `Josh Johnson`,
      authorId: `joshj`,
      summary: `who lives and works in Michigan building neat things.`,
      twitter: `0xJ05H`,
    }
  ]

  authors.map(author => createNode({
    ...author,
    id: createNodeId(author.authorId),
    internal: {
      type: `Author`,
      contentDigest: createContentDigest(author)
    }
  }));
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createSlice } = actions

  /**
   * Create general slices
   */
  createSlice({
    id: `header`,
    component: require.resolve(`./src/components/header.js`),
  })

  createSlice({
    id: `footer`,
    component: require.resolve(`./src/components/footer.js`),
  })
  
  /**
   * Create slices for each author bio
   */

  // Define a component for author bio
  const authorBio = path.resolve(`./src/components/bio.js`)

  const authorResults = await graphql(
    `
    {
      allAuthor {
        nodes {
          authorId
        }
      }
    }
    `
  )

  if (authorResults.errors) {
    reporter.panicOnBuild(
      `There was an error loading your authors`,
      authorResults.errors
    )
    return
  }

  const authors = authorResults.data.allAuthor.nodes

  if (authors.length > 0) {
    authors.forEach((author) => {
      // create slice for author
      createSlice({
        id: `bio--${author.authorId}`,
        component: authorBio,
        context: {
          id: author.authorId,
        }
      })
    })
  }

  /**
   * Create blog posts
   */

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const blogResults = await graphql(
    `
    {
      allMarkdownRemark(sort: {frontmatter: { date: ASC }}, limit: 1000) {
        nodes {
          frontmatter {
            authorId
          }
          id
          fields {
            slug
          }
        }
      }
    }
    `
  )

  if (blogResults.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogResults.errors
    )
    return
  }

  const posts = blogResults.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      // create blog post
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
        slices: {
          // Instruct this blog page to use the matching bio slice
          // Any time the "bio" alias is seen, it'll use the "bio--${authorId}" slice
          bio: `bio--${post.frontmatter.authorId}`,
        }
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // create slugs for all blog posts
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  // add an authorId for all author avatars
  if (node.internal.type === `ImageSharp`) {
    const parent = getNode(node.parent)

    if (parent.relativeDirectory === 'author') {
      createNodeField({
        node,
        name: 'authorId',
        value: parent.name,
      })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }

    type Author implements Node {
      id: String
      authorId: String
      name: String
      summary: String
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
