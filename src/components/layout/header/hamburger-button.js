/** @jsx jsx */
import { jsx } from "theme-ui"

const Span = ({ open }) => (
  <span
    sx={{
      backgroundColor: "currentColor",
      display: "block",
      height: "2px",
      left: "calc(50% - 10px)",
      position: "absolute",
      transformOrigin: "center",
      transitionDuration: "86ms",
      transitionProperty: "background-color, opacity, transform",
      transitionTimingFunction: "ease-out",
      width: "20px",
      ":nth-of-type(1)": {
        top: "calc(50% - 8px)",
        transform: open && "translateY(7px) rotate(45deg)",
      },
      ":nth-of-type(2)": {
        top: "calc(50% - 1px)",
        opacity: open && "0",
      },
      ":nth-of-type(3)": {
        top: "calc(50% + 6px)",
        transform: open && "translateY(-7px) rotate(-45deg)",
      },
    }}
  ></span>
)

const SiteMobileButton = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <button
      aria-haspopup={true}
      aria-expanded={isNavOpen ? true : false}
      aria-label="Toggle Menu"
      onClick={() => setIsNavOpen(!isNavOpen)}
      sx={{
        gridColumn: "2 / 3",
        gridRow: "1 / 2",
        alignSelf: "center",
        color: isNavOpen ? "header.textOpen" : "header.text",
        cursor: "pointer",
        display: ["block", null, "none", null, null],
        height: "3rem",
        position: "relative",
        width: "3rem",
        marginLeft: "auto",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <Span open={isNavOpen} />
      <Span open={isNavOpen} />
      <Span open={isNavOpen} />
    </button>
  )
}

export default SiteMobileButton
