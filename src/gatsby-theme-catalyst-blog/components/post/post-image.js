/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = props => {
  return (
    <Img
      sx={{
        gridColumn: "1 / -1",
        gridRow: [null, "1 / 2", "1 / 3", null, null],
        display: ["none", "block", null, null, null],
        zIndex: 10,
        width: "100%",
        maxWidth: "maxPageWidth",
        mx: "auto",
        variant: "variants.postImage",
      }}
      fluid={props.image}
      alt={props.altText}
    />
  )
}

export default PostImage
