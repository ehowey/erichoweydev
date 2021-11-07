/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WorkTechnologies = () => {
  const data = useStaticQuery(graphql`
    {
      logo1: file(relativePath: { eq: "gatsby-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo2: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo3: file(relativePath: { eq: "next-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo4: file(relativePath: { eq: "sanity-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo5: file(relativePath: { eq: "netlify-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
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
      <h3 className="visually-hidden">Technologies I work with</h3>
      <GatsbyImage
        image={data.logo2.childImageSharp.gatsbyImageData}
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        alt="React"
        imgStyle={{ objectFit: "contain" }}
      />
      <GatsbyImage
        image={data.logo1.childImageSharp.gatsbyImageData}
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        alt="GatsbyJS"
        imgStyle={{ objectFit: "contain" }}
      />
      <GatsbyImage
        image={data.logo3.childImageSharp.gatsbyImageData}
        sx={{
          width: ["42px", null, "65px", null, null],
        }}
        alt="NextJs"
      />
      <GatsbyImage
        image={data.logo4.childImageSharp.gatsbyImageData}
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        alt="Sanity.io"
        imgStyle={{ objectFit: "contain" }}
      />
      <GatsbyImage
        image={data.logo5.childImageSharp.gatsbyImageData}
        sx={{
          width: ["36px", null, "50px", null, null],
        }}
        alt="Netlify"
        imgStyle={{ objectFit: "contain" }}
      />
    </div>
  )
}
export default WorkTechnologies
