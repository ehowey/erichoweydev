/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const SectionWrapper = props => {
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    <section
      sx={{
        backgroundColor: props.bg || "inherit",
        backgroundImage: isDark
          ? props.darkPattern || "none"
          : props.pattern || "none",
        px: 3,
        py: 5,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
      id={props.id}
    >
      {props.children}
    </section>
  )
}

export default SectionWrapper
