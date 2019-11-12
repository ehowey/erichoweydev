import merge from "deepmerge";
import { BaseThemeSizes } from "gatsby-theme-catalyst-core";

export default merge(BaseThemeSizes, {
  logoWidthSmall: "50px", // Logo width on small screens, up to 768px
  logoWidthMedium: "60px", // Logo width on medium screens, 768px - 1024px
  logoWidthLarge: "60px", // Logo width on large screens, above 1024px
  logoHeightSmall: "50px", // Logo height on small screens, up to 768px
  logoHeightMedium: "60px", // Logo width on medium screens, 768px - 1024px
  logoHeightLarge: "60px" // Logo width on large screens, above 1024px
});
