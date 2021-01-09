/** @jsx jsx */
import { jsx, Button, Styled } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import { rain, darkRain } from "./patterns"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "work-catalyst.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage2: file(relativePath: { eq: "work-mmbc.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage3: file(relativePath: { eq: "work-bsharpe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
      logo3: file(relativePath: { eq: "js-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <SectionWrapper
      id="work"
      bg="secondary"
      pattern={rain}
      darkPattern={darkRain}
    >
      <SectionHeader>Selected Work</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "maxPageWidth",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <WorkCard
          link="https://www.mindmapbc.ca/"
          image={data.projectImage2.childImageSharp.fluid}
          title="www.mindmapbc.ca"
          description="A custom made database of mental health resources. Includes geolocation, mapping, and advanced search functionality. Built using Gatsby and SANITY."
        />
        <WorkCard
          link="https://www.gatsbycatalyst.com"
          image={data.projectImage1.childImageSharp.fluid}
          title="Gatsby Theme Catalyst"
          description="A set of opinionated themes and starters I built to accelerate my
              own workflow when building new Gatsby projects. Uses ThemeUI and MDX. Free and open
              source."
        />
        <WorkCard
          link="https://www.briannasharpe.com/"
          image={data.projectImage3.childImageSharp.fluid}
          title="www.briannasharpe.com"
          description="A portfolio website to showcase Brianna's freelance
              writing and personal brand. Built using Gatsby and SANITY."
        />
      </div>
      <div
        sx={{
          mt: 4,
          display: "grid",
          placeItems: "center",
        }}
      >
        {" "}
        <Styled.h3
          sx={{
            mt: 0,
          }}
        >
          Curious?
        </Styled.h3>
        <Styled.p
          sx={{
            mt: 0,
            mb: 4,
          }}
        >
          Follow the journey from hello to finished product.
        </Styled.p>
        <Button variant="primary" as={Link} to="/it-starts-with-hello/">
          It starts with hello
        </Button>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["300px", null, "400px", null, null],
          mx: "auto",
          mt: 4,
          mb: 0,
        }}
      >
        <Img
          sx={{
            width: ["60px", null, "80px", null, null],
          }}
          fluid={data.logo1.childImageSharp.fluid}
          alt="Gatsby Theme Catalyst"
        />
        <Img
          sx={{
            width: ["60px", null, "80px", null, null],
          }}
          fluid={data.logo2.childImageSharp.fluid}
          alt="Gatsby Theme Catalyst"
        />
        <Img
          sx={{
            width: ["60px", null, "80px", null, null],
          }}
          fluid={data.logo3.childImageSharp.fluid}
          alt="Gatsby Theme Catalyst"
        />
      </div>
    </SectionWrapper>
  )
}
export default SiteSection
