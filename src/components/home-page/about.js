/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { contours, darkContours } from "./patterns"
// import { motion, useAnimation } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { useEffect } from "react"

const SiteSection = () => {
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
  // const [mode] = useColorMode()
  const isDark = false

  // Code for animations is commented out for now, decided it was too much
  // const textVariants = {
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { type: "tween", duration: 0.3 },
  //   },
  // }

  // const para1Control = useAnimation()
  // const para2Control = useAnimation()
  // const para3Control = useAnimation()

  // const [para1Ref, para1InView] = useInView({ threshold: 0.3 })
  // const [para2Ref, para2InView] = useInView({ threshold: 0.3 })
  // const [para3Ref, para3InView] = useInView({ threshold: 0.3 })

  // useEffect(() => {
  //   if (para1InView) {
  //     para1Control.start("visible")
  //   }
  //   if (para2InView) {
  //     para2Control.start("visible")
  //   }
  //   if (para3InView) {
  //     para3Control.start("visible")
  //   }
  // }, [para1InView, para2InView, para3InView]) //eslint-disable-line

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
          // initial={{ y: 50, opacity: 0 }}
          // animate={para1Control}
          // variants={textVariants}
          // ref={para1Ref}
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["2 / 3", null, "1 / 2", null, null],
          }}
        >
          <Themed.h3 sx={{ mt: 0 }}>I built my first website in 1998</Themed.h3>
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
            filter: isDark ? "invert(1)" : "none",
          }}
          alt="A fun face"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          // initial={{ y: 50, opacity: 0 }}
          // animate={para2Control}
          // variants={textVariants}
          // ref={para2Ref}
          sx={{
            gridColumn: ["1 / -1", null, "2 / -1", null, null],
            gridRow: ["4 / 5", null, "3 / 4", null, null],
          }}
        >
          <Themed.h3>By passion a frontend web developer</Themed.h3>
          <Themed.p>
            I have degrees in philosophy and social work, not computer science.
          </Themed.p>
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
            filter: isDark ? "invert(1)" : "none",
          }}
          alt="A picture of a grad cap"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          // initial={{ y: 50, opacity: 0 }}
          // animate={para3Control}
          // variants={textVariants}
          // ref={para3Ref}
          sx={{
            gridColumn: ["1 / -1", null, "1 / 3", null, null],
            gridRow: ["6 / 7", null, "4 / 5", null, null],
          }}
        >
          <Themed.h3>Slow is smooth, smooth is fast</Themed.h3>
          <Themed.p>I don’t do rushed.</Themed.p>
          <Themed.p>
            Building an engaging, performant and accessible website is an
            intentional process. It requires problem solving and creativity. I
            only work on one project at a time and appreciate the artisanship of
            the finished product.
          </Themed.p>
        </div>
        <GatsbyImage
          image={data.aboutImage3.childImageSharp.gatsbyImageData}
          sx={{
            width: ["250px", "300px", "100%", null, null],
            justifySelf: "center",
            gridColumn: ["1 / -1", null, "3 / -1", null, null],
            gridRow: ["5 / 6", null, "4 / 5", null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
          alt="A slow race"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
