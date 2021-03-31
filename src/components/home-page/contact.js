/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import { plus, darkPlus } from "./patterns"
import ContactForm from "../contact-form"

const SiteSection = () => {
  // Initiate forms
  // const { register, handleSubmit, errors, reset, formState } = useForm()
  const data = useStaticQuery(graphql`
    {
      contactImage1: file(relativePath: { eq: "absurd-fish-talking.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)
  // const [mode] = useColorMode()
  const isDark = false

  // const [isSubmitted, setIsSubmitted] = useState(false)

  // // Transforms the form data from the React Hook Form output to a format Netlify can read
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&")
  // }

  // const handlePost = (formData, event) => {
  //   event.preventDefault()

  //   fetch(`/`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact-form", ...formData }),
  //   })
  //     .then((response) => {
  //       setIsSubmitted(true)
  //       reset()
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsSubmitted(false)
  //   }, 2000)
  //   return () => clearTimeout(timer)
  // }, [isSubmitted])

  // console.log(isSubmitted)

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
          <Themed.h3>Inspired idea? Creating something special?</Themed.h3>
          <Themed.p>
            Hire me to create a bespoke online presence that drives success,
            promotes your brand and connects with your audience.
          </Themed.p>
          <ContactForm />
        </div>
        <GatsbyImage
          image={data.contactImage1.childImageSharp.gatsbyImageData}
          sx={{
            transform: "scaleX(-1)",
            gridColumn: ["1 / -1", "1 / 3", null, null, null],
            gridRow: "1 / 2",
            opacity: ["0.05", "1", null, null, null],
            filter: isDark ? "invert(1)" : "none",
          }}
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
