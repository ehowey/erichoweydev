/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import Seo from "../../utils/seo"
import Layout from "../layout/layout"

const TagPage = ({ posts, tag }) => {
  return (
    <Layout>
      <Seo title={"Tag: " + tag} />
      <Themed.h1>Tag: {tag}</Themed.h1>
      <Themed.ul>
        {posts.map((post) => (
          <Themed.li key={post.slug}>
            <Themed.p>
              <Themed.a as={Link} to={post.slug} sx={{ fontSize: 3 }}>
                {post.title}
              </Themed.a>
              <br />
              {post.excerpt}
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default TagPage
