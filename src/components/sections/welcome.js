import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  background: ${props => props.theme.color.primary};
`

const CTA = styled.a`
  color: ${props => props.theme.color.textBlack};
  border: 2px solid #333333;
  padding: 0.5rem 0.8rem;
  border-radius: 24px;
  transition-duration: 0.3s;
  letter-spacing: 1px;

  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.textWhite};
    border-color: ${props => props.theme.color.secondary};
  }

  &::after {
    content: "\\00A0 \\2192";
  }
`

const WelcomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(50vh - 41px) calc(50vh - 41px);
  grid-gap: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`

const WelcomeImage = styled(Img)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
@media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 1 / 2;
  grid-row: 1 / -1;
}
`

const WelcomeContent = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  align-self: center;
  justify-self: center;
@media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 2 / 3;
  grid-row: 1 / -1;
}
`
const WelcomeTitle = styled.h1`
  margin-bottom: 2rem;
`


const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "images/absurd-lightbulb.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
    }
    `)
    return (
            <Section>
              <WelcomeContainer>
                <WelcomeImage fluid={data.welcomeImage.childImageSharp.fluid} alt="Arrangement of lightbulbs" imgStyle={{ objectFit: 'contain' }} />
                <WelcomeContent>
                  <WelcomeTitle>Amazing websites.<br />Done right the first time.</WelcomeTitle>
                  <CTA href="#contact">Talk to me</CTA>
                </WelcomeContent>
            </WelcomeContainer>
        </Section>
    )
}

export default siteSection