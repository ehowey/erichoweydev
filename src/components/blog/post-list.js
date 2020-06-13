/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { FaRegClock } from "react-icons/fa"

const PostsList = ({ posts }) => {
  return (
    <Layout>
      <SEO
        title="writing"
        description="Writing, blog posts and digital musings by Eric Howey. My work focuses on the JAMStack, Gatsby, and Theme UI. There is an occasional sprinkling of mental health in here as well. Posts are updated over time as a kind of digital garden. Enjoy!"
      />
      <div
        sx={{
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          my: 5,
          variant: "variants.postListContainer",
        }}
      >
        {posts.map((post) => {
          const title = post.title || post.slug
          return (
            <article
              sx={{
                display: "flex",
                flexDirection: ["column", null, "row", null, null],
                alignItems: "flex-start",
                mx: 3,
                mb: 5,
                ":last-of-type": {
                  mb: 0,
                },
                variant: "variants.postListWrapper",
              }}
              key={post.slug}
            >
              <div sx={{ maxHeight: "100%" }}>
                <Link to={post.slug}>
                  <Img
                    sx={{
                      height: "auto",
                      width: "300px",
                      mb: 3,
                      variant: "variants.postListImage",
                    }}
                    fluid={post.featuredImage.childImageSharp.fluid}
                    alt={post.title}
                  />
                </Link>
              </div>
              <div sx={{}}>
                <Styled.p
                  sx={{
                    color: "darkgrey",
                    fontSize: 1,
                    textTransform: "uppercase",
                    letterSpacing: "wider",
                    m: 0,
                    a: {
                      color: "darkgrey",
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    },
                    variant: "variants.postListMeta",
                  }}
                >
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
                </Styled.p>
                <Styled.h2
                  sx={{
                    mt: 0,
                    variant: "variants.postListTitle",
                  }}
                >
                  <Styled.a as={Link} to={post.slug}>
                    {title}
                  </Styled.a>
                </Styled.h2>
                <Styled.p
                  sx={{
                    variant: "variants.postListExcerpt",
                  }}
                >
                  {post.excerpt}
                </Styled.p>
                <Styled.a
                  sx={{
                    color: "primary",
                    fontWeight: "bold",
                    bg: "transparent",
                    border: "none",
                    px: 0,
                    "::after": {
                      content: '"\\00A0 \\2192"',
                    },
                    ":hover": {
                      textDecoration: "underline",
                      bg: "transparent",
                      border: "none",
                    },
                    variant: "variants.postListReadmore",
                  }}
                  as={Link}
                  to={post.slug}
                  variant="readmore"
                >
                  Read More
                </Styled.a>
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default PostsList
