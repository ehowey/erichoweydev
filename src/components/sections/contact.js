/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage1: file(
        relativePath: { eq: "images/absurd-fish-talking.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section
      sx={{
        my: 5,
        mx: 0,
        py: 5,
        px: 0
      }}
      id="contact"
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 5,
          maxWidth: "1024px",
          margin: "0 auto",
          py: 0,
          px: 3
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", "2 / 6", null],
            gridRow: "1 / 2",
            zIndex: 5
          }}
        >
          <h2>I'm ready to listen!</h2>
          <h3>
            Inspired idea? New direction? Creating something amazing? Let's
            talk!
          </h3>
          <p>
            The best way to reach me is via{" "}
            <a href="mailto:eric@erichowey.dev">email.</a>
          </p>
          <p>
            I am excited to start talking. Building a prouctive working
            relationship is an absolute priority for me. The quality of my
            overall work depends on our ability to have clear and open
            communication about design and development decisions.
          </p>
        </div>
        <Img
          sx={{
            transform: "scaleX(-1)",
            gridColumn: ["1 / -1", "1 / 3", null],
            gridRow: "1 / 2",
            opacity: ["0.1", "1", null]
          }}
          fluid={data.contactImage1.childImageSharp.fluid}
          alt="Talking Fish"
          imgStyle={{ objectFit: "contain" }}
        />
        <div
          sx={{
            gridColumn: "1 / 3",
            gridRow: "1 / 2",
            zIndex: "3",
            display: ["none", "block", null],
            background: "linear-gradient(90deg, transparent, #ffffff)",
            backgroundSize: "cover"
          }}
        />
      </div>
    </section>
  );
};

export default SiteSection;
