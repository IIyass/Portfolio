import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>
        My portfoli footer created by {data.site.siteMetadata.author} , c 2020{" "}
      </p>
    </footer>
  )
}

export default Footer
