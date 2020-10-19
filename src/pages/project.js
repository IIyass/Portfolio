import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Project"

const Project = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <Projects />
    </Layout>
  )
}

export default Project
