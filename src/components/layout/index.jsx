import React from "react"
import Footer from "../Schema/Footer"
import { Global } from "./styles"
import "./fonts.css"

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
