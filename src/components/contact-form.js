/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { FiAlertCircle } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const ContactForm = () => {
  // Initiate forms
  const { register, handleSubmit, errors, reset, formState } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  return (
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
            color: formState.errors.name ? "alertRed" : "textGray",
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
            color: formState.errors.email ? "alertRed" : "textGray",
            fontSize: 0,
            mb: 0,
          }}
        >
          {formState.errors.email && <FiAlertCircle sx={{ mr: 1 }} />}
          Email
          {formState.errors.email && " - required, please format correctly"}
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
            color: formState.errors.message ? "alertRed" : "textGray",
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
                bg: "alertGreen",
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
                  borderTopColor: "alertGreen",
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
        <Button variant="primary" type="submit" sx={{ py: 1, px: 3, mt: 3 }}>
          Start the conversation
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
