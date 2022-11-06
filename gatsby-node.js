// const { createFilePath } = require(`gatsby-source-filesystem`)
// const { createContentDigest } = require(`gatsby-core-utils`)
// const kebabCase = require("just-kebab-case")

// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes, createFieldExtension } = actions

//   const mdxResolverPassthrough =
//     (fieldName) => async (source, args, context, info) => {
//       const type = info.schema.getType(`Mdx`)
//       const mdxNode = context.nodeModel.getNodeById({
//         id: source.parent,
//       })
//       const resolver = type.getFields()[fieldName].resolve
//       const result = await resolver(mdxNode, args, context, {
//         fieldName,
//       })
//       return result
//     }

//   createFieldExtension({
//     name: `defaultFalse`,
//     extend() {
//       return {
//         resolve(source, args, context, info) {
//           if (source[info.fieldName] == null) {
//             return false
//           }
//           return source[info.fieldName]
//         },
//       }
//     },
//   })

//   const blogPostTypes = {
//     name: `BlogPost`,
//     fields: {
//       title: { type: `String!` },
//       subTitle: { type: `String` },
//       author: { type: `String` },
//       authorLink: { type: `String` },
//       published: { type: `Boolean!`, extensions: { defaultFalse: {} } },
//       slug: { type: `String!` },
//       postType: { type: `String` },
//       date: { type: `Date!`, extensions: { dateformat: {} } },
//       categories: { type: `[String]!` },
//       keywords: { type: `[String]!` },
//       featuredImage: { type: `File`, extensions: { fileByRelativePath: {} } },
//       featuredImageCaption: { type: `String` },
//       socialImage: { type: `File`, extensions: { fileByRelativePath: {} } },
//       body: { type: `String!`, resolve: mdxResolverPassthrough(`body`) },
//       excerpt: {
//         type: `String!`,
//         args: {
//           pruneLength: {
//             type: `Int`,
//             defaultValue: 300,
//           },
//         },
//         resolve: mdxResolverPassthrough(`excerpt`),
//       },
//       timeToRead: {
//         type: `Int`,
//         resolve: mdxResolverPassthrough(`timeToRead`),
//       },
//     },
//     interfaces: [`Node`],
//   }

//   createTypes(schema.buildObjectType(blogPostTypes))
// }

// // When an MDX node is created, we will also create a blog post node.
// exports.onCreateNode = async ({ node, actions, getNode, createNodeId }) => {
//   const { createNode, createParentChildLink } = actions

//   // Relative path for where the blog posts are stored
//   const contentPath = `content/posts/`

//   // Make sure it's an MDX node
//   if (node.internal.type !== `Mdx`) {
//     return
//   }

//   // Get source field
//   const fileNode = getNode(node.parent)
//   const source = fileNode.sourceInstanceName // resolves to 'posts'

//   // If it is an MDX type, and is sourced from posts
//   if (node.internal.type === `Mdx` && source === "posts") {
//     // Source the slug, based on slug in frontmatter or based on filepath
//     // e.g. my-great-blog-post
//     // Note this purposefully leaves out any leading or trailing slashes
//     let slug
//     if (node.frontmatter.slug) {
//       slug = node.frontmatter.slug
//     } else {
//       const filePath = createFilePath({
//         node: fileNode,
//         getNode,
//         basePath: contentPath,
//         trailingSlash: false,
//       })
//       slug = filePath
//     }

//     // Remove leading slash and any other slashes
//     slug = slug.replace(/\//g, "")

//     const blogFieldData = {
//       title: node.frontmatter.title,
//       subTitle: node.frontmatter.subTitle,
//       author: node.frontmatter.author,
//       authorLink: node.frontmatter.authorLink,
//       categories: node.frontmatter.categories || [],
//       slug,
//       date: node.frontmatter.date,
//       keywords: node.frontmatter.keywords || [],
//       featuredImage: node.frontmatter.featuredImage,
//       featuredImageCaption: node.frontmatter.featuredImageCaption,
//       socialImage: node.frontmatter.socialImage,
//       published: node.frontmatter.published,
//       postType: node.frontmatter.postType || "article",
//     }

//     const blogPostNodeId = createNodeId(`${node.id} >>> BlogPost`)

//     await createNode({
//       ...blogFieldData,
//       // Required fields.
//       id: blogPostNodeId,
//       parent: node.id,
//       children: [],
//       internal: {
//         type: `BlogPost`,
//         contentDigest: createContentDigest(blogFieldData),
//         content: JSON.stringify(blogFieldData),
//         description: `Blog post sourced from MDX content.`,
//       },
//     })
//     createParentChildLink({ parent: node, child: getNode(blogPostNodeId) })
//   }
// }

// // Post query templates are simply data-fetching wrappers that import components
// const PostQuery = require.resolve(`./src/components/blog/post-query`)
// const CategoryQuery = require.resolve(`./src/components/blog/category-query`)

// // Create the blog post pages because we need page context passed down
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Root path  the root path of this is www.mysite.com/rootPath/blogPostSlug
//   const rootPath = "writing"

//   // Get all the blog posts
//   const result = await graphql(`
//     {
//       blogPosts: allBlogPost(
//         sort: { fields: [date, title], order: DESC }
//         limit: 1000
//         filter: { published: { eq: true } }
//       ) {
//         nodes {
//           id
//           slug
//           internal {
//             contentFilePath
//           }
//         }
//       }
//       categoryList: allBlogPost(filter: { published: { eq: true } }) {
//         group(field: categories) {
//           fieldValue
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panic(result.errors)
//   }

//   const posts = result.data.blogPosts.nodes
//   const categories = result.data.categoryList.group

//   // Create a page for each Post
//   posts.forEach((post, index) => {
//     const next = index === posts.length - 1 ? null : posts[index + 1]
//     const previous = index === 0 ? null : posts[index - 1]
//     const { slug } = post
//     const postPath = `/${rootPath}/${slug}/`
//     createPage({
//       path: postPath,
//       component: `${PostQuery}?__contentFilePath=${post.internal.contentFilePath}`,
//       // component: PostQuery,
//       context: {
//         id: post.id,
//         previousId: previous ? previous.id : undefined,
//         nextId: next ? next.id : undefined,
//       },
//     })
//   })

//   // Create the category pages
//   categories.forEach((category) => {
//     createPage({
//       path: `/categories/${kebabCase(category.fieldValue)}/`,
//       component: CategoryQuery,
//       context: {
//         category: category.fieldValue,
//       },
//     })
//   })
// }
