/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const SectionHeader = props => {
  return (
    <Styled.h2
      sx={{
        textAlign: "center",
        textTransform: "uppercase",
        "::after": {
          display: "block",
          content: '""',
          width: "80px",
          margin: "0 auto",
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
          borderBottomColor: "primary",
        },
      }}
    >
      {props.children}
    </Styled.h2>
  )
}

export default SectionHeader
