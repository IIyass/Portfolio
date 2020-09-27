import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Icons from "../../Utils/Icons"
import { Container } from "../../common"
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
      <Style.FooterContent as={Container}>
        <p>
          © All rights are reserved | 2020 | Made with 💖 by{" "}
          {data.site.siteMetadata.author}
        </p>
        <Icons />
      </Style.FooterContent>
    </Style.Footer>
  )
}

export default Footer
