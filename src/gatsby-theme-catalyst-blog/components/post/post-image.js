/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = props => {
  return (
    <Img
      sx={{
        gridColumn: "1 / -1",
        gridRow: "1 / 3",
        display: ["none", "block", null, null, null],
        variant: "variants.postImage",
        zIndex: 10,
      }}
      fluid={props.image}
      alt={props.altText}
    />
  )
}

export default PostImage
