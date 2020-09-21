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
        <div className="logo">
          <div className="X">
            <div className="I1" />
            <div className="I2" />
          </div>
          <h1 className="YASS">YASS</h1>
        </div>
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
