/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { triangles } from "./patterns"

const RecentWriting = () => {
  const data = useStaticQuery(graphql`
    {
      allCatalystPost(limit: 2, sort: { fields: date, order: DESC }) {
        edges {
          node {
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
    <SectionWrapper id="me" pattern={triangles}>
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
            <li>
              <Styled.h3>
                <Link
                  sx={{
                    color: "primary",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                  to={node.slug}
                >
                  {node.title}
                </Link>
              </Styled.h3>
              <Styled.p>{node.excerpt.substr(0, 140)}</Styled.p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}

export default RecentWriting
