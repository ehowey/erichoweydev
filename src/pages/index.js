/** @jsx jsx */
import { jsx } from "theme-ui"
import Hero from "../components/home-page/hero"
import RecentWriting from "../components/home-page/recent-writing"
import About from "../components/home-page/about"
import Work from "../components/home-page/work"
import Contact from "../components/home-page/contact"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Hello and welcome" />
      <Hero />
      <RecentWriting />
      <About />
      <Work />
      <Contact />
    </Layout>
  )
}

export default HomePage
