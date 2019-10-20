/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage1: file(relativePath: { eq: "absurd-eh-face.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage2: file(relativePath: { eq: "absurd-grad.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      aboutImage3: file(relativePath: { eq: "absurd-race.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <section
      id="me"
      sx={{
        m: 0,
        p: 0,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)"
      }}
    >
      <div
        sx={{
          padding: "0 1rem"
        }}
      >
        <h2
          sx={{
            textTransform: "uppercase"
          }}
        >
          About Me
        </h2>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: "2rem",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "0 1rem"
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", "1 / 3", null],
            gridRow: "2 / 3"
          }}
        >
          <h3>I built my first website in 1998</h3>
          <p>It sucked.</p>
          <p>
            A lot has changed since then. I develop kickass websites that don’t
            suck using the latest technologies and performance architecture. I
            can grow facial hair and have two super awesome kids. It{" "}
            <i>really</i> has changed.
          </p>
        </div>
        <Img
          sx={{
            gridColumn: ["1 / -1", "3 / -1", null],
            gridRow: ["1 / 2", "2 / 3", null]
          }}
          fluid={data.aboutImage1.childImageSharp.fluid}
          alt="A fun face"
          imgStyle={{ objectFit: "contain" }}
        />

        <div
          sx={{
            gridColumn: ["1 / -1", "2 / -1", null],
            gridRow: ["4 / 5", "3 / 4", null]
          }}
        >
          <h3>By passion a frontend web developer</h3>
          <p>
            I have degrees in philosophy and social work, not computer science.
          </p>
          <p>
            I enjoy the juxtaposition between creating websites and my full time
            job as a mental health therapist. Fixing a line of code is
            reassuringly certain when contrasted with the nuance of human
            experience.
          </p>
        </div>
        <Img
          sx={{
            gridColumn: ["1 / -1", "1 / 2", null],
            gridRow: ["3 / 4", "3 / 4", null]
          }}
          fluid={data.aboutImage2.childImageSharp.fluid}
          alt="A picture of a grad cap"
          imgStyle={{ objectFit: "contain" }}
        />

        <div
          sx={{
            gridColumn: ["1 / -1", "1 / 3", null],
            gridRow: ["6 / 7", "4 / 5", null]
          }}
        >
          <h3>Slow is smooth, smooth is fast</h3>
          <p>I don’t do rushed.</p>
          <p>
            Building a fast and easy to use, website is a slow process. It
            requires focus, collaboration and creativity. I only work on a few
            projects per year and appreciate the craftsmanship of a well made
            product.
          </p>
        </div>
        <Img
          sx={{
            gridColumn: ["1 / -1", "3 / -1", null],
            gridRow: ["5 / 6", "4 / 5", null]
          }}
          fluid={data.aboutImage3.childImageSharp.fluid}
          alt="A slow race"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default SiteSection;
