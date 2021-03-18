/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const WorkTechnologies = () => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "gatsby-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo2: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo3: file(relativePath: { eq: "next-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo4: file(relativePath: { eq: "sanity-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo5: file(relativePath: { eq: "netlify-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: ["320px", null, "500px", null, null],
        mx: "auto",
        mt: 5,
        mb: 0,
      }}
    >
      <Img
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        fluid={data.logo2.childImageSharp.fluid}
        alt="React"
        imgStyle={{ objectFit: "contain" }}
      />
      <Img
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        fluid={data.logo1.childImageSharp.fluid}
        alt="GatsbyJS"
        imgStyle={{ objectFit: "contain" }}
      />
      <Img
        sx={{
          width: ["42px", null, "65px", null, null],
        }}
        fluid={data.logo3.childImageSharp.fluid}
        alt="NextJs"
      />
      <Img
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        fluid={data.logo4.childImageSharp.fluid}
        alt="Sanity"
        imgStyle={{ objectFit: "contain" }}
      />
      <Img
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        fluid={data.logo5.childImageSharp.fluid}
        alt="Netlify"
        imgStyle={{ objectFit: "contain" }}
      />
    </div>
  )
}
export default WorkTechnologies
