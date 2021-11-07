/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Branding from "./branding"
import Nav from "./nav"
import HamburgerButton from "./hamburger-button"

const SiteHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <header
      sx={{
        display: "grid",
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        gridArea: "header",
        zIndex: "888", // Ensure the header is always on top
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: ["auto 1fr", null, "auto", null, null],
          maxWidth: "maxPageWidth",
          width: "100%",
          minHeight: isNavOpen ? "100vh" : "50px",
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
        }}
      >
        <Branding isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <HamburgerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </header>
  )
}

export default SiteHeader
