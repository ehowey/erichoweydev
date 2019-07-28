/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const siteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "images/catalyst-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage2: file(relativePath: { eq: "images/lwb.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage3: file(relativePath: { eq: "images/brisharpe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section
      sx={{
        backgroundColor: "primary",
        m: 0,
        py: "8rem",
        px: 0
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
              transform: "translateY(-3px)",
              backgroundColor: "#f5f5f5"
            }
          }}
          href="https://github.com/ehowey/gatsby-theme-catalyst-core"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            sx={{
              height: "200px"
            }}
            fluid={data.projectImage1.childImageSharp.fluid}
            alt="Gatsby Theme Catalyst"
          />
          <div
            sx={{
              padding: 2
            }}
          >
            <h4>Gatsby Catalyst Themes</h4>
            <p>
              A set of opinionated themes and starters I built to accelerate my
              own workflow when building new Gatsby projects. Uses Theme-UI for
              design tokens.
            </p>
            <p
              sx={{
                fontWeight: "bold",
                "::after": {
                  content: '"\\00A0 \\2192"'
                }
              }}
            >
              Check it out
            </p>
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
              transform: "translateY(-3px)",
              backgroundColor: "#f5f5f5"
            }
          }}
          href="https://www.lifewithbenjamin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            sx={{
              height: "200px"
            }}
            fluid={data.projectImage2.childImageSharp.fluid}
            alt="Life With Benjamin"
          />
          <div
            sx={{
              padding: 2
            }}
          >
            <h4>www.lifewithbenjamin.com</h4>
            <p>
              A personal blog and small business website for a creative
              professional who specializes in content creation, photography and
              videography.
            </p>
            <p
              sx={{
                fontWeight: "bold",
                "::after": {
                  content: '"\\00A0 \\2192"'
                }
              }}
            >
              Check it out
            </p>
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
              transform: "translateY(-3px)",
              backgroundColor: "#f5f5f5"
            }
          }}
          href="https://www.briannasharpe.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            sx={{
              height: "200px"
            }}
            fluid={data.projectImage3.childImageSharp.fluid}
            alt="Brianna Sharpe"
          />
          <div
            sx={{
              padding: 2
            }}
          >
            <h4>www.briannasharpe.com</h4>
            <p>
              A website to showcase Brianna's professional writing and yoga
              teaching. In the process of moving the site from Wordpress to
              Gatsby.
            </p>
            <p
              sx={{
                fontWeight: "bold",
                "::after": {
                  content: '"\\00A0 \\2192"'
                }
              }}
            >
              Check it out
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default siteSection;
