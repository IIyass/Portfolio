import React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"

const aboutMe = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <AboutMe />
    </Layout>
  )
}
export default aboutMe
