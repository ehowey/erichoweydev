/** @jsx jsx */
import { jsx, Button, Themed } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import { rain, darkRain } from "./patterns"
import { motion } from "framer-motion"

const SiteSection = () => {
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
      logo1: file(relativePath: { eq: "gatsby-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo2: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo3: file(relativePath: { eq: "next-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo4: file(relativePath: { eq: "sanity-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      logo5: file(relativePath: { eq: "netlify-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
    }
  `)
  const handMotion = {
    rest: { rotate: 0 },
    hover: {
      rotate: [35, -15, 15, -5, 0],
      transition: {
        duration: 1.2,
      },
    },
  }
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
      <div
        sx={{
          mt: 4,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Themed.h3
          sx={{
            mt: 0,
          }}
        >
          Curious?
        </Themed.h3>
        <Themed.p
          sx={{
            mt: 0,
            mb: 4,
          }}
        >
          Follow the journey from hello to finished product.
        </Themed.p>
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          sx={{ position: "relative" }}
        >
          <Button
            variant="primary"
            as={Link}
            to="/it-starts-with-hello/"
            sx={{ display: "flex" }}
          >
            It starts with hello
            <motion.div sx={{ ml: 2 }} variants={handMotion}>
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </motion.div>
          </Button>
        </motion.div>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["320px", null, "500px", null, null],
          mx: "auto",
          mt: 5,
          mb: 0,
        }}
      >
        <GatsbyImage
          image={data.logo2.childImageSharp.gatsbyImageData}
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          alt="React"
          imgStyle={{ objectFit: "contain" }}
        />
        <GatsbyImage
          image={data.logo1.childImageSharp.gatsbyImageData}
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          alt="GatsbyJS"
          imgStyle={{ objectFit: "contain" }}
        />
        <GatsbyImage
          image={data.logo3.childImageSharp.gatsbyImageData}
          sx={{
            width: ["42px", null, "65px", null, null],
          }}
          alt="NextJs"
        />
        <GatsbyImage
          image={data.logo4.childImageSharp.gatsbyImageData}
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          alt="Sanity"
          imgStyle={{ objectFit: "contain" }}
        />
        <GatsbyImage
          image={data.logo5.childImageSharp.gatsbyImageData}
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          alt="Netlify"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </SectionWrapper>
  )
}
export default SiteSection
