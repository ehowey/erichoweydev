import merge from "deepmerge"
import { baseTheme } from "gatsby-theme-catalyst-onepage"

export default merge(baseTheme, {
    colors: {
        primary: "#9ce5f4",
        secondary: "#2e7da4",
        muted: "#f5f5f5",
        text: "#333333",
        textWhite: "#ffffff",
        background: "#ffffff",
    
        header: {
          background: "#9ce5f4",
          backgroundOpen: '#333333',
          text: '#333333',
          textOpen: '#ffffff'
        },
    
        footer: {
          background: "#2e7da4",
          text: "#ffffff"
        }
      },
      sizes: {
        maxContentWidth: "100%", // Sets the container size on larger screens, e.g. tablets and laptops
        contentWidth: "100%", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
        headerHeight: "60px", // Sets the height of the header on screens before the first breakpoint, 767px and below by default
        headerHeightTablet: "80px", // Sets the height of the header after the first breakpoint, 768px to 1023px by default
        headerHeightLaptop: "80px", // Sets the height of the header after the second breakpoint, 1024px and up by default
        mainMarginTop: "60px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
        mainMarginTopTablet: "80px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
        mainMarginTopLaptop: "80px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
      },
    catalystOptions: {
        headerPosition: "fixed", //Fix the header for single page navigation ease
    }
})