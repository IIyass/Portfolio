import React from "react"
import Footer from "../components/Footer"

import * as Style from "../styles"

const Layout = props => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  )
}
export default Layout
