import React from "react"
import { graphql } from "gatsby"
import CategoryList from "../blog/category-list-template"

const CategoryListQuery = ({ data }) => {
  return <CategoryList categories={data.categoryList.group} />
}

export const query = graphql`
  query {
    categoryList: allBlogPost(
      limit: 1000
      filter: { published: { eq: true } }
    ) {
      group(field: categories) {
        fieldValue
        totalCount
      }
    }
  }
`

export default CategoryListQuery
