import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import ProjectCard from "../components/Utils/ProjectCard"
const aboutMe = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <ProjectCard />
      // SWR MODEL PAGINATION EMAIL ... // CSS VARIABLE // PROJECT STRUCTURE
    </Layout>
  )
}
export default aboutMe
