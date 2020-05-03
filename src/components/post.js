/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostContainer from "./post/post-container"
import PostTitle from "./post/post-title"
import PostMeta from "./post/post-meta"
import PostImage from "./post/post-image"
import PostFooter from "./post/post-footer"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <PostContainer>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage.childImageSharp.seo}
        keywords={post.keywords}
      />
      <PostImage
        image={post.featuredImage.childImageSharp.fluid}
        altText={post.title}
      />
      <div
        sx={{
          gridColumn: "2 / 3",
          gridRow: ["1 / -1", "2 / -1", null, null, null],
          zIndex: 20,
          bg: "background",
          p: [3, null, 4, null, null],
        }}
      >
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <a href={post.authorLink} target="_blank" rel="noopener noreferrer">
            {post.author}
          </a>{" "}
          &bull; {post.date}
        </PostMeta>
        <MDXRenderer>{post.body}</MDXRenderer>
        <PostFooter {...{ previous, next }} />
      </div>
    </PostContainer>
  </Layout>
)

export default Post
