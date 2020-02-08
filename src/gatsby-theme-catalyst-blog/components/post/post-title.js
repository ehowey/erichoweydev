/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostTitle = props => {
  return (
    <Styled.h1
      sx={{
        textAlign: "center",
        fontSize: [5, 6, null, null, null],
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
        variant: "variants.postTitle",
      }}
    >
      {props.children}
    </Styled.h1>
  )
}

export default PostTitle
