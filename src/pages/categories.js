/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link, graphql } from "gatsby"
import Seo from "../utils/seo"
import Layout from "../components/layout/layout"
import kebabCase from "just-kebab-case"

const CategoriesPage = ({ data }) => {
  const categories = data.categoryList.group
  return (
    <Layout>
      <Seo title="Categories" />
      <Themed.ul>
        <Themed.h1>Categories</Themed.h1>
        {categories.map((category) => (
          <Themed.li key={category.fieldValue}>
            <Themed.p>
              <Themed.a
                as={Link}
                to={`/categories/${kebabCase(category.fieldValue)}/`}
                sx={{ fontSize: 3 }}
              >
                {category.fieldValue}
              </Themed.a>{" "}
              &mdash; {category.totalCount} posts
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoriesPage

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
