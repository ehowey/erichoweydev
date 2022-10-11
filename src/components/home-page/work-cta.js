/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
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
      <div sx={{ display: "flex" }}>
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          sx={{ position: "relative" }}
        >
          <Link
            to="/it-starts-with-hello/"
            sx={{
              variant: "buttons.primary",
              display: "flex",
              fontSize: 2,
              fontWeight: 500,
            }}
          >
            It starts with hello
            <motion.div sx={{ ml: 2 }} variants={handMotion}>
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </motion.div>
          </Link>
        </motion.div>
        {/* <Button
          variant="outline"
          as={Link}
          to="/tech"
          sx={{ fontSize: 2, fontWeight: 500, ml: [0, 0, 3, 4, null] }}
        >
          Tech choices
        </Button> */}
      </div>
    </div>
  )
}
export default WorkCTA
