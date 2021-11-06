/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { triangles, darkTriangles } from "./patterns"
import { Button } from "@theme-ui/components"
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
    <SectionWrapper
      id="writing"
      pattern={triangles}
      darkpattern={darkTriangles}
    >
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
              key={post.id}
              sx={{
                mb: 4,
              }}
            >
              <Themed.h3 sx={{ mb: 0 }}>
                <Themed.a to={`/writing/${post.slug}`} as={Link}>
                  {post.title}
                </Themed.a>
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
          <Button variant="alt" as={Link} to="/writing">
            More Writing
          </Button>
        </Themed.p>
      </div>
    </SectionWrapper>
  )
}

export default RecentWriting
