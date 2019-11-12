/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "react-scroll";

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "absurd-lightbulb-head.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <section
      sx={{
        height: [
          "calc(100vh - 58px)",
          "calc(100vh - 80px)",
          "calc(100vh - 80px)"
        ],
        backgroundColor: "primary",
        mt: -3,
        p: 0,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)"
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: ["35vh 1fr", "30vh 30vh", null],
          gridGap: "1rem",
          alignContent: ["start", "center", null],
          maxWidth: "1024px",
          height: "100%",
          margin: "0 auto",
          padding: "0 1rem"
        }}
      >
        <Img
          sx={{
            gridColumn: ["1 / -1", "1 / 2", null],
            gridRow: ["1 / 2", "1 / -1", null],
            height: "100%",
            width: "100%"
          }}
          fluid={data.welcomeImage.childImageSharp.fluid}
          alt="Arrangement of lightbulbs"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null],
            gridRow: ["2 / 3", "1 / -1", null],
            alignSelf: ["start", "center", null],
            justifySelf: "center",
            mt: [3, 0, null]
          }}
        >
          <h1
            sx={{
              fontSize: [5, 6, 7]
            }}
          >
            Bespoke websites.
            <br />
            Listening and caring.
          </h1>
          <Link
            sx={{
              color: "white",
              textDecoration: "none",
              border: "2px solid secondary",
              backgroundColor: "secondary",
              padding: ["0.5rem 0.8rem", null, "0.8rem 1rem", null, null],
              borderRadius: "24px",
              transitionDuration: "0.3s",
              letterSpacing: "1px",
              cursor: "pointer",

              "::after": {
                content: '"\\00A0 \\2192"'
              },

              ":hover": {
                opacity: "0.8"
              }
            }}
            to="contact"
            smooth={true}
          >
            Talk to me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SiteSection;