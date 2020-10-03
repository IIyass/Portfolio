import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./projectCard"
import { ProjectLayout, Wrapper } from "./styles"
import { Container } from "../common"

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
    <Wrapper>
      <ProjectLayout as={Container}>
        {data.github.viewer.repositories.edges.map(project => {
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
    </Wrapper>
  )
}

export default Project
