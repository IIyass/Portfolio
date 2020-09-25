import React from "react"
import Footer from "../components/Footer.js"

import * as Style from "../styles"

const Layout = props => {
  return (
    <Style.Wrapper>
      {props.children}
      <Footer />
    </Style.Wrapper>
  )
}
export default Layout
