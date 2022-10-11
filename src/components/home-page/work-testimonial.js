/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const WorkTestimonial = () => {
  const textVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const textControl = useAnimation()

  const [textRef, textInView] = useInView({ threshold: 0.25 })

  useEffect(() => {
    if (textInView) {
      textControl.start("visible")
    }
  }, [textInView]) //eslint-disable-line
  return (
    <div
      sx={{
        maxWidth: "maxContentWidth",
        p: 3,
        my: 4,
      }}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={textControl}
        variants={textVariants}
        ref={textRef}
      >
        <Themed.p
          sx={{
            fontSize: [2, 3, null, null, null],
            fontWeight: 500,
            mt: 1,
            mb: 0,
            fontFamily: "heading",
            fontStyle: "italic",
            position: "relative",
            zIndex: 2,
            ":before": {
              content: "'\\201C'",
              lineHeight: "none",
              fontSize: "300px",
              fontFamily: "serif",
              color: "primary",
              opacity: "0.15",
              position: "absolute",
              top: "-60px",
              left: "-30px",
              zIndex: "-1",
              fontStyle: "normal",
            },
          }}
        >
          Eric turned MindMapBC into a site with a perfect balance between
          eye-catching design features and simple, accessible functionality.{" "}
          <span sx={{ fontWeight: 700 }}>
            We cannot recommend him highly enough.
          </span>
        </Themed.p>
        <div sx={{ display: "flex", alignItems: "center" }}>
          <div>
            <Themed.p
              sx={{
                mt: 2,
                mb: 1,
                lineHeight: "none",
                color: "textGray",
                fontSize: [0, 1, null, null, null],
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Travis Salway & Sarah Watt
              <br />
              Simon Fraser University, BC Centre for Disease Control
            </Themed.p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default WorkTestimonial
