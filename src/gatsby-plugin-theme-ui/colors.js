import merge from "deepmerge";
import { BaseThemeColors } from "gatsby-theme-catalyst-core";

export default merge(BaseThemeColors, {
  primary: "#9ce5f4",
  secondary: "#2e7da4",
  muted: "#f5f5f5",
  text: "#333333",
  textWhite: "#ffffff",
  background: "#ffffff",

  header: {
    background: "#9ce5f4",
    backgroundOpen: "#333333",
    text: "#333333",
    textOpen: "#ffffff",
    icons: "#333333",
    iconsHover: "#2e7da4",
    iconsOpen: "#ffffff"
  },

  footer: {
    background: "#2e7da4",
    text: "#ffffff",
    links: "#ffffff",
    icons: "#ffffff"
  }
});
