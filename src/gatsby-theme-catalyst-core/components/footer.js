/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import {
  useSiteMetadata,
  useCatalystConfig,
  SocialFooter,
} from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { footerContentLocation } = useCatalystConfig()
  const { theme } = useThemeUI()
  const isLeft = footerContentLocation === "left"
  const isRight = footerContentLocation === "right"
  const isCenter = footerContentLocation === "center"

  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        textAlign:
          (isLeft && "left") || (isRight && "right") || (isCenter && "center"),
        px: 3,
        py: 3,
        gridArea: "footer",
        a: {
          color: "footer.links",
        },
        variant: "variants.footer",
      }}
    >
      <div
        sx={{
          display: "grid",
          alignContent: "center",
          justifyContent:
            (isLeft && "start") || (isRight && "end") || (isCenter && "center"),
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          my: 0,
        }}
      >
        <div
          sx={{
            a: {
              color: "footer.icons",
              mr: 3,
            },
            "a:last-of-type": {
              mr: 0,
            },
            "a:hover": {
              color: "primary",
            },
          }}
        >
          <IconContext.Provider value={{ size: theme.sizes.iconsFooter }}>
            <SocialFooter />
          </IconContext.Provider>
        </div>
        <p
          sx={{
            my: 0,
          }}
        >
          Illustrations by{" "}
          <a href="https://twitter.com/diana_valeanu">Diana Valeanu</a>
          <br />
          Design inspired by{" "}
          <a href="https://www.gatsbyjs.org/starters/ajayns/gatsby-absurd/">
            Gatsby-Absurd
          </a>
          <br />© {new Date().getFullYear()} {title}
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
