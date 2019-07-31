/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import NavLinks from "./navLinks";
import { SocialHeader } from "gatsby-theme-catalyst-core";

const siteNav = props => {
  const { theme } = useThemeUI();
  const headOpen = () => {
    return window.innerHeight - parseInt(theme.sizes.headerHeight) + "px";
  }; //Used to calculate the height of the nav so it is exactly the height of the window
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "2 / 3", "2 / 3"],
        gridRow: ["2 / 3", "1 / 2", "1 / 2"],
        justifySelf: ["center", "end", "end"],
        alignItems: "center",
        justifyContent: ["flex-start", "flex-start", "flex-start"],
        height: [props.open ? headOpen() : 0, "headerHeightTablet", "auto"],
        mt: [props.open ? 2 : 0, 0, null],
        display: "flex",
        flexDirection: ["column", "row", null],
        width: ["auto", "auto", "auto"]
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <NavLinks {...props} />
      <div
        sx={{
          display: [props.open ? "flex" : "none", "flex", null],
          mr: ["auto", 3, null],
          ml: "auto",
          mt: [3, 0, null],

          a: {
            color: props.open ? "header.iconsOpen" : "header.icons",
            mr: [3, 2, null],
            height: theme => theme.sizes.iconsHeader,
            textDecoration: "none"
          },
          "a:last-of-type": {
            mr: 0
          },
          "a:hover": {
            color: "header.iconsHover"
          }
        }}
      >
        <SocialHeader />
      </div>
    </nav>
  );
};

export default siteNav;
