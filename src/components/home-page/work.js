/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import WorkTechnologies from "./work-technologies"
import WorkCTA from "./work-cta"
import WorkTestimonial from "./work-testimonial"
import { rain } from "./patterns"

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    {
      projectImage1: file(relativePath: { eq: "work-bcammhe-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
      projectImage2: file(relativePath: { eq: "work-mmbc-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
      projectImage3: file(relativePath: { eq: "work-stripemart.png" }) {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
    }
  `)
  return (
    <SectionWrapper id="work" bg="secondary" pattern={rain}>
      <SectionHeader>Selected Work</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
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
          title="MindMapBC"
          description="A custom made database of mental health resources focused on LGBTQ2S+ health. Includes geolocation, mapping, and advanced search functionality."
        />
        <WorkCard
          link="https://www.bcammhe.ca"
          image={data.projectImage1.childImageSharp.gatsbyImageData}
          title="BC Alliance for Monitoring Mental Health Equity"
          description="An award winning promotional website to improve equitable access to mental health. Includes a sortable database of research articles which are cross-linked with policy recommendations."
        />
        <WorkCard
          link="https://www.focus-study.me"
          image={data.projectImage3.childImageSharp.gatsbyImageData}
          title="FOCUS study"
          description="A vibrant and energetic web presence for an international COVID-19 study focused on youth. Includes full support for multiple languages and regions."
        />
        <WorkCard
          link="https://github.com/ehowey/gatsby-starter-stripemart"
          image={data.projectImage3.childImageSharp.gatsbyImageData}
          title="Gatsby Starter Stripemart"
          description="A template for a minimal e-commerce store using Gatsby, SANITY, Stripe, Use-Shopping-Cart and Netlify. Includes cart management and custom checkout flow. Open sourced for all!"
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
