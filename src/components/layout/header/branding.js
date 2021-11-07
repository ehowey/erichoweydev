/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SiteBranding = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
        variant: "variants.branding",
      }}
    >
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <StaticImage
          src="./eh-logo.png"
          placeholder="blurred"
          loading="eager"
          sx={{
            height: ["40px", "50px", null, "60px", null],
            width: ["61px", "76px", null, "96px", null],
            filter: isNavOpen ? "invert(1)" : "none",
            variant: "variants.siteLogo",
          }}
          alt="Eric Howey Signature Logo"
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  )
}

export default SiteBranding
