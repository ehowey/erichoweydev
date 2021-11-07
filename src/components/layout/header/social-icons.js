/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { SocialHeader } from "../social-links"
import { IconContext } from "react-icons"

const SocialWrapper = ({ isNavOpen }) => {
  const { theme } = useThemeUI()

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        mr: ["auto", null, 0, null, null],
        ml: ["auto", null, 3, null, null],
        mt: [4, null, 0, null, null],
        a: {
          color: isNavOpen ? "header.iconsOpen" : "header.icons",
          mr: isNavOpen ? 3 : 2,
          textDecoration: "none",
          display: "grid",
          placeItems: "center",
        },
        "a:last-of-type": {
          mr: 0,
        },
        "a:hover": {
          color: "primary",
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
      <IconContext.Provider value={{ size: theme.sizes.iconsHeader }}>
        <SocialHeader />
      </IconContext.Provider>
    </div>
  )
}

export default SocialWrapper
