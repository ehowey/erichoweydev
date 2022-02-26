/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { contours, darkContours } from "./patterns"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      aboutImage1: file(relativePath: { eq: "absurd-lightbulb-head.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      aboutImage2: file(relativePath: { eq: "absurd-grad.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      aboutImage3: file(relativePath: { eq: "absurd-race.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)

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
          <Themed.h3 sx={{ fontSize: [3, 4, null, null, null] }}>
            I built my first website in 1998
          </Themed.h3>
          <Themed.p>It sucked.</Themed.p>
          <Themed.p>
            A lot has changed since then. I develop kickass websites using
            modern web technologies. I can grow facial hair and I have two super
            awesome kids. It <i>really</i> has changed.
          </Themed.p>
        </div>
        <GatsbyImage
          image={data.aboutImage1.childImageSharp.gatsbyImageData}
          sx={{
            width: ["250px", "300px", "100%", null, null],
            height: "100%",
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["1 / 2", null, "1 / 2", null, null],
          }}
          alt="A fun face"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          sx={{
            gridColumn: ["1 / -1", null, "2 / -1", null, null],
            gridRow: ["4 / 5", null, "3 / 4", null, null],
          }}
        >
          <Themed.h3 sx={{ fontSize: [3, 4, null, null, null] }}>
            By passion a frontend web developer
          </Themed.h3>
          <Themed.p>I have degrees in philosophy and social work.</Themed.p>
          <Themed.p>
            I enjoy the juxtaposition between creating websites and my job as a
            mental health therapist. Fixing a line of code is reassuringly
            certain when contrasted with the nuance of human experience.
          </Themed.p>
        </div>
        <GatsbyImage
          image={data.aboutImage2.childImageSharp.gatsbyImageData}
          sx={{
            width: ["250px", "300px", "100%", null, null],
            height: "100%",
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "1 / 2", null, null],
            gridRow: ["3 / 4", null, "3 / 4", null, null],
          }}
          alt="A picture of a grad cap"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["6 / 7", null, "4 / 5", null, null],
          }}
        >
          <Themed.h3 sx={{ fontSize: [3, 4, null, null, null] }}>
            Slow is smooth, smooth is fast
          </Themed.h3>
          <Themed.p>I don’t do rushed.</Themed.p>
          <Themed.p>
            Building an engaging, fast and accessible website is a collaborative
            process. It requires communication, problem solving and creativity.
            I enjoy taking the time to get things right.
          </Themed.p>
        </div>
        <GatsbyImage
          image={data.aboutImage3.childImageSharp.gatsbyImageData}
          sx={{
            width: ["250px", "300px", "100%", null, null],
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["5 / 6", null, "4 / 5", null, null],
          }}
          alt="A slow race"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
