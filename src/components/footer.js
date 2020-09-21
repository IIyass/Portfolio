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
        © All rights are reserved | 2020 | Made with 💖 by{" "}
        {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
