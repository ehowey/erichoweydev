// Boop
const { createContentDigest } = require(`gatsby-core-utils`)
// const fs = require(`fs`)
// const path = require(`path`)
// const mkdirp = require(`mkdirp`)
// const withDefaults = require(`./src/utils/default-options`)
// const Debug = require(`debug`)
// const debug = Debug(`gatsby-theme-blog-core`)

// // Ensure that content directories exist at site-level
// exports.onPreBootstrap = ({ store }, themeOptions) => {
//   const { program } = store.getState()
//   const { contentPath, assetPath } = withDefaults(themeOptions)

//   const dirs = [
//     path.join(program.directory, contentPath),
//     path.join(program.directory, assetPath),
//   ]

//   dirs.forEach((dir) => {
//     debug(`Initializing ${dir} directory`)
//     if (!fs.existsSync(dir)) {
//       mkdirp.sync(dir)
//     }
//   })
// }

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

//Schema generation for Catalyst Config and Submenu

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions
  // Create a default empty array
  createFieldExtension({
    name: `defaultSubMenu`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return []
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createFieldExtension({
    name: `defaultRightLocation`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return "right"
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  // Type defination for the submenu to ensure there is always a submenu array to query
  const siteMetadataTypeDefs = `
    type Site implements Node @infer {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]
      socialLinks: [SocialLinks]
    }
    type MenuLinks {
      name: String!
      link: String!
      location: String! @defaultRightLocation
      subMenu: [SubMenu] @defaultSubMenu
    }
    type SubMenu {
      name: String
      link: String
    }
    type SocialLinks {
      name: String
      link: String
      location: String
    }
  `
  // Type definition for Catalyst Config
  const catalystConfigTypeDef = `
  type CatalystConfig implements Node {
    contentPath: String!
    assetPath: String!
    useAlertBanner: Boolean!
  }
  `
  createTypes(`interface CatalystPost implements Node {
    id: ID!
    title: String!
    subTitle: String
    author: String
    authorLink: String
    body: String!
    slug: String!
    date: Date! @dateformat
    tags: [String]!
    categories: [String]!
    keywords: [String]!
    excerpt: String!
    draft: Boolean! @defaultFalse
    featuredImage: File @fileByRelativePath
    featuredImageCaption: String
    socialImage: File @fileByRelativePath
    timeToRead: Int
    postType: String
    published: Boolean! @defaultFalse
}`)

  createTypes(`type CatalystBlogConfig implements Node {
  postListTitle: String
  displayPostListTitle: Boolean
}`)

  createTypes(
    schema.buildObjectType({
      name: `MdxCatalystPost`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        subTitle: {
          type: `String`,
        },
        author: {
          type: `String`,
        },
        authorLink: {
          type: `String`,
        },
        draft: {
          type: `Boolean!`,
          extensions: { defaultFalse: {} },
        },
        published: {
          type: `Boolean!`,
          extensions: { defaultFalse: {} },
        },
        slug: {
          type: `String!`,
        },
        postType: {
          type: `String`,
        },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        categories: { type: `[String]!` },
        keywords: { type: `[String]!` },
        featuredImage: {
          type: `File`,
          extensions: { fileByRelativePath: {} },
        },
        featuredImageCaption: {
          type: `String`,
        },
        socialImage: {
          type: `File`,
          extensions: { fileByRelativePath: {} },
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 300,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
        timeToRead: {
          type: `Int`,
          resolve: mdxResolverPassthrough(`timeToRead`),
        },
      },
      interfaces: [`Node`, `CatalystPost`],
    })
  )

  createTypes(siteMetadataTypeDefs)
  createTypes(catalystConfigTypeDef)
}

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions
  // const { contentPath, basePath } = withDefaults(themeOptions)
  const contentPath = "content/posts"
  const basePath = "/writing"

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    let slug
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug)
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
      })

      slug = urlResolve(basePath, filePath)
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`)
    const fieldData = {
      title: node.frontmatter.title,
      subTitle: node.frontmatter.subTitle,
      author: node.frontmatter.author,
      authorLink: node.frontmatter.authorLink,
      tags: node.frontmatter.tags || [],
      categories: node.frontmatter.categories || [],
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
      featuredImage: node.frontmatter.featuredImage,
      featuredImageCaption: node.frontmatter.featuredImageCaption,
      socialImage: node.frontmatter.socialImage,
      draft: node.frontmatter.draft,
      published: node.frontmatter.published,
      postType: node.frontmatter.postType || "article",
    }

    const mdxCatalystPostId = createNodeId(`${node.id} >>> MdxCatalystPost`)
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxCatalystPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxCatalystPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the CatalystPost interface`,
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxCatalystPostId) })
  }
}

