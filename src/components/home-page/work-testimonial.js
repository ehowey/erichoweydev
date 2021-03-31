/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const WorkTestimonial = () => {
  const textVariants = {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      // transition: { type: "tween", duration: 0.4 },
    },
  }

  const textControl = useAnimation()

  const [textRef, textInView] = useInView({ threshold: 0.3 })

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
        borderLeftColor: "primary",
        borderLeftStyle: "solid",
        borderLeftWidth: "8px",
        borderRadius: "4px",
      }}
    >
      <motion.div
        initial={{ y: 100, scale: 0.7, opacity: 0 }}
        animate={textControl}
        variants={textVariants}
        ref={textRef}
      >
        <Themed.p
          sx={{
            fontSize: [3, 4, null, null, null],
            mb: 0,
            fontFamily: "heading",
            position: "relative",
            zIndex: 2,
            ":before": {
              content: "'\\201C'",
              lineHeight: "none",
              fontSize: "400px",
              fontFamily: "serif",
              color: "primary",
              opacity: "0.2",
              position: "absolute",
              top: "-80px",
              left: "-16px",
              zIndex: "-1",
            },
          }}
        >
          Eric turned MindMapBC into a site with a perfect balance between
          eye-catching design features and simple, accessible functionality.{" "}
          <span sx={{ fontWeight: "bold" }}>
            We cannot recommend him highly enough.
          </span>
        </Themed.p>
        <div sx={{ display: "flex", alignItems: "center" }}>
          <div>
            <Themed.p
              sx={{
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
