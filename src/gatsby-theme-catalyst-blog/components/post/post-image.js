/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostImage = props => {
  return (
    <Img
      sx={{
        display: ["none", "block", null, null, null],
        height: [null, "250px", "300px", "350px", "400px"],
        mb: 3,
        variant: "variants.postImage",
      }}
      fluid={props.image}
      alt={props.altText}
    />
  )
}

export default PostImage
