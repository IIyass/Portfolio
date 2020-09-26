import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Icons from "../../Utils/Icons"
import * as Style from "./styles"
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
      <p>
        © All rights are reserved | 2020 | Made with 💖 by{" "}
        {data.site.siteMetadata.author}
      </p>
      <Icons />
    </Style.Footer>
  )
}

export default Footer
