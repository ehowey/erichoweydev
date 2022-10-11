/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"

const SectionHeader = (props) => {
  return (
    <Themed.h2
      sx={{
        textAlign: "center",
        textTransform: "uppercase",
        mt: 4,
        "::after": {
          display: "block",
          content: '""',
          width: "80px",
          margin: "0 auto",
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
          borderBottomColor: "primary",
          pt: 2,
        },
      }}
    >
      {props.children}
    </Themed.h2>
  )
}

export default SectionHeader
