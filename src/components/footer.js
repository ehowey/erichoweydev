/** @jsx jsx */
import { jsx, useThemeUI, Themed } from "theme-ui"
import { useSiteMetadata, SocialFooter } from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { theme } = useThemeUI()

  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        px: 3,
        py: 3,
        gridArea: "footer",
        fontSize: 1,
        a: {
          color: "footer.links",
        },
        variant: "variants.footer",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          flexDirection: ["column", null, "row", null, null],
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          my: 0,
        }}
      >
        <div
          sx={{
            display: "grid",
            alignContent: "center",
            order: ["2", null, "1", null, null],
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
          <Themed.p
            sx={{
              my: 0,
            }}
          >
            Illustrations by{" "}
            <a href="https://twitter.com/diana_valeanu">Diana Valeanu</a>
            <br />© {new Date().getFullYear()} {title} -{" "}
            <a href="mailto:eric@erichowey.dev">eric@erichowey.dev</a>
          </Themed.p>
        </div>
        <div
          sx={{
            maxWidth: ["100%", "100%", "460px", "600px", "740px"],
            order: ["1", null, "2", null, null],
          }}
        >
          <Themed.p sx={{ fontStyle: "italic", fontSize: 1 }}>
            In the spirit of reconciliation, I acknowledge that I live, work and
            play on the traditional territories of the Blackfoot Confederacy
            (Siksika, Kainai, Piikani), the Tsuut’ina, the Îyâxe Nakoda Nations,
            the Métis Nation (Region 3), and all people who make their homes in
            the Treaty 7 region of Southern Alberta.
          </Themed.p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
