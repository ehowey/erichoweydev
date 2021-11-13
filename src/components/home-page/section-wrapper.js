/** @jsx jsx */
import { jsx } from "theme-ui"

const SectionWrapper = ({ children, ...props }) => {
  return (
    <section
      sx={{
        backgroundColor: props.bg || "inherit",
        backgroundImage: props.pattern || "none",
        px: 3,
        py: 5,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
      id={props.id}
      {...props}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
