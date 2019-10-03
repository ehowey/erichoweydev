import merge from "deepmerge";
import { BaseThemeFonts } from "gatsby-theme-catalyst-core";
import "typeface-raleway";

export default merge(BaseThemeFonts, {
  text: "Raleway, sans-serif",
  heading: "inherit",
  monospace: "Menlo, monospace",
  siteTitle: "inherit", // Font for main site title
  navLinks: "inherit", // Font for the nav menu links
  alt: "inherit"
});
