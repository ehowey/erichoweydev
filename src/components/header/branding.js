/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// import { useContext } from "react"
// import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const SiteBranding = () => {
  // const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title, logo } = useSiteMetadata()
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
        <GatsbyImage
          image={logo}
          sx={{
            height: ["40px", "50px", null, "60px", null],
            width: ["61px", "76px", null, "96px", null],
            // filter: isDark ? "invert(1)" : isNavOpen ? "invert(1)" : "none",
            variant: "variants.siteLogo",
          }}
          alt={title}
          objectFit="contain"
          loading="eager"
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  )
}

export default SiteBranding
