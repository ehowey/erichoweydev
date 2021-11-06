/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../utils/seo"
import Layout from "../components/layout/layout"
import { FaRegClock } from "react-icons/fa"
import { darken } from "@theme-ui/color"

const PostsList = ({ data }) => {
  const posts = data.allBlogPost.nodes
  return (
    <Layout>
      <Seo
        title="Writing"
        description="Writing, blog posts and digital musings by Eric Howey. My work focuses on the Jamstack, Gatsby, SANITY and Theme UI. There is an occasional sprinkling of mental health in here as well. Enjoy!"
      />
      <div
        sx={{
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          mb: 5,
          variant: "variants.postListContainer",
        }}
      >
        <div
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: "1920px",
          }}
        >
          <div
            sx={{
              mx: [3, 4, null, 5, null],
              display: "grid",
              gridTemplateColumns: [
                "1fr",
                null,
                "1fr 1fr",
                "1fr 1fr 1fr",
                null,
              ],
              gridGap: 4,
              justifyContent: "center",
              "@media screen and (min-width: 120em)": {
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
              },
            }}
          >
            <Themed.h1>Writing</Themed.h1>
            {posts.map((post) => {
              const title = post.title || post.slug
              return (
                <article
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "accent",
                    textDecoration: "none",
                    color: "text",
                    position: "relative",
                    top: "0",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    transition: "all .2s ease",
                    a: {
                      color: "text",
                      textDecoration: "none",
                    },
                    ":hover": {
                      top: "-4px",
                      boxShadow: "0 4px 5px rgba(0,0,0,0.2)",
                      bg: darken("accent", 0.05),
                    },
                    ":nth-of-type(1)": {
                      gridColumn: ["1 / -1", null, "1 / span 2", null, null],
                      h2: {
                        fontSize: [3, null, 5, null, null],
                      },
                      ".featuredImage": {
                        height: ["250px", null, "350px", null, null],
                      },
                    },
                    variant: "variants.postListWrapper",
                  }}
                  key={post.slug}
                >
                  <Link to={post.slug}>
                    <GatsbyImage
                      image={post.featuredImage.childImageSharp.gatsbyImageData}
                      className="featuredImage"
                      sx={{
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        height: "250px",
                        mb: 3,
                        variant: "variants.postListImage",
                      }}
                      alt={post.title}
                    />
                    <div
                      sx={{
                        p: 3,
                      }}
                    >
                      <Themed.ul
                        sx={{
                          display: "flex",
                          listStyle: "none",
                          m: 0,
                          p: 0,
                        }}
                      >
                        {post.categories.map((category) => (
                          <Themed.li
                            key={category}
                            sx={{
                              textTransform: "uppercase",
                              letterSpacing: "wide",
                              color: "textGray",
                              fontSize: 1,
                              fontWeight: "bold",
                              "::after": {
                                content: `"\\2022"`,
                                px: 2,
                              },
                              ":last-of-type": {
                                "::after": {
                                  content: "none",
                                },
                              },
                            }}
                          >
                            {category}
                          </Themed.li>
                        ))}
                      </Themed.ul>
                      <Themed.h2
                        sx={{
                          mt: 1,
                          fontSize: 3,
                          color: "primary",
                          variant: "variants.postListTitle",
                        }}
                      >
                        {title}
                      </Themed.h2>
                      <Themed.p
                        sx={{
                          color: "textGray",
                          fontSize: 1,
                          textTransform: "uppercase",
                          letterSpacing: "wider",
                          m: 0,
                          a: {
                            color: "textGray",
                            textDecoration: "none",
                            ":hover": {
                              textDecoration: "underline",
                            },
                          },
                          variant: "variants.postListMeta",
                        }}
                      >
                        {post.date} &bull;{" "}
                        <FaRegClock
                          sx={{
                            position: "relative",
                            top: "0.125em",
                          }}
                        />{" "}
                        {post.timeToRead} Min
                      </Themed.p>
                      <Themed.p
                        sx={{
                          variant: "variants.postListExcerpt",
                        }}
                      >
                        {post.excerpt}
                      </Themed.p>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostsList

export const query = graphql`
  {
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { published: { eq: true } }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        author
        authorLink
        date(formatString: "MMMM D, YYYY")
        categories
        timeToRead
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
