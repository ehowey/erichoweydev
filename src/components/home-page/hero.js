/** @jsx jsx */
import { jsx, Themed, Button, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionWrapper from "./section-wrapper"
import { darken, lighten } from "@theme-ui/color"
import { motion } from "framer-motion"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      welcomeImage: file(relativePath: { eq: "eric-howey-sq.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  `)

  const [mode] = useColorMode()
  const isDark = false

  return (
    <SectionWrapper bg="secondary">
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: [
            "minmax(0, 1fr)",
            null,
            "auto minmax(400px, 600px)",
            "auto 720px",
            null,
          ],
          gridGap: 4,
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <div sx={{ position: "relative" }}>
          <motion.div
            initial={{ x: 20, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "tween", duration: 0.8 }}
            sx={{
              position: "absolute",
              bg: isDark ? lighten("accent", 0.2) : darken("accent", 0.3),
              width: "210px",
              height: "210px",
              left: "-16px",
              top: "-10px",
              borderRadius: "50%",
            }}
          />
          <motion.div
            initial={{ x: -20, y: -20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "tween", duration: 0.8 }}
            sx={{
              position: "absolute",
              bg: isDark ? lighten("accent", 0.1) : darken("accent", 0.5),
              width: "160px",
              height: "160px",
              right: "-8px",
              bottom: "-10px",
              borderRadius: "50%",
            }}
          />
          <GatsbyImage
            image={data.welcomeImage.childImageSharp.gatsbyImageData}
            sx={{
              width: ["200px", null, null, "220px", null],
              height: ["200px", null, null, "220px", null],
              boxShadow: "lg",
              borderRadius: "50%",
            }}
            imgStyle={{ borderRadius: "50%" }}
            alt="Eric Howey"
          />
        </div>
        <div>
          <Themed.h1
            sx={{
              fontSize: [4, null, null, 5, null],
              display: "inline",
              textTransform: "none",
              ":after": {
                content: "none",
              },
            }}
          >
            Hello and welcome!
          </Themed.h1>{" "}
          <Themed.p
            sx={{
              fontSize: [4, null, null, 5, null],
              fontFamily: "heading",
              m: 0,
              display: "inline",
            }}
          >
            My name is Eric Howey. I'm a web developer and mental health
            therapist. I listen and care.
          </Themed.p>
          <div sx={{ mt: 4 }}>
            <Button
              variant="primary"
              as="a"
              href="#hire-me"
              sx={{
                fontSize: 3,
                px: 4,
                "::after": {
                  content: '"\\00A0 \\2192"',
                },
                ":hover::after, :active::after, :focus::after": {
                  transition: "all 0.2s ease-in-out",
                  pl: 2,
                },
              }}
            >
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
