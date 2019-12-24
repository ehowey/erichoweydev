/** @jsx jsx */
import { jsx } from "theme-ui"

const PostContainer = props => {
  return (
    <div
      sx={{
        variant: "variants.postContainer",
        display: "grid",
        gridTemplateRows: "200px 150px auto",
        gridTemplateColumns: "1fr 768px 1fr",
        justifyContent: "center",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      {props.children}
    </div>
  )
}

export default PostContainer
