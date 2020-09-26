import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  return <>Hello</>
}

// const Blog = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       github {
//         viewer {
//           repositories(
//             first: 8
//             orderBy: { field: STARGAZERS, direction: DESC }
//           ) {
//             edges {
//               node {
//                 id
//                 name
//                 url
//                 description
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <h1>Projects</h1>
//       <Style.ProjectLayout>
//         {data.github.viewer.repositories.edges.map(project => {
//           //FOREACH TEST =?EXCO 1 RESULT
//           // COLOR BLINDNESS // instgram program
//           return (
//             <ProjectCard
//               id={project.node.id}
//               name={project.node.name}
//               url={project.node.url}
//               description={project.node.description}
//               url={project.node.url}
//             />
//           )
//         })}
//       </Style.ProjectLayout>
//     </Layout>
//   )
// }
export default Blog
