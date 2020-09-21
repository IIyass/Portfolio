import React from "react"
import Footer from "./footer"
import Header from "./header"
import * as Style from "../styles"
const Layout = props => {
  return (
    <Style.Wrapper>
      <Header />
      {props.children}
      <Footer />
    </Style.Wrapper>
  )
}
export default Layout
