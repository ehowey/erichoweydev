/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import FeatherIcon from 'feather-icons-react'

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
                gridRow: 1 / 2,
                zIndex: 5
                }}
                >
                  <h1>I'm ready to listen!</h1>
                  <h3>Inspired idea? New direction? Creating something amazing? Let's talk!</h3>
                  <div
                  sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: ["auto", "300px", null]
                  }}
                  >
                    <a href="mailto:eric@erichowey.dev">
                    <FeatherIcon
                    sx={{
                    padding: 1,
                    borderRadius: "50%",
                    backgroundColor: "secondary",
                    color: "white",
                    width: "52px",
                    height: "52px"
                    }}
                    icon="mail"
                     />
                     </a>
                    <a href="https://github.com/ehowey">
                    <FeatherIcon
                    sx={{
                    padding: 1,
                    borderRadius: "50%",
                    backgroundColor: "secondary",
                    color: "white",
                    width: "52px",
                    height: "52px"
                    }}
                    icon="github"
                    />
                    </a>
                    <a href="https://twitter.com/erichoweydev">
                    <FeatherIcon
                    sx={{
                    padding: 1,
                    borderRadius: "50%",
                    backgroundColor: "secondary",
                    color: "white",
                    width: "52px",
                    height: "52px"
                    }}
                    icon="twitter"
                     />
                    </a>
                  </div>
                </div>
                <Img
                sx={{
                transform: "scaleX(-1)",
                gridColumn: ["1 / -1", "1 / 3", null],
                gridRow: "1 / 2",
                opacity:["0.2", "1", null]
                }}
                fluid={data.contactImage1.childImageSharp.fluid} 
                alt="Talking Fish" 
                imgStyle={{ objectFit: 'contain' }}
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
    )
}

export default siteSection
