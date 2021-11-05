/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../../../utils/nav-context"
import { useSiteMetadata } from "../../../utils/use-site-metadata"

const SiteBranding = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title } = useSiteMetadata()
  // const [mode] = useColorMode()
  // const isDark = false
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
          sx={{
            height: ["40px", "50px", null, "60px", null],
            width: ["61px", "76px", null, "96px", null],
            filter: isNavOpen ? "invert(1)" : "none",
            variant: "variants.siteLogo",
          }}
          alt={title}
          // loading="eager"
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  )
}

export default SiteBranding
