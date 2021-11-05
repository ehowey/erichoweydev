import React from "react"
import { NavProvider } from "./src/utils/nav-context"
import { MDXProvider } from "@mdx-js/react"
import Seo from "./src/utils/seo"

export const wrapRootElement = ({ element }) => {
  return (
    <NavProvider>
      <MDXProvider components={{ Seo }}>{element}</MDXProvider>
    </NavProvider>
  )
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav")
    if (skipLink) {
      skipLink.focus()
    }
  }
}
