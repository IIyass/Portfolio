import React from "react"
import Footer from "../Schema/Footer"
import { Global } from "./styles"

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      {children}
      <Footer />
    </>
  )
}
export default Layout
