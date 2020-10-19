import React from "react"
import Footer from "../Schema/Footer"
import Header from "../Schema/Header/NavBar"
import { Global, Wrapper } from "./styles"

const Layout = ({ children, LandingPage, path }) => {
  return (
    <>
      <Global />
      <Header LandingPage={LandingPage} path={path} />
      {children}
      <Footer />
    </>
  )
}
export default Layout
