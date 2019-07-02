import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  margin: 2rem 0;
  padding: 2rem 0;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AboutContent1 = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;

  @media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
`;

const AboutImage1 = styled(Img)`
  grid-column: 1 / -1;
  grid-row: 3 / 4;

  @media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 3 / -1;
  grid-row: 2 / 3;
  }
`;

const AboutContent2 = styled.div`
  grid-column: 1 / -1;
  grid-row: 4 / 5;

  @media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 2 / -1;
  grid-row: 3 / 4;
  }
`;

const AboutImage2 = styled(Img)`
  grid-column: 1 / -1;
  grid-row: 5 / 6;

  @media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  }
`;

const AboutContent3 = styled.div`
  grid-column: 1 / -1;
  grid-row: 6 / 7;

  @media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  }
`;

const AboutImage3 = styled(Img)`
  display: none;

  @media (min-width: ${props => props.theme.screen.tablet}) {
  display: block;
  grid-column: 3 / -1;
  grid-row: 4 / 5;
  }
`;


const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      aboutImage1: file(relativePath: { eq: "images/absurd-face-circle.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
      aboutImage2: file(relativePath: { eq: "images/absurd-grad.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
      aboutImage3: file(relativePath: { eq: "images/absurd-race.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
    }
    `)
    return (
        <Section id="me">
            <AboutContainer>
                <AboutContent1>
                    <h3>I built my first website in 1998</h3>
                    <p>It sucked.</p>
                    <p>A lot has changed since then. I build kickass websites that don’t suck using the latest technologies and performance architecture. Oh, and I can grow facial hair and have two kids. It <i>really</i> has changed.</p>
                </AboutContent1>
                <AboutImage1 fluid={data.aboutImage1.childImageSharp.fluid} alt="A fun face" imgStyle={{ objectFit: 'contain' }} />

                <AboutContent2>
                    <h3>By passion a frontend web developer</h3>
                    <p>I have degrees in philosophy and social work, not computer science.</p> 
                    <p>I enjoy the juxtaposition between creating websites and my full time job as a mental health therapist. Fixing a line of code is reassuringly certain when contrasted with the nuance of human experience.</p>
                </AboutContent2>
                <AboutImage2 fluid={data.aboutImage2.childImageSharp.fluid} alt="A picture of a grad cap" imgStyle={{ objectFit: 'contain' }} />

                <AboutContent3>
                    <h3>Slow is smooth, smooth is fast</h3>
                    <p>I don’t do rushed.</p>
                    <p>Creating bespoke websites is a process that requires time, focus, and creativity. I only work on a few projects per year and appreciate the craftsmanship of a well made product.</p>
                </AboutContent3>
                <AboutImage3 fluid={data.aboutImage3.childImageSharp.fluid} alt="A slow race" imgStyle={{ objectFit: 'contain' }} />
            </AboutContainer>
        </Section>
    )
}

export default siteSection