import React from "react"
import Footer from "../Schema/Footer"
import Header from "../Schema/Header/NavBar"
import { Global, Wrapper } from "./styles"

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Layout
