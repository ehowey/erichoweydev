/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import { rain } from "./patterns"

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
      projectImage2: file(relativePath: { eq: "work-lwb.png" }) {
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
    <SectionWrapper id="work" bg="accent" pattern={rain}>
      <SectionHeader>Selected Work</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "1440px",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <WorkCard
          link="https://github.com/ehowey/gatsby-theme-catalyst"
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
              writing and brand. Built using GatsbyJS and Catalyst Themes."
        />
        <WorkCard
          link="https://www.lifewithbenjamin.com/"
          image={data.projectImage2.childImageSharp.fluid}
          title="www.lifewithbenjamin.com"
          description="A  small business website for a creative
              professional who specializes in content creation, photography and
              videography. Built using Wordpress and WPRig."
        />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["300px", null, "400px", null, null],
          margin: "0 auto",
          pt: 5,
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
