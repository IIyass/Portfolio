import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as Style from "../styles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header>
      <Style.HeaderContainer>
        <h1>{data.site.siteMetadata.author}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contactUs">contactMe</Link>
            </li>
            <li>
              <Link to="/aboutMe">aboutMe</Link>
            </li>
          </ul>
        </nav>
      </Style.HeaderContainer>
    </header>
  )
}

export default Header
