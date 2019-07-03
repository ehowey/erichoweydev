import React from 'react'
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby"

const FooterComponent = styled.footer`
  padding: 1rem;
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.textWhite};
  a {
    color: inherit;
  }
`

const siteFooter = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <FooterComponent>
          <p>Created by <a href="mailto:eric@erichowey.dev">{data.site.siteMetadata.author}</a><br/>
          Illustrations by <a href="https://twitter.com/diana_valeanu">Diana Valeanu</a></p>
        </FooterComponent>
    )
}

export default siteFooter