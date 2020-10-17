import React from "react"
import * as Style from "./styles"
import { Container } from "../common"
import { Link, graphql, useStaticQuery } from "gatsby"
import image from '../../assests/illustrations/Blog.svg'
import BlogCard from './BolgCard'



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
        <Style.BlogLayout>
          {data.allContentfulProject.edges.map(edge => {
            return (
              <Link to={`/project/${edge.node.slug}`}>
                <BlogCard title={edge.node.title} Details={edge.node.date} image={image} />
              </Link>
            )
          })}
        </Style.BlogLayout>
      </Style.Container>
    </Style.Wrapper >
  )
}
export default Blogs




