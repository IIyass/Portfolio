import React from "react"
import { Footer } from "components/theme"
import { Global } from "./styles"
import "./fonts.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  )
}
