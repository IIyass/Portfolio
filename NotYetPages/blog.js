import React from "react"
import Layout from "../src/components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../src/components/SEO"
const Blog = () => {
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
    <Layout>
      <SEO title="Project" />
      <h1>Projects</h1>
      {console.log(data)}
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
    </Layout>
  )
}
export default Blog
