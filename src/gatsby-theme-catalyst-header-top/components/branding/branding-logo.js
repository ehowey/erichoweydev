/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "../../../utils/nav-context"
import { useSiteMetadata } from "../../../utils/use-site-metadata"

const SiteLogo = () => {
  const { title, logo } = useSiteMetadata()
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)

  return (
    <Link
      to="/"
      onClick={() => setIsNavOpen(false)}
      sx={{ textDecoration: "none" }}
    >
      <GatsbyImage
        image={logo}
        sx={{
          height: [
            (theme) => theme.sizes.logoHeightXS,
            (theme) => theme.sizes.logoHeightS,
            (theme) => theme.sizes.logoHeightM,
            (theme) => theme.sizes.logoHeightL,
            (theme) => theme.sizes.logoHeightXL,
          ],
          width: [
            (theme) => theme.sizes.logoWidthXS,
            (theme) => theme.sizes.logoWidthS,
            (theme) => theme.sizes.logoWidthM,
            (theme) => theme.sizes.logoWidthL,
            (theme) => theme.sizes.logoWidthXL,
          ],
          mr: 2,
          variant: "variants.siteLogo",
        }}
        alt={title}
        imgStyle={{ objectFit: "contain" }}
      />
    </Link>
  )
}

export default SiteLogo
