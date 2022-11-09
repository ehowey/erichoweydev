/** @jsx jsx */
import { jsx } from "theme-ui"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import SiteContainer from "./site-container"
import Header from "./header/header"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"

const SiteLayout = ({ children }) => {
  return (
    <SiteContainer>
      <SkipNavLink />
      <Header />
      <Main>
        <SkipNavContent />
        <ContentContainer>{children}</ContentContainer>
      </Main>
      <Footer />
    </SiteContainer>
  )
}

export default SiteLayout