import merge from "deepmerge"
import { onePageTheme } from "gatsby-theme-catalyst-onepage"

export default merge(onePageTheme, {
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
      }
})