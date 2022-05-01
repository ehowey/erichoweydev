/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../layout/layout"

const CategoryPage = ({ posts, category }) => {
  return (
    <Layout>
      <Seo title={"Category: " + category} />
      <Themed.h1>Category: {category}</Themed.h1>
      <Themed.ul>
        {posts.map((post) => (
          <Themed.li key={post.slug}>
            <Themed.p>
              <Link
                to={`/writing/${post.slug}/`}
                sx={(t) => Object.assign(t.styles.a, { fontSize: 3 })}
              >
                {post.title}
              </Link>
              <br />
              {post.excerpt}
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoryPage
