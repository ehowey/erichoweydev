/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image"

const Card = ({
  link,
  techOne,
  techOneAlt,
  techTwo,
  techTwoAlt,
  techThree,
  techThreeAlt,
  title,
  description,
  imagePortrait,
  imageLandscape,
  ...props
}) => {
  const images = withArtDirection(imagePortrait, [
    {
      media: "(max-width: 1199px)",
      image: imageLandscape,
    },
  ])
  return (
    <a
      sx={{
        gridColumn: ["1 / -1", null, null, "auto", null],
        boxShadow: "0 2px 15px rgba(0,0,0,.1)",
        transition: "all .15s ease-in-out",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "background",
        margin: "0 auto",
        borderRadius: "4px",
        display: "flex",
        flexDirection: ["column", null, null, "row", null],
        position: "relative",
        ":hover, :focus, :active": {
          boxShadow: "0 2px 30px rgba(0,0,0,.15)",
          transform: "translateY(-3px)",
          backgroundColor: "muted",
        },
      }}
      href={link}
      {...props}
    >
      <div
        sx={{
          display: "flex",
          position: "absolute",
          bottom: "16px",
          right: "16px",
        }}
      >
        <GatsbyImage
          image={techOne}
          alt={techOneAlt}
          sx={{ width: "20px", height: "20px", opacity: "0.5", mr: 2 }}
        />
        <GatsbyImage
          image={techTwo}
          alt={techTwoAlt}
          sx={{ width: "20px", height: "20px", opacity: "0.5", mr: 2 }}
        />
        <GatsbyImage
          image={techThree}
          alt={techThreeAlt}
          sx={{ width: "20px", height: "20px", opacity: "0.5" }}
        />
      </div>
      <div sx={{ flex: 1, height: ["300px", "300px", null, "auto", null] }}>
        <GatsbyImage
          image={images}
          objectFit="cover"
          sx={{
            borderTopLeftRadius: ["4px", null, null, "4px", null],
            borderTopRightRadius: ["4px", null, null, "0px", null],
            borderBottomLeftRadius: ["0px", null, null, "4px", null],
            width: "100%",
            height: ["250px", "300px", null, "100%", null],
          }}
          alt={title}
        />
      </div>
      <div
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          py: 2,
          px: 4,
        }}
      >
        <Themed.h3
          sx={{ flex: "0", mt: 3, fontSize: [2, 3, null, null, null] }}
        >
          {title}
        </Themed.h3>
        <Themed.p
          sx={{
            flex: ["0", null, null, "1", null],
          }}
        >
          {description}
        </Themed.p>
        <Themed.p
          sx={{
            fontWeight: "500",
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
