/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { triangles, darkTriangles } from "./patterns"
import { Button } from "@theme-ui/components"

const RecentWriting = () => {
  const data = useStaticQuery(graphql`
    {
      allCatalystPost(
        limit: 2
        sort: { fields: date, order: DESC }
        filter: { draft: { eq: false } }
      ) {
        edges {
          node {
            id
            title
            slug
            excerpt
          }
        }
      }
    }
  `)
  const posts = data.allCatalystPost.edges

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
          {posts.map(({ node }) => (
            <li key={node.id}>
              <Styled.h3>
                <Styled.a to={node.slug} as={Link}>
                  {node.title}
                </Styled.a>
              </Styled.h3>
              <Styled.p>{node.excerpt.substr(0, 140)}</Styled.p>
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
