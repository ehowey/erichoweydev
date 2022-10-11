/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { Link, graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { triangles } from "./patterns"
import { truncate } from "lodash"

const RecentWriting = () => {
  const data = useStaticQuery(graphql`
    {
      allBlogPost(
        limit: 3
        sort: { fields: date, order: DESC }
        filter: { published: { eq: true } }
      ) {
        nodes {
          id
          title
          date(formatString: "MMMM D, YYYY")
          slug
          excerpt
        }
      }
    }
  `)
  const posts = data.allBlogPost.nodes

  return (
    <SectionWrapper id="writing" pattern={triangles}>
      <SectionHeader>Recent Writing</SectionHeader>
      <div
        sx={{
          maxWidth: "maxContentWidth",
          mt: 5,
          mx: "auto",
        }}
      >
        <ul
          sx={{
            m: 0,
            p: 0,
            listStyleType: "none",
          }}
        >
          {posts.map((post) => (
            <li
              key={post.slug}
              sx={{
                mb: 4,
              }}
            >
              <Themed.h3 sx={{ mb: 0 }}>
                <Link to={`/writing/${post.slug}`} sx={(t) => t.styles.a}>
                  {post.title}
                </Link>
              </Themed.h3>
              <Themed.p sx={{ color: "textGray", mt: 0, fontSize: 1 }}>
                {post.date}
              </Themed.p>
              <Themed.p>
                {truncate(post.excerpt, { length: 140, separator: " " })}
              </Themed.p>
            </li>
          ))}
        </ul>
        <Themed.p>
          <Link to="/writing/" sx={(t) => t.buttons.alt}>
            More Writing
          </Link>
        </Themed.p>
      </div>
    </SectionWrapper>
  )
}

export default RecentWriting
