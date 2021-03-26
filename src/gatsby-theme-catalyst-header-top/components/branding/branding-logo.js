/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useContext } from "react"
import {
  NavContext,
  HomeContext,
  useCatalystConfig,
  useSiteMetadata,
} from "gatsby-theme-catalyst-core"
import { animateScroll as scroll } from "react-scroll"

const SiteLogo = () => {
  const [isHome] = useContext(HomeContext)
  const { title, logo } = useSiteMetadata()
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const {
    invertSiteLogo,
    displaySiteLogo,
    displaySiteLogoMobile,
  } = useCatalystConfig()
  const [mode] = useColorMode()
  const isDark = false
  const invertLogo = () => {
    if (invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }
  // Set a value for laptop display of logo
  const displayLaptop = () => {
    if (displaySiteLogo) {
      return "block"
    } else {
      return "none"
    }
  }
  // Set a value for mobile display of logo
  const displayPhone = () => {
    if (displaySiteLogoMobile) {
      return "block"
    } else {
      return "none"
    }
  }
  if (isHome) {
    return (
      <div
        sx={{
          display: [displayPhone, null, displayLaptop, null, null],
          cursor: "pointer",
        }}
        onClick={() => {
          setIsNavOpen(false)
          scroll.scrollToTop()
        }}
        onKeyPress={() => {
          setIsNavOpen(false)
          scroll.scrollToTop()
        }}
        role="button"
        tabIndex="0"
        aria-label="Scroll to top"
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
            filter: isDark ? "invert(1)" : isNavOpen ? invertLogo : "none",
            variant: "variants.siteLogo",
          }}
          alt={title}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    )
  } else {
    return (
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none" }}
      >
        <GatsbyImage
          image={logo}
          sx={{
            display: [displayPhone, null, displayLaptop, null, null],
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
            filter: isDark ? "invert(1)" : isNavOpen ? invertLogo : "none",
            variant: "variants.siteLogo",
          }}
          alt={title}
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
    )
  }
}

export default SiteLogo
