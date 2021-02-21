/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "absurd-eh-face.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper bg="secondary">
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: [
            "1fr",
            "180px minmax(auto, 400px)",
            "200px minmax(400px, 600px)",
            "220px 720px",
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
        <div>
          <Styled.h1
            sx={{
              fontSize: [4, null, null, 5, null],
              display: "inline",
              textTransform: "none",
              ":after": {
                content: "none",
              },
            }}
          >
            Hello and welcome!
          </Styled.h1>{" "}
          <Styled.p
            sx={{
              fontSize: [4, null, null, 5, null],
              fontFamily: "heading",
              m: 0,
              display: "inline",
            }}
          >
            My name is Eric Howey. I am a web developer and mental health
            therapist. I listen and care.
          </Styled.p>
          <div sx={{ mt: 4 }}>
            <Button
              variant="primary"
              as="a"
              href="#hire-me"
              sx={{
                fontSize: 3,
                px: 4,
                "::after": {
                  content: '"\\00A0 \\2192"',
                },
                ":hover::after, :active::after, :focus::after": {
                  transition: "all 0.2s ease-in-out",
                  pl: 2,
                },
              }}
            >
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
