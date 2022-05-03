/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import WorkCTA from "./work-cta"
import WorkTestimonial from "./work-testimonial"
import { rain } from "./patterns"

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    {
      image1Port: file(relativePath: { eq: "work-mmbc-portrait.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image1Land: file(relativePath: { eq: "work-mmbc-landscape.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image2Port: file(relativePath: { eq: "work-focus-portrait.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image2Land: file(relativePath: { eq: "work-focus-landscape.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image3Port: file(relativePath: { eq: "work-bcammhe-portrait.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image3Land: file(relativePath: { eq: "work-bcammhe-landscape.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image4Port: file(relativePath: { eq: "work-stripemart-portrait.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      image4Land: file(relativePath: { eq: "work-stripemart-landscape.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      gatsbyLogo: file(relativePath: { eq: "gatsby-monogram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 128, layout: CONSTRAINED)
        }
      }
      sanityLogo: file(relativePath: { eq: "sanity-monogram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 128, layout: CONSTRAINED)
        }
      }
      netlifyLogo: file(relativePath: { eq: "netlify-monogram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 128, layout: CONSTRAINED)
        }
      }
      nextLogo: file(relativePath: { eq: "nextjs-monogram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 128, layout: CONSTRAINED)
        }
      }
      vercelLogo: file(relativePath: { eq: "vercel-monogram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 128, layout: CONSTRAINED)
        }
      }
      stripeLogo: file(relativePath: { eq: "stripe-monogram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 128, layout: CONSTRAINED)
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
          margin: "0 auto",
          pt: 5,
          px: [0, null, null, 4, null],
          maxWidth: ["700px", null, null, "1440px", null],
        }}
      >
        <WorkCard
          link="https://www.mindmapbc.ca/"
          imagePortrait={data.image1Port.childImageSharp.gatsbyImageData}
          imageLandscape={data.image1Land.childImageSharp.gatsbyImageData}
          techOne={data.gatsbyLogo.childImageSharp.gatsbyImageData}
          techOneAlt="Gatsby"
          techTwo={data.sanityLogo.childImageSharp.gatsbyImageData}
          techTwoAlt="Sanity"
          techThree={data.netlifyLogo.childImageSharp.gatsbyImageData}
          techThreeAlt="Netlify"
          title="MindMapBC"
          description="A custom made database of mental health resources focused on LGBTQ2S+ health. Includes geolocation, mapping, and advanced search functionality."
        />
        <WorkCard
          link="https://www.focus-study.me"
          imagePortrait={data.image2Port.childImageSharp.gatsbyImageData}
          imageLandscape={data.image2Land.childImageSharp.gatsbyImageData}
          techOne={data.nextLogo.childImageSharp.gatsbyImageData}
          techOneAlt="NextJS"
          techTwo={data.sanityLogo.childImageSharp.gatsbyImageData}
          techTwoAlt="Sanity"
          techThree={data.vercelLogo.childImageSharp.gatsbyImageData}
          techThreeAlt="Vercel"
          title="FOCUS study"
          description="A vibrant and energetic web presence for an international COVID-19 study focused on youth. Includes full support for multiple languages and regions."
        />
        <WorkCard
          link="https://www.bcammhe.ca"
          imagePortrait={data.image3Port.childImageSharp.gatsbyImageData}
          imageLandscape={data.image3Land.childImageSharp.gatsbyImageData}
          techOne={data.gatsbyLogo.childImageSharp.gatsbyImageData}
          techOneAlt="Gatsby"
          techTwo={data.sanityLogo.childImageSharp.gatsbyImageData}
          techTwoAlt="Sanity"
          techThree={data.netlifyLogo.childImageSharp.gatsbyImageData}
          techThreeAlt="Netlify"
          title="BC Alliance for Monitoring Mental Health Equity"
          description="An award winning marketing website to improve mental health access. Includes a database of research articles cross-linked with policy recommendations."
          sx={{ display: ["none", null, null, "flex", null] }}
        />
        <WorkCard
          link="https://github.com/ehowey/gatsby-starter-stripemart"
          imagePortrait={data.image4Port.childImageSharp.gatsbyImageData}
          imageLandscape={data.image4Land.childImageSharp.gatsbyImageData}
          techOne={data.gatsbyLogo.childImageSharp.gatsbyImageData}
          techOneAlt="Gatsby"
          techTwo={data.stripeLogo.childImageSharp.gatsbyImageData}
          techTwoAlt="Stripe"
          techThree={data.netlifyLogo.childImageSharp.gatsbyImageData}
          techThreeAlt="Netlify"
          title="Gatsby Starter Stripemart"
          description="An open source template for a minimal e-commerce store using Gatsby, SANITY, Stripe, Use-Shopping-Cart and Netlify. Includes cart management and a custom checkout flow."
          sx={{ display: ["none", null, null, "flex", null] }}
        />
      </div>
      <div sx={{ display: "grid", placeItems: "center", my: 4 }}>
        <WorkTestimonial />
      </div>
      <WorkCTA />
    </SectionWrapper>
  )
}
export default WorkSection
