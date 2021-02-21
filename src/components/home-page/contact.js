/** @jsx jsx */
import { jsx, Styled, useColorMode, Button } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { plus, darkPlus } from "./patterns"
import { useForm } from "react-hook-form"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage1: file(relativePath: { eq: "absurd-fish-talking.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  // Transforms the form data from the React Hook Form output to a format Netlify can read
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  // Initiate forms
  const { register, handleSubmit, errors, reset } = useForm()

  const handlePost = (formData, event) => {
    event.preventDefault()

    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        reset()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  console.log(errors)

  return (
    <SectionWrapper
      id="hire-me"
      pattern={plus}
      darkpattern={darkPlus}
      sx={{ mb: -5 }}
    >
      <SectionHeader>I'm ready to listen</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <div
          sx={{
            gridColumn: ["1 / -1", "2 / 6", null, null, null],
            gridRow: "1 / 2",
            zIndex: 5,
          }}
        >
          <Styled.h3>Inspired idea? Creating something special?</Styled.h3>
          <Styled.p>
            Hire me to create a bespoke online presence that drives success,
            promotes your brand and connects with your customers.
          </Styled.p>
          <form
            onSubmit={handleSubmit(handlePost)}
            name="contact-form"
            method="POST"
            data-netlify="true"
            netlify-honeypot="got-ya"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <label htmlFor="name">
              <Styled.p
                sx={{
                  textTransform: "uppercase",
                  color: "textGray",
                  fontSize: 0,
                  mb: 0,
                }}
              >
                Name
              </Styled.p>
              {errors.name && <span>Error message</span>}
              <input
                name="name"
                ref={register({ required: true })}
                sx={{
                  borderColor: "#aaa",
                  borderRadius: "4px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  width: "300px",
                }}
              />
            </label>
            <label htmlFor="email">
              <Styled.p
                sx={{
                  textTransform: "uppercase",
                  color: "textGray",
                  fontSize: 0,
                  mb: 0,
                }}
              >
                Email
              </Styled.p>
              {errors.email && <span>Please format email correctly</span>}
              <input
                name="email"
                ref={register({
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                })}
                sx={{
                  borderColor: "#aaa",
                  borderRadius: "4px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  width: "300px",
                }}
              />
            </label>
            <label htmlFor="message">
              <Styled.p
                sx={{
                  textTransform: "uppercase",
                  color: "textGray",
                  fontSize: 0,
                  mb: 0,
                }}
              >
                Awesome ideas go here
              </Styled.p>
              <textarea
                rows="8"
                name="message"
                ref={register({ required: true })}
                sx={{
                  borderColor: "text",
                  borderRadius: "4px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  maxWidth: "600px",
                  width: "100%",
                  resize: "none",
                }}
              />
            </label>
            <label
              htmlFor="got-ya"
              sx={{
                position: "absolute",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: "0",
                border: "0",
              }}
            >
              Don’t fill this out if you're human:
              <input tabIndex="-1" name="got-ya" ref={register()} />
            </label>
            <div>
              <Button
                variant="primary"
                type="submit"
                sx={{ py: 1, px: 3, mt: 3 }}
              >
                Start the conversation
              </Button>
            </div>
          </form>
        </div>
        <Img
          sx={{
            transform: "scaleX(-1)",
            gridColumn: ["1 / -1", "1 / 3", null, null, null],
            gridRow: "1 / 2",
            opacity: ["0.05", "1", null, null, null],
            filter: isDark ? "invert(1)" : "none",
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
            display: ["none", "block", null, null, null],
            background: isDark
              ? "linear-gradient(90deg, transparent, #1a202c 60%)"
              : "linear-gradient(90deg, transparent, #ffffff 60%)",
            backgroundSize: "cover",
          }}
        />
      </div>
    </SectionWrapper>
  )
}

export default SiteSection
