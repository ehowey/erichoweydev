/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const HelloImage1 = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "me-wide.jpg"}) {
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
        alt="Eric Howey relaxing with a piece of cow parsnip" />
      <figcaption
        sx={{
          color: "grey",
          fontSize: 0,
          textAlign: "center",
          mt: 1,
        }}
      >
        Playing outside with my daughter
      </figcaption>
    </figure>
  );
}

export default HelloImage1
