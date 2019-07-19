/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "images/lwb.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      projectImage2: file(relativePath: { eq: "images/brisharpe.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      projectImage3: file(relativePath: { eq: "images/gatsby-2.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
    }
    `)
    return (
            <section
            sx={{
            backgroundColor: "primary",
            my: 5,
            mx: 0,
            py: 5,
            px: 0,
            }}
            id="work"
            >
                <div
                sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "auto",
                gridGap: 5,
                maxWidth: "1440px",
                margin: "0 auto",
                padding: ["0 1rem", null, "0 2rem"]
                }}
                >
                  <a
                  sx={{
                    gridColumn: ["1 / -1", null, "auto"],
                    minWidth: "200px",
                    maxWidth: "650px",
                    boxShadow: "0 2px 15px rgba(0,0,0,.1)",
                    transition: "all .15s ease-in-out",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: "#fff",
                    margin: "0 auto",

                    ":hover": {
                      boxShadow: "0 2px 30px rgba(0,0,0,.15)",
                      transform: "translateY(-3px)"
                    }
                  }}
                  href="https://www.lifewithbenjamin.com/"
                  >
                    <Img
                    sx={{
                      height: "200px"
                    }}
                    fluid={data.projectImage1.childImageSharp.fluid} 
                    alt="Life With Benjamin"
                    />
                    <div
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: "2rem 1rem 1rem 1rem"
                    }}
                    >
                    <h4>www.lifewithbenjamin.com</h4>
                    <p>A personal blog and small business website for a creative professional who specializes in content creation, photography and videography.</p>
                    </div>
                  </a>
                  <a
                  sx={{
                    gridColumn: ["1 / -1", null, "auto"],
                    minWidth: "200px",
                    maxWidth: "650px",
                    boxShadow: "0 2px 15px rgba(0,0,0,.1)",
                    transition: "all .15s ease-in-out",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: "#fff",
                    margin: "0 auto",

                    ":hover": {
                      boxShadow: "0 2px 30px rgba(0,0,0,.15)",
                      transform: "translateY(-3px)"
                    }
                  }}
                  href="https://www.lifewithbenjamin.com/"
                  >
                    <Img
                    sx={{
                      height: "200px"
                    }}
                    fluid={data.projectImage1.childImageSharp.fluid} 
                    alt="Life With Benjamin"
                    />
                    <div
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: "2rem 1rem 1rem 1rem"
                    }}
                    >
                    <h4>www.lifewithbenjamin.com</h4>
                    <p>A personal blog and small business website for a creative professional who specializes in content creation, photography and videography.</p>
                    </div>
                  </a>
                  <a
                  sx={{
                    gridColumn: ["1 / -1", null, "auto"],
                    minWidth: "200px",
                    maxWidth: "650px",
                    boxShadow: "0 2px 15px rgba(0,0,0,.1)",
                    transition: "all .15s ease-in-out",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: "#fff",
                    margin: "0 auto",

                    ":hover": {
                      boxShadow: "0 2px 30px rgba(0,0,0,.15)",
                      transform: "translateY(-3px)"
                    }
                  }}
                  href="https://www.lifewithbenjamin.com/"
                  >
                    <Img
                    sx={{
                      height: "200px"
                    }}
                    fluid={data.projectImage1.childImageSharp.fluid} 
                    alt="Life With Benjamin"
                    />
                    <div
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: "2rem 1rem 1rem 1rem"
                    }}
                    >
                    <h4>www.lifewithbenjamin.com</h4>
                    <p>A personal blog and small business website for a creative professional who specializes in content creation, photography and videography.</p>
                    </div>
                  </a>
                </div>
            </section>
    )
}

export default siteSection