// These templates are simply data-fetching wrappers that import components
const PostQuery = require.resolve(`./src/components/queries/post-query`)
const PostListQuery = require.resolve(
  `./src/components/queries/post-list-query`
)
const TagListQuery = require.resolve(`./src/components/queries/tag-list-query`)
const TagQuery = require.resolve(`./src/components/queries/tag-query`)
const CategoryListQuery = require.resolve(
  `./src/components/queries/category-list-query`
)
const CategoryQuery = require.resolve(`./src/components/queries/category-query`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  // const { basePath } = withDefaults(themeOptions)
  const basePath = "/writing"

  const result = await graphql(`
    {
      blogPosts: allCatalystPost(
        sort: { fields: [date, title], order: DESC }
        limit: 1000
        filter: { draft: { ne: true }, published: { eq: true } }
      ) {
        nodes {
          id
          slug
        }
      }
      tagList: allCatalystPost(
        filter: { draft: { ne: true }, published: { eq: true } }
      ) {
        group(field: tags) {
          fieldValue
        }
      }
      categoryList: allCatalystPost(
        filter: { draft: { ne: true }, published: { eq: true } }
      ) {
        group(field: categories) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const posts = result.data.blogPosts.nodes
  const tags = result.data.tagList.group
  const categories = result.data.categoryList.group

  // Create a page for each Post
  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1]
    const previous = index === 0 ? null : posts[index - 1]
    const { slug } = post
    createPage({
      path: slug,
      component: PostQuery,
      context: {
        id: post.id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
      },
    })
  })

  // Create the Posts page
  createPage({
    path: basePath,
    component: PostListQuery,
    context: {},
  })

  // Create the tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: TagQuery,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Create the tag list page
  if (tags.length > 0) {
    createPage({
      path: `/tags/`,
      component: TagListQuery,
      context: {},
    })
  }

  // Create the category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: CategoryQuery,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // Create the category list page
  if (categories.length > 0) {
    createPage({
      path: `/categories/`,
      component: CategoryListQuery,
      context: {},
    })
  }
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    contentPath = "content/pages",
    assetPath = "content/assets",
    useAlertBanner = false,
    postListTitle = "Posts",
    displayPostListTitle = true,
  }
) => {
  // create garden data from plugin config
  const catalystConfigFieldData = {
    contentPath,
    assetPath,
    useAlertBanner,
  }
  createNode({
    ...catalystConfigFieldData,
    id: `gatsby-theme-catalyst-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystConfig`,
      contentDigest: createContentDigest(catalystConfigFieldData),
      content: JSON.stringify(catalystConfigFieldData),
      description: `Catalyst Config`,
    },
  })

  // create garden data from plugin config
  const catalystBlogConfigFieldData = {
    postListTitle,
    displayPostListTitle,
  }
  createNode({
    ...catalystBlogConfigFieldData,
    id: `gatsby-theme-catalyst-blog-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystBlogConfig`,
      contentDigest: createContentDigest(catalystBlogConfigFieldData),
      content: JSON.stringify(catalystBlogConfigFieldData),
      description: `Catalyst Blog Config`,
    },
  })
}
