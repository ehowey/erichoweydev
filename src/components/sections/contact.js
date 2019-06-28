import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import FeatherIcon from 'feather-icons-react';

const Section = styled.section`
  margin: 4rem 0;
  padding: 2rem 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactHeader = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  color: #949494;
  font-size: 4rem;
  text-transform: uppercase;
  margin-left: -1.2rem;
`

const ContactContent = styled.div`
grid-column: 1 / -1;
grid-row: 2 / 3;
@media (min-width: ${props => props.theme.screen.tablet}) {
grid-column: 1 / 3;
grid-row: 2 / 3;
}
`

const ContactSocial = styled.div`
display: flex;
justify-content: space-evenly;
@media (min-width: ${props => props.theme.screen.tablet}) {
  width: 350px;
  margin: 0 auto;
}
`

const ContactImage = styled(Img)`
transform: scaleX(-1);
grid-column: 1 / -1;
grid-row: 3 / 4;
@media (min-width: ${props => props.theme.screen.tablet}) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
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
                <ContactHeader>Talk To Me</ContactHeader>
                <ContactContent>
                <h3>Inspired idea? New direction? Creating something amazing? Let's talk.</h3>
                <p>The best way to reach me is email, old school, I know. I don't do a lot of social media for a whole bunch of reasons but am regularly active on Github and occasionally check Twitter. I'm excited to start listening!</p>
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