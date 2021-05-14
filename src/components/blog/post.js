/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"
import PostFooter from "./post-footer"
import kebabCase from "lodash/kebabCase"
import { FaRegClock } from "react-icons/fa"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <Seo
      title={post.title}
      description={post.excerpt}
      image={post.socialImage.childImageSharp.Seo}
      keywords={post.keywords}
    />
    <article
      sx={{
        variant: "variants.postContainer",
        display: "grid",
        gridTemplateRows: [
          "150px auto",
          "250px auto",
          "150px 250px auto",
          null,
          null,
        ],
        gridTemplateColumns: "1fr minmax(0px, 768px) 1fr",
        justifyContent: "center",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      <GatsbyImage
        image={post.featuredImage.childImageSharp.gatsbyImageData}
        sx={{
          gridColumn: "1 / -1",
          gridRow: ["1 / 2", null, "1 / 3", null, null],
          zIndex: 10,
          width: "100%",
          variant: "variants.postImage",
        }}
        alt={post.title}
      />
      <div
        sx={{
          gridColumn: "2 / 3",
          gridRow: "2 / -1",
          zIndex: 20,
          bg: "background",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      >
        <span
          sx={{
            color: "textGray",
            fontSize: 0,
            fontStyle: "italic",
            ml: [3, null, 4, null, null],
          }}
        >
          {post.featuredImageCaption}
        </span>
        <div sx={{ p: [3, null, 4, null, null] }}>
          <Themed.ul
            aria-label="Categories"
            sx={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
              p: 0,
              m: 0,
            }}
          >
            {post.categories.map((category) => (
              <Themed.li
                key={category}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "wide",
                  color: "primary",
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
                <Themed.a
                  as={Link}
                  to={`/categories/${kebabCase(category)}/`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {category}
                </Themed.a>
              </Themed.li>
            ))}
          </Themed.ul>
          <Themed.h1
            sx={{
              textAlign: "center",
              fontSize: [5, 6, null, null, null],
              mt: 3,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "80px",
                pt: 3,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
                margin: "0 auto",
              },
              variant: "variants.postTitle",
            }}
          >
            {post.title}
          </Themed.h1>
          <Themed.p
            sx={{
              color: "textGray",
              fontSize: 1,
              textTransform: "uppercase",
              letterSpacing: "wider",
              textAlign: "center",
              m: 0,
              a: {
                color: "textGray",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              },
              variant: "variants.postMeta",
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
          <MDXRenderer>{post.body}</MDXRenderer>
          <PostFooter {...{ previous, next }} />
        </div>
      </div>
    </article>
  </Layout>
)

export default Post
