import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Seo from "./src/utils/seo"

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={{ Seo }}>{element}</MDXProvider>
}
