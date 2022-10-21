import * as React from "react"
import { Slice } from "gatsby"

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </div>
  )
}

export default Layout
