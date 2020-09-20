import React from "react"
import Footer from "./footer"
import Header from "./header"
import { Container } from "../styles/container"
const Layout = props => {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  )
}
export default Layout
