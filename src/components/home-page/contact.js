/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { plus, darkPlus } from "./patterns"
import { Button } from "@theme-ui/components"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage1: file(relativePath: { eq: "absurd-fish-talking.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    <SectionWrapper
      id="contact"
      pattern={plus}
      darkpattern={darkPlus}
      sx={{ mb: -5 }}
    >
      <SectionHeader>I'm ready to listen</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", "2 / 6", null, null, null],
            gridRow: "1 / 2",
            zIndex: 5,
          }}
        >
          <Styled.h3>Inspired idea? Creating something special?</Styled.h3>

          <Styled.p>
            Let me help you succeed with a welcoming, fast, and modern web
            presence that achieves your business goals and promotes your brand.
          </Styled.p>

          <Styled.p>
            The best way to begin the conversation is via{" "}
            <Styled.a href="mailto:eric@erichowey.dev">email</Styled.a>. We can
            then talk in person or over the phone to discuss your vision in more
            detail. I am excited to chat!
          </Styled.p>
          <Button variant="primary" as="a" href="mailto:eric@erichowey.dev">
            Email Me
          </Button>
        </div>
        <Img
          sx={{
            transform: "scaleX(-1)",
            gridColumn: ["1 / -1", "1 / 3", null, null, null],
            gridRow: "1 / 2",
            opacity: ["0.05", "1", null, null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.contactImage1.childImageSharp.fluid}
          alt="Talking Fish"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          sx={{
            gridColumn: "1 / 3",
            gridRow: "1 / 2",
            zIndex: "3",
            display: ["none", "block", null, null, null],
            background: isDark
              ? "linear-gradient(90deg, transparent, #1a202c 60%)"
              : "linear-gradient(90deg, transparent, #ffffff 60%)",
            backgroundSize: "cover",
          }}
        />
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
