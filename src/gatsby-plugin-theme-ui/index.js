// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import prism from "@theme-ui/prism/presets/oceanic-next"
import "typeface-raleway"

export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  ...tailwind,
  breakpoints: ["580px", "768px", "1200px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    heading: "Raleway, sans-serif",
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit", //An alternate font style if needed.
  },
  colors: {
    ...tailwind.colors,
    primary: baseColors.orange[7],
    primaryHover: baseColors.orange[8],
    secondary: "#9ce5f4",
    accent: "#dcf6fb",
    textBlack: baseColors.gray[8],
    textWhite: baseColors.gray[1],
    textGray: "#6e6e6e",
    alertRed: "#e90000",
    alertGreen: "#00ffa2",
    codeBg: baseColors.gray[9],
    header: {
      background: "#9ce5f4",
      backgroundOpen: "#12303f",
      text: baseColors.gray[8],
      textOpen: baseColors.gray[1],
      icons: baseColors.gray[6],
      iconsHover: baseColors.orange[7],
      iconsOpen: baseColors.gray[5],
    },
    footer: {
      background: "#9ce5f4",
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    modes: {
      dark: {
        text: baseColors.gray[1],
        background: baseColors.gray[9],
        primary: "#da6327",
        secondary: "#004751",
        accent: baseColors.gray[8],
        gray: baseColors.gray[5],
        textGray: "#9f9f9f",
        muted: baseColors.gray[8],
        codeBg: baseColors.gray[8],
        alertRed: "#ff0000",
        alertGreen: "#0a8745",
        header: {
          background: "#004751",
          backgroundOpen: "#324b50",
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          icons: baseColors.gray[5],
          iconsHover: baseColors.orange[7],
          iconsOpen: baseColors.gray[5],
        },
        footer: {
          background: "#004751",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "100%", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "61px", // Logo width on extra small screens, up to 480px
    logoWidthS: "76px", // Logo width on small screens, 480px - 768px
    logoWidthM: "76px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "92px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "92px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "50px", // Logo height on small screens, 480px - 768px
    logoHeightM: "50px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "60px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "60px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    ...tailwind.styles,
    root: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    a: {
      color: "primary",
      textDecoration: "underline",
      transition: "all 0.2s ease",
      ":hover": {
        color: "primaryHover",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 4,
      "::after": {
        display: "block",
        content: '""',
        width: "80px",
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "4px",
        borderBottomColor: "primary",
      },
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 4,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 3,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: 1,
    },
    blockquote: {
      bg: "muted",
      p: 3,
      my: 4,
      mx: [1, 2, 4, null, null],
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      ...prism,
      fontSize: 1,
      p: 1,
      backgroundColor: "muted",
      color: "text",
    },
    pre: {
      ...prism,
      fontSize: 1,
      p: 3,
      my: 4,
      overflowX: "auto",
      backgroundColor: "codeBg",
      width: ["100vw", null, "100%", null, null],
      position: ["relative", null, "static", null, null],
      left: ["calc(-50vw + 50%)", null, "auto", null, null],
    },
  },
  buttons: {
    primary: {
      bg: "#bb5420",
      color: "textWhite",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "default",
      ":hover, :active, :focus": {
        bg: "primaryHover",
      },
    },
    alt: {
      bg: "transparent",
      border: "none",
      color: "primary",
      fontWeight: "bold",
      letterSpacing: "wider",
      px: 0,
      m: 0,
      transition: "all 0.3s ease 0s",
      "::after": {
        content: '"\\00A0 \\2192"',
      },
      ":hover, :active, :focus": {
        textDecoration: "underline",
        color: "primaryHover",
        bg: "transparent",
        border: "none",
      },
    },
  },
  variants: {
    main: {
      mt: 0,
      mb: 5,
    },
    navLink: {
      fontFamily: "heading",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "1px",
        backgroundColor: "primary",
        content: "''",
        opacity: "0",
        transition: "height 0.3s, opacity 0.3s, transform 0.3s",
        transform: "translateY(-6px)",
      },
      ":hover, :focus, :active": {
        textDecoration: "none",
      },
      ":hover::after, :active::after, :focus::after": {
        height: "4px",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkActive: {
      textDecoration: "none",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "4px",
        backgroundColor: "primary",
        content: "''",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkSub: {
      "::after": {
        content: "none",
      },
      ":hover::after": {
        content: "none",
      },
      ":hover, :focus, :active": {
        color: "primary",
      },
    },
    navLinkSubActive: {
      textDecoration: "none",
      color: "primary",
      "::after": {
        content: "none",
      },
    },
  },
}
