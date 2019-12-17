/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { plus } from "./patterns"
import Button from "./button"

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
  return (
    <SectionWrapper id="contact" pattern={plus}>
      <SectionHeader>Let's Talk</SectionHeader>
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
          <Styled.h3>
            I'm ready to listen! Inspired idea? New direction? Creating
            something amazing?
          </Styled.h3>

          <Styled.p>
            Let me help you built a fast, secure and robust web presence that
            promotes your brand and achieves your business goals. Establishing
            an open and collaborative relationship is critical to developing a
            final product everyone is happy with it.
          </Styled.p>

          <Styled.p>
            The best way to start the conversation is via email. We will then
            connect in person (if geography allows it) or over the phone to talk
            in more detail about your ideas. I am excited to start talking!
          </Styled.p>
          <Styled.a as={Button} href="mailto:eric@erichowey.dev">
            Email Me
          </Styled.a>
        </div>
        <Img
          sx={{
            transform: "scaleX(-1)",
            gridColumn: ["1 / -1", "1 / 3", null, null, null],
            gridRow: "1 / 2",
            opacity: ["0.1", "1", null, null, null],
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
            background: "linear-gradient(90deg, transparent, #ffffff)",
            backgroundSize: "cover",
          }}
        />
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
