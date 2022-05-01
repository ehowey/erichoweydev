// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import prism from "@theme-ui/prism/presets/oceanic-next"
import { baseColors } from "./baseColors"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/400-italic.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/500-italic.css"
import "@fontsource/raleway/700.css"

const theme = {
  breakpoints: ["580px", "768px", "1200px", "1440px"],
  fonts: {
    heading: "Raleway, sans-serif",
    body: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace:
      'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  fontSizes: [
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
    "2.25rem",
    "3rem",
    "4rem",
    "4.5rem",
  ],
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    body: 400,
    heading: 700,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    body: "1.625",
    heading: "1.25",
  },
  colors: {
    background: baseColors.white,
    text: baseColors.text,
    primary: baseColors.primary,
    primaryHover: baseColors.primaryHover,
    secondary: baseColors.secondary,
    accent: baseColors.accent,
    textGray: baseColors.textGray,
    muted: "hsl(210, 38%, 95%)",
    error: baseColors.error,
    success: baseColors.success,
    codeBg: "hsl(220, 26%, 14%)",
    header: {
      background: baseColors.secondary,
      backgroundOpen: "hsl(200, 56%, 16%)",
      text: baseColors.gray[8],
      textOpen: baseColors.gray[1],
      icons: baseColors.gray[6],
      iconsHover: baseColors.primary,
      iconsOpen: baseColors.gray[5],
    },
    footer: {
      background: baseColors.secondary,
      text: baseColors.text,
      links: baseColors.text,
      icons: baseColors.text,
    },
  },
  sizes: {
    maxPageWidth: "100%", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  space: [
    "0",
    "0.25rem",
    "0.5rem",
    "1rem",
    "2rem",
    "4rem",
    "8rem",
    "16rem",
    "32rem",
  ],
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none",
  },
  zIndices: {
    header: 1000,
    branding: 1100,
    nav: 1100,
    navMobile: 999,
    dropdown: 1050,
  },
  styles: {
    root: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: 2,
      mb: 3,
    },
    ul: {
      fontSize: 2,
    },
    ol: {
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
      fontSize: 6,
      mb: 3,
      mt: 5,
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
      fontSize: 4,
      mb: 3,
      mt: 5,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 3,
      mb: 3,
      mt: 4,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 3,
      mb: 3,
      mt: 3,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 2,
      mb: 3,
      mt: 3,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 1,
      mb: 3,
      mt: 3,
    },
    blockquote: {
      bg: "muted",
      p: 3,
      my: 4,
      mx: [1, 2, 4, null, null],
      borderLeft: "5px solid",
      borderColor: "primary",
      borderRadius: "4px",
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
      fontSize: "14px",
      p: 3,
      my: 4,
      borderRadius: ["0px", null, "4px", null, null],
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
      color: "#ffffff",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "default",
      px: 3,
      py: 1,
      textDecoration: "none",
      ":hover, :active, :focus": {
        bg: "primaryHover",
      },
    },
    outline: {
      bg: "transparent",
      cursor: "pointer",
      boxShadow: "default",
      color: "#bb5420",
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "4px",
      borderColor: "#bb5420",
      transition: "all 0.3s ease",
      px: 2,
      py: 1,
      ":hover, :active, :focus": {
        backgroundColor: "#feebc8",
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

export default theme
