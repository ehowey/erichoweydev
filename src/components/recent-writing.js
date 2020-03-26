/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { triangles, darkTriangles } from "./patterns"
import { Button } from "@theme-ui/components"
import { truncate } from "lodash"

const RecentWriting = () => {
  const data = useStaticQuery(graphql`
    {
      allCatalystPost(
        limit: 3
        sort: { fields: date, order: DESC }
        filter: { draft: { eq: false } }
      ) {
        nodes {
          id
          title
          slug
          excerpt
        }
      }
    }
  `)
  const posts = data.allCatalystPost.nodes

  return (
    <SectionWrapper
      id="writing"
      pattern={triangles}
      darkPattern={darkTriangles}
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
          {posts.map(post => (
            <li
              key={post.id}
              sx={{
                mb: 4,
              }}
            >
              <Styled.h3>
                <Styled.a to={post.slug} as={Link}>
                  {post.title}
                </Styled.a>
              </Styled.h3>
              <Styled.p>
                {truncate(post.excerpt, { length: 140, separator: " " })}
              </Styled.p>
            </li>
          ))}
        </ul>
        <Styled.p>
          <Button variant="alt" as={Link} to="/writing">
            More Writing
          </Button>
        </Styled.p>
      </div>
    </SectionWrapper>
  )
}

export default RecentWriting
