import * as React from "react"
import { graphql } from "gatsby"
import { Slice } from "gatsby"
import Seo from "../components/seo"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <div className="bg-eric-blue">
      <header className="px-8 py-16 relative">
        <div className="bg-blue-800 rounded-full w-8 h-8 block z-10" />
        <h1 className="text-[180px] font-black tracking-wide uppercase -ml-3 ">
          Eric Howey
        </h1>
        <p className="text-4xl -mt-10">
          I work at the intersection of caring, creativity and code.
        </p>
      </header>
      <main>
        <section className="py-8 px-8">
          <h2 className="uppercase font-bold text-[80px]">Writing</h2>
          {/* <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol> */}
        </section>
        <section className="py-8 px-8">
          <h2 className="uppercase font-bold text-[80px]">Work</h2>
        </section>
        <section className="py-8 px-8">
          <h2 className="uppercase font-bold text-[80px]">contact</h2>
        </section>
      </main>
      <Slice alias="footer" />
    </div>
  )
}

export default BlogIndex

export const Head = () => (
  <Seo title="Eric Howey, Calgary Based Web Developer" />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
