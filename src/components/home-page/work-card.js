/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

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
        ":hover, :focus, :active": {
          boxShadow: "0 2px 30px rgba(0,0,0,.15)",
          transform: "translateY(-3px)",
          backgroundColor: "muted",
        },
      }}
      href={props.link}
    >
      <GatsbyImage
        image={props.image}
        sx={{
          height: "300px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
        fluid={props.image}
        alt={props.title}
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
        <Themed.h3
          sx={{ flex: "0", mt: 3, fontSize: [2, 3, null, null, null] }}
        >
          {props.title}
        </Themed.h3>
        <Themed.p sx={{ flex: ["0", null, null, "1", null] }}>
          {props.description}
        </Themed.p>
        <Themed.p
          sx={{
            fontWeight: "bold",
            flex: "0",
            "::after": {
              content: '"\\00A0 \\2192"',
            },
          }}
        >
          Check it out
        </Themed.p>
      </div>
    </a>
  )
}

export default Card
