/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ButtonPrimaryAnchor from "../../components/button-primary-anchor"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "absurd-eh-face.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section
      sx={{
        bg: "accent",
        px: 3,
        py: 5,
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: [
            "1fr",
            "180px minmax(auto, 400px)",
            "200px minmax(400px, 600px)",
            null,
            null,
          ],
          gridGap: 4,
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Img
          sx={{
            width: ["200px", "100%", null, null, null],
            height: ["200px", "100%", null, null, null],
          }}
          fluid={data.welcomeImage.childImageSharp.fluid}
          alt="Eric Howey"
          imgStyle={{ objectFit: "contain" }}
        />
        <Styled.p
          sx={{
            fontSize: 4,
            m: 0,
            textAlign: ["left", null, "justify", null, null],
          }}
        >
          <span sx={{ fontWeight: "bold" }}>Hello and Welcome!</span> My name is
          Eric Howey. I am a web developer and mental health therapist. I listen
          and care.
        </Styled.p>
      </div>
    </section>
  )
}

export default SiteSection
