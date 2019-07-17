/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

const siteFooter = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <footer
      sx={{
      padding: 3,
      backgroundColor: "footer.background",
      color: "footer.text"
      }}
      >
          <p>Created by <a href="mailto:eric@erichowey.dev">{data.site.siteMetadata.author}</a><br/>
          Illustrations by <a href="https://twitter.com/diana_valeanu">Diana Valeanu</a></p>
        </footer>
    )
}

export default siteFooter
