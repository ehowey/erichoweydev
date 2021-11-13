/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../../hooks/use-site-metadata"
import { FiGithub, FiTwitter } from "react-icons/fi"
import { lighten } from "@theme-ui/color"

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  const { menuLinks } = useSiteMetadata()
  const navRef = useRef()

  // Handle moving the focus up to the menu when it is opened, esc buttong to close menu
  useEffect(() => {
    const focusableModalElements = navRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    const firstElement = focusableModalElements[0]

    const handleTab = (e) => {
      e.preventDefault()
      firstElement.focus()
      document.removeEventListener("keydown", tabListener)
    }

    const tabListener = (e) => {
      if (e.keyCode === 9) {
        handleTab(e)
      }
    }
    const escListener = (e) => {
      if (e.keyCode === 27) {
        setIsNavOpen(false)
      }
    }
    if (isNavOpen) {
      document.addEventListener("keydown", tabListener)
      document.addEventListener("keydown", escListener)
    }
    return () => {
      document.removeEventListener("keydown", tabListener)
      document.removeEventListener("keydown", escListener)
    }
  }, [isNavOpen]) //eslint-disable-line

  return (
    <nav
      ref={navRef}
      sx={{
        width: "100%",
        fontSize: 2,
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        flexDirection: ["column", null, "row", null, null],
        justifyContent: ["start", null, "flex-end", null, null],
        variant: "variant.nav",
      }}
      aria-label="Primary navigation menu"
    >
      <ul
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "flex",
          flexDirection: ["column", null, "row", null, null],
          alignItems: "center",
          flexWrap: "wrap",
          variant: "variants.navLinksRight",
        }}
      >
        {menuLinks.map((link) => {
          return (
            <li
              key={link.link}
              sx={{
                my: [2, null, 0, null, null],
                mr: [0, null, 3, null, null],
                cursor: "pointer",
                ".active": {
                  textDecoration: "underline",
                  textDecorationThickness: "0.125em",
                  color: "primary",
                  variant: "variants.navLinkActive",
                },
                ":last-of-type": {
                  mr: 0,
                },
                variant: "variants.navLi",
              }}
            >
              <Link
                to={link.link}
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
                sx={{
                  position: "relative",
                  py: 2,
                  px: 1,
                  color: isNavOpen ? "header.textOpen" : "header.text",
                  textDecoration: "none",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  zIndex: 2,
                  ":hover, :focus, :active": {
                    textDecoration: "underline",
                    textDecorationThickness: "0.125em",
                    color: "primary",
                  },
                  variant: "variants.navLink",
                }}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          mr: ["auto", null, 0, null, null],
          ml: ["auto", null, 3, null, null],
          mt: [4, null, 0, null, null],
          a: {
            color: isNavOpen ? "header.iconsOpen" : "header.icons",
            p: 2,
            textDecoration: "none",
            display: "grid",
            placeItems: "center",
            borderRadius: "4px",
            transition: "all 0.2s ease-in-out",
          },

          "a:hover": {
            color: "text",
            bg: lighten("primary", 0.3),
          },
          button: {
            color: isNavOpen ? "header.iconsOpen" : "header.icons",
            ml: isNavOpen ? 3 : 2,
            ":hover": {
              color: "primary",
            },
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
    </nav>
  )
}

export default Nav
