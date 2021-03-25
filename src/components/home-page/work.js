/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import WorkTechnologies from "./work-technologies"
import WorkCTA from "./work-cta"
import WorkTestimonial from "./work-testimonial"
import { rain, darkRain } from "./patterns"

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    {
      projectImage1: file(relativePath: { eq: "work-catalyst.png" }) {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
      projectImage2: file(relativePath: { eq: "work-mmbc-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
      projectImage3: file(relativePath: { eq: "work-bsharpe.png" }) {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
    }
  `)
  return (
    <SectionWrapper
      id="work"
      bg="secondary"
      pattern={rain}
      darkpattern={darkRain}
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
          image={data.projectImage2.childImageSharp.gatsbyImageData}
          title="www.mindmapbc.ca"
          description="A custom made database of mental health resources. Includes geolocation, mapping, and advanced search functionality. Built using Gatsby and SANITY."
        />
        <WorkCard
          link="https://www.gatsbycatalyst.com"
          image={data.projectImage1.childImageSharp.gatsbyImageData}
          title="Gatsby Theme Catalyst"
          description="A set of opinionated themes and starters I built to accelerate my
              own workflow when building new Gatsby projects. Uses ThemeUI and MDX. Free and open
              source."
        />
        <WorkCard
          link="https://www.briannasharpe.com/"
          image={data.projectImage3.childImageSharp.gatsbyImageData}
          title="www.briannasharpe.com"
          description="A portfolio website to showcase Brianna's freelance
              writing and personal brand. Built using Gatsby and SANITY."
        />
      </div>
      <div sx={{ display: "grid", placeItems: "center", my: 4 }}>
        <WorkTestimonial />
      </div>
      <WorkCTA />
      <WorkTechnologies />
    </SectionWrapper>
  )
}
export default WorkSection
