import * as React from "react"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </div>
  )
}

export default Layout
