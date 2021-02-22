/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { contours, darkContours } from "./patterns"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage1: file(relativePath: { eq: "absurd-lightbulb-head.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage2: file(relativePath: { eq: "absurd-grad.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage3: file(relativePath: { eq: "absurd-race.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    <SectionWrapper id="me" pattern={contours} darkpattern={darkContours}>
      <SectionHeader>About Me</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "1024px",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["2 / 3", null, "1 / 2", null, null],
          }}
        >
          <Styled.h3 sx={{ mt: 0 }}>I built my first website in 1998</Styled.h3>
          <Styled.p>It sucked.</Styled.p>
          <Styled.p>
            A lot has changed since then. I develop kickass websites using
            modern web technologies. I can grow facial hair and I have two super
            awesome kids. It <i>really</i> has changed.
          </Styled.p>
        </div>
        <Img
          sx={{
            width: ["250px", "300px", "100%", null, null],
            height: "100%",
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["1 / 2", null, "1 / 2", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.aboutImage1.childImageSharp.fluid}
          alt="A fun face"
          imgStyle={{ objectFit: "contain" }}
        />

        <div
          sx={{
            gridColumn: ["1 / -1", null, "2 / -1", null, null],
            gridRow: ["4 / 5", null, "3 / 4", null, null],
          }}
        >
          <Styled.h3>By passion a frontend web developer</Styled.h3>
          <Styled.p>
            I have degrees in philosophy and social work, not computer science.
          </Styled.p>
          <Styled.p>
            I enjoy the juxtaposition between creating websites and my full time
            job as a mental health therapist. Fixing a line of code is
            reassuringly certain when contrasted with the nuance of human
            experience.
          </Styled.p>
        </div>
        <Img
          sx={{
            width: ["250px", "300px", "100%", null, null],
            height: "100%",
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "1 / 2", null, null],
            gridRow: ["3 / 4", null, "3 / 4", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.aboutImage2.childImageSharp.fluid}
          alt="A picture of a grad cap"
          imgStyle={{ objectFit: "contain" }}
        />

        <div
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["6 / 7", null, "4 / 5", null, null],
          }}
        >
          <Styled.h3>Slow is smooth, smooth is fast</Styled.h3>
          <Styled.p>I don’t do rushed.</Styled.p>
          <Styled.p>
            Building an engaging, performant and accessible website is an
            intentional process. It requires problem solving and creativity. I
            only work on one project at a time and appreciate the artisanship of
            the finished product.
          </Styled.p>
        </div>
        <Img
          sx={{
            width: ["250px", "300px", "100%", null, null],
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["5 / 6", null, "4 / 5", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          fluid={data.aboutImage3.childImageSharp.fluid}
          alt="A slow race"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
