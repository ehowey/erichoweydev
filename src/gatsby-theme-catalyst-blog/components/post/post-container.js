/** @jsx jsx */
import { jsx } from "theme-ui"

const PostContainer = props => {
  return (
    <div
      sx={{
        variant: "variants.postContainer",
        display: "grid",
        gridTemplateRows: [
          "auto",
          "250px auto",
          "150px 250px auto",
          null,
          null,
        ],
        gridTemplateColumns: "1fr minmax(0px, 768px) 1fr",
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
