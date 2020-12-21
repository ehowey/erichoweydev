/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"

const Card = (props) => {
  return (
    <a
      sx={{
        gridColumn: ["1 / -1", null, null, "auto", null],
        minWidth: "300px",
        maxWidth: "650px",
        boxShadow: "0 2px 15px rgba(0,0,0,.1)",
        transition: "all .15s ease-in-out",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "background",
        margin: "0 auto",
        borderRadius: "4px",
        ":hover": {
          boxShadow: "0 2px 30px rgba(0,0,0,.15)",
          transform: "translateY(-3px)",
          backgroundColor: "muted",
        },
      }}
      href={props.link}
    >
      <Img
        sx={{
          height: "200px",
        }}
        fluid={props.image}
        alt="Gatsby Theme Catalyst"
      />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 2,
          px: 4,
          height: ["auto", null, null, "350px", null],
        }}
      >
        <Styled.h4 sx={{ flex: "0", mt: 3 }}>{props.title}</Styled.h4>
        <Styled.p sx={{ flex: ["0", null, null, "1", null] }}>
          {props.description}
        </Styled.p>
        <Styled.p
          sx={{
            fontWeight: "bold",
            flex: "0",
            "::after": {
              content: '"\\00A0 \\2192"',
            },
          }}
        >
          Check it out
        </Styled.p>
      </div>
    </a>
  )
}

export default Card
