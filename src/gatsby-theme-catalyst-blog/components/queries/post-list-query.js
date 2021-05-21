import React from "react"
import { graphql } from "gatsby"
import PostList from "../../../components/blog/post-list"

const EricPostListQuery = ({ data }) => {
  const { allCatalystPost } = data
  return <PostList posts={allCatalystPost.nodes} />
}

export const query = graphql`
  {
    allCatalystPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { draft: { ne: true }, published: { eq: true } }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        author
        authorLink
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        timeToRead
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default EricPostListQuery
