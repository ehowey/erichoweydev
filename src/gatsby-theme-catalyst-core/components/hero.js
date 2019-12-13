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
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto",
        alignContent: ["start", null, "center", null, null],
        backgroundColor: "accent",
        p: 3
      }}
    >
      <Img
        sx={{
          gridColumn: ["1 / -1", null, "1 / 2", null, null],
          gridRow: ["1 / 2", null, "1 / -1", null, null]
          // height: "100%",
          // width: "100%",
          // maxHeight: ["25vh", "35vh", "80vh", null, null]
        }}
        fluid={data.welcomeImage.childImageSharp.fluid}
        alt="Lightbulb on top of a person watering a plant"
        // imgStyle={{ objectFit: "cotainn" }}
      />
      <div
        sx={{
          gridColumn: ["1 / -1", null, "2 / 3", null, null],
          gridRow: ["2 / 3", null, "1 / -1", null, null],
          alignSelf: ["start", null, "center", null, null],
          justifySelf: "center",
          mt: [3, null, 0, null, null]
        }}
      >
        <h1>
          Hello! My name is Eric Howey. I am a web developer and mental health
          therapist. I listen and care.
        </h1>
        <Link
          sx={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "primary",
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
    </section>
  );
};

export default SiteSection;
