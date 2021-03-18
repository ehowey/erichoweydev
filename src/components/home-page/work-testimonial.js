/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import { lighten } from "@theme-ui/color"

const WorkTestimonial = ({ image, name, role, text }) => {
  return (
    <div
      sx={{
        maxWidth: "maxContentWidth",
        p: 3,
      }}
    >
      <Styled.p
        sx={{
          fontSize: 3,
          position: "relative",
          zIndex: 2,
          ":before": {
            content: "'\\201C'",
            lineHeight: "none",
            fontSize: "300px",
            fontFamily: "serif",
            color: "primary",
            opacity: "0.25",
            position: "absolute",
            top: "-48px",
            left: "-28px",
            zIndex: "-1",
          },
        }}
      >
        {text}
      </Styled.p>

      <div sx={{ display: "flex", alignItems: "center" }}>
        <Img
          sx={{
            height: "80px",
            width: "80px",
            borderRadius: "9999em",
          }}
          fluid={image}
          alt={name}
        />
        <div>
          <Styled.p
            sx={{
              lineHeight: "none",
              color: "textGray",
              fontSize: 0,
              fontWeight: "bold",
              textTransform: "uppercase",
              ml: 2,
            }}
          >
            {name}
            <br />
            {role}
          </Styled.p>
        </div>
      </div>
    </div>
  )
}
export default WorkTestimonial
