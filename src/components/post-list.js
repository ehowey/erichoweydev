/** @jsx jsx */
import { jsx } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import PostListContainer from "./post-list/post-list-container"
import PostListWrapper from "./post-list/post-list-wrapper"
import PostListTitle from "./post-list/post-list-title"
import PostListImage from "./post-list/post-list-image"
import PostListMeta from "./post-list/post-list-meta"
import PostListExcerpt from "./post-list/post-list-excerpt"
import PostListReadmore from "./post-list/post-list-readmore"
import { FaRegClock } from "react-icons/fa"

const PostsList = ({ posts }) => {
  return (
    <Layout>
      <SEO
        title="writing"
        description="Writing, blog posts and digital musings by Eric Howey. My work focuses on the JAMStack, Gatsby, and Theme UI. There is an occasional sprinkling of mental health in here as well. Posts are updated over time as a kind of digital garden. Enjoy!"
      />
      <PostListContainer>
        {posts.map((post) => {
          const title = post.title || post.slug
          return (
            <PostListWrapper key={post.slug}>
              <PostListImage
                link={post.slug}
                image={post.featuredImage.childImageSharp.fluid}
                altText={post.title}
              />
              <PostListMeta>
                <a
                  href={post.authorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.author}
                </a>{" "}
                &bull; {post.date} &bull;{" "}
                <FaRegClock
                  sx={{
                    position: "relative",
                    top: "0.125em",
                  }}
                />{" "}
                {post.timeToRead} Min
              </PostListMeta>
              <PostListTitle link={post.slug}>{title}</PostListTitle>
              <PostListExcerpt>{post.excerpt}</PostListExcerpt>
              <PostListReadmore link={post.slug}>Read more</PostListReadmore>
            </PostListWrapper>
          )
        })}
      </PostListContainer>
    </Layout>
  )
}

export default PostsList
