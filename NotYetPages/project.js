import React from "react"
import Layout from "../src/components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectLayout } from "../src/components/ProjectLayout"
import ProjectCard from "../src/components/Utils/ProjectCard"

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(
            first: 8
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                url
                description
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Projects</h1>
      <ProjectLayout>
        {data.github.viewer.repositories.edges.map(project => {
          //FOREACH TEST =?EXCO 1 RESULT
          return (
            <ProjectCard
              id={project.node.id}
              name={project.node.name}
              url={project.node.url}
              description={project.node.description}
              url={project.node.url}
            />
          )
        })}
      </ProjectLayout>
    </Layout>
  )
}

export default Project
