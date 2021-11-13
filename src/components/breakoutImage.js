/** @jsx jsx */
import { jsx } from "theme-ui"

const BreakoutImage = ({ children, ...props }) => {
  return (
    <div
      sx={{
        maxHeight: "400px",
        borderRadius: ["none", null, null, "4px", null],
        width: ["100vw", null, null, "85vw", "80vw"],
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: ["-50vw", null, null, "-42.5vw", "-40vw"],
        marginRight: ["-50vw", null, null, "-42.5vw", "-40vw"],
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default BreakoutImage
