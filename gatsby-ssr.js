import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Seo from "./src/components/seo"

const HeadComponents = [
  <script
    src="https://cdn.usefathom.com/script.js"
    data-site="FNHMMBXM"
    defer
  ></script>,
]

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={{ Seo }}>{element}</MDXProvider>
}
