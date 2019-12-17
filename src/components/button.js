/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Button } from "@theme-ui/components"

const ButtonInt = props => {
  return (
    <Button
      sx={{
        color: "textWhite",
        cursor: "pointer",
        transition: "all 0.3s ease 0s",
        "::after": {
          content: '"\\00A0 \\2192"',
        },
        ":hover": {
          bg: "primaryHover",
        },
      }}
    >
      {props.children}
    </Button>
  )
}

export default ButtonInt
