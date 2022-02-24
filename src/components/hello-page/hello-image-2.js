/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HelloImage2 = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "figma-process.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image = data.image.childImageSharp.gatsbyImageData

  return (
    <figure
      sx={{
        mx: 0,
        my: 4,
      }}
    >
      <GatsbyImage
        image={image}
        sx={{
          maxHeight: "400px",
          borderRadius: ["none", null, null, "4px", null],
          width: ["100vw", null, null, "85vw", "80vw"],
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: ["-50vw", null, null, "-42.5vw", "-40vw"],
          marginRight: ["-50vw", null, null, "-42.5vw", "-40vw"],
        }}
        alt="Figma design process for Briannasharpe.com"
      />
      <figcaption
        sx={{
          color: "grey",
          fontSize: 0,
          textAlign: "center",
          mt: 1,
        }}
      >
        Design process in Figma for briannasharpe.com
      </figcaption>
    </figure>
  )
}

export default HelloImage2
