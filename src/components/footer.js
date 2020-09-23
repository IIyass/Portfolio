import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as Style from "../styles"
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
    <Style.Footer>
      <footer>
        <p>
          © All rights are reserved | 2020 | Made with 💖 by{" "}
          {data.site.siteMetadata.author}
        </p>
      </footer>
    </Style.Footer>
  )
}

export default Footer
