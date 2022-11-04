/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { FiGithub, FiTwitter } from "react-icons/fi"
import { lighten } from "@theme-ui/color"

const SiteFooter = () => {
  const { title } = useSiteMetadata()

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
                p: 2,
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.2s ease-in-out",
                fontSize: 2,
              },
              "a:hover": {
                color: "text",
                bg: lighten("primary", 0.3),
              },
            }}
          >
            <a
              href="https://github.com/ehowey"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com/erchwy"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </a>
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
