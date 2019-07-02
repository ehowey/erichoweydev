import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import FeatherIcon from 'feather-icons-react';

const Section = styled.section`
  margin: 2rem 0;
  padding: 2rem 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactContent = styled.div`
grid-column: 1 / -1;
grid-row: 1 / 2;
@media (min-width: ${props => props.theme.screen.tablet}) {
grid-column: 2 / 4;
grid-row: 1 / 2;
}
`

const ContactSocial = styled.div`
display: flex;
justify-content: space-evenly;

a:hover {
  opacity: 0.8;
}

@media (min-width: ${props => props.theme.screen.tablet}) {
  width: 350px;
  margin: 0 auto;
}
`

const ContactImage = styled(Img)`
transform: scaleX(-1);
display: none;
@media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: block;
}
`

const Icon = styled(FeatherIcon)`
padding: 0.5rem;
border-radius: 50%;
background-color: ${props => props.theme.color.secondary};
color: white;
width: 48px;
height: 48px;
`

const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      contactImage1: file(relativePath: { eq: "images/absurd-fish-talking.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
    }
    `)
    return (
        <Section id="contact">
            <ContactContainer>
                <ContactContent>
                <h1>I'm ready to listen!</h1>
                <h3>Inspired idea? New direction? Creating something amazing? Let's talk!</h3>
                <ContactSocial>
                <a href="mailto:eric@erichowey.dev"><Icon icon="mail" /></a>
                <a href="https://github.com/ehowey"><Icon icon="github" /></a>
                <a href="https://twitter.com/erichoweydev"><Icon icon="twitter" /></a>
                </ContactSocial>
                </ContactContent>
                <ContactImage fluid={data.contactImage1.childImageSharp.fluid} alt="Talking Fish" imgStyle={{ objectFit: 'contain' }}/>
            </ContactContainer>
        </Section>
    )
}

export default siteSection