/** @jsx jsx */
import { jsx, Styled, useColorMode, Button } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { plus, darkPlus } from "./patterns"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { FiAlertCircle } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const SiteSection = () => {
  // Initiate forms
  const { register, handleSubmit, errors, reset, formState } = useForm()
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

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Transforms the form data from the React Hook Form output to a format Netlify can read
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handlePost = (formData, event) => {
    event.preventDefault()

    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        setIsSubmitted(true)
        reset()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [isSubmitted])

  console.log(isSubmitted)

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
            promotes your brand and connects with your audience.
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
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: formState.errors.name ? "#ff0000" : "textGray",
                  fontSize: 0,
                  mb: 0,
                }}
              >
                {formState.errors.name && <FiAlertCircle sx={{ mr: 1 }} />}
                Name {formState.errors.name && "- required"}
              </Styled.p>
              <input
                name="name"
                ref={register({ required: true })}
                sx={{
                  borderColor: "textGray",
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
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: formState.errors.email ? "#ff0000" : "textGray",
                  fontSize: 0,
                  mb: 0,
                }}
              >
                {formState.errors.email && <FiAlertCircle sx={{ mr: 1 }} />}
                Email
                {formState.errors.email &&
                  " - required, please format correctly"}
              </Styled.p>
              <input
                name="email"
                ref={register({
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                })}
                sx={{
                  borderColor: "textGray",
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
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: formState.errors.message ? "#ff0000" : "textGray",
                  fontSize: 0,
                  mb: 0,
                }}
              >
                {formState.errors.message && <FiAlertCircle sx={{ mr: 1 }} />}
                Inspiration goes here
                {formState.errors.message && " - You gotta tell me something!"}
              </Styled.p>
              <textarea
                rows="8"
                name="message"
                ref={register({ required: true })}
                sx={{
                  borderColor: "textGray",
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
            <div sx={{ position: "relative" }}>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    sx={{
                      bg: "#00ebc7",
                      position: "absolute",
                      top: "-36px",
                      left: "-46px",
                      borderRadius: "4px",
                      py: 2,
                      px: 3,
                    }}
                  >
                    <div
                      sx={{
                        position: "absolute",
                        top: "45px",
                        left: "50%",
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        borderWidth: "15px 12.5px 0 12.5px",
                        borderTopColor: "#00ebc7",
                        borderRightColor: "transparent",
                        borderLeftColor: "transparent",
                        borderBottomColor: "transparent",
                        zIndex: "10000",
                      }}
                    />
                    <Styled.p sx={{ p: 0, m: 0 }}>
                      <span sx={{ mr: 2 }} role="img" aria-label="Party popper">
                        🎉
                      </span>
                      Success! Message received!
                    </Styled.p>
                  </motion.div>
                )}
              </AnimatePresence>
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
