import React from "react"
import { graphql } from "gatsby"
import PostList from "../blog/post-list"

const EricPostListQuery = ({ data }) => {
  const { allBlogPost } = data
  return <PostList posts={allBlogPost.nodes} />
}

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
        date(formatString: "MMMM DD, YYYY")
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
