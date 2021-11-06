import React from "react"
import { graphql } from "gatsby"
import Category from "../blog/category-template"

const CategoryQuery = ({ data, pageContext }) => {
  const { allBlogPost } = data
  const category = pageContext.category
  return <Category posts={allBlogPost.nodes} category={category} />
}

export const query = graphql`
  query ($category: String) {
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { published: { eq: true }, categories: { in: [$category] } }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        subTitle
        author
        authorLink
        date(formatString: "MMMM DD, YYYY")
        categories
        timeToRead
        postType
      }
    }
  }
`

export default CategoryQuery
