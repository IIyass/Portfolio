import React from "react"
import * as Style from "./styles"
import { Container } from "../common"
import { Link, graphql, useStaticQuery } from "gatsby"





const Blogs = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: date, order: DESC }) {
        edges {
          node {
            date
            title
            slug
          }
        }
      }
    }
  `)
  return (
    <Style.Wrapper>
      <Style.Container as={Container}>
      <ol>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li>
              <h2>
                <Link to={`/project/${edge.node.slug}`}>{edge.node.title}</Link>
              </h2>
              <p>{edge.node.date}</p>
            </li>
          )
        })}
      </ol>
      </Style.Container>
    </Style.Wrapper>
  )
}
export default Blogs




