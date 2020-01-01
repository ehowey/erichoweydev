/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostTitle = props => {
  return (
    <Styled.h1
      sx={{
        textAlign: "center",
        variant: "variants.postTitle",
        "::after": {
          display: "block",
          content: '""',
          width: ["25%", "20%", "15%", null, "10%"],
          pt: 2,
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
          borderBottomColor: "primary",
          margin: "0 auto",
        },
      }}
    >
      {props.children}
    </Styled.h1>
  )
}

export default PostTitle
