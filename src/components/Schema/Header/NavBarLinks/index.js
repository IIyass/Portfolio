import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import * as Style from "./styles"

const NavBarLinks = () => {
  return (
    <Style.Wrapper>
      <nav>
        <ul>
          <li>
            <AnchorLink href="/">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#blogs">Blog</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contactUs">contactMe</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#aboutMe">aboutMe</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#projects">Projects</AnchorLink>
          </li>
        </ul>
      </nav>
    </Style.Wrapper>
  )
}

export default NavBarLinks
