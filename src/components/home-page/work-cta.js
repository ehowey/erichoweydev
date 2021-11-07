/** @jsx jsx */
import { jsx, Button, Themed } from "theme-ui"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const WorkCTA = () => {
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
          sx={{ display: "flex", fontSize: 2, fontWeight: 500 }}
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
  )
}
export default WorkCTA
