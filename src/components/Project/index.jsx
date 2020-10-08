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
            first: 20
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                url
                description
                repositoryTopics(first: 10) {
                  edges {
                    node {
                      topic {
                        name
                      }
                    }
                  }
                }
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
            project.node.description && (
              <ProjectCard
                id={project.node.id}
                name={project.node.name}
                url={project.node.url}
                description={project.node.description}
                url={project.node.url}
                topics={project.node.repositoryTopics.edges}
              />
            )
          )
        })}
      </ProjectLayout>
    </Wrapper>
  )
}

export default Project
