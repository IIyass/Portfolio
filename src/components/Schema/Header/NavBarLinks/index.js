import React, { useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import * as Style from "./styles"

const NavBarLinks = ({ path }) => {
  const [selected, Setselected] = useState(1)

  useEffect(() => {
    SetselectedAnchors()
  }, [path])

  const SetselectedAnchors = () => {
    switch (path) {
      case "/":
        return Setselected(1)
      case "/abouteMe":
        return Setselected(2)
      case "/blog":
        return Setselected(3)
      case "/contactUs":
        return Setselected(4)
      case "/project":
        return Setselected(5)
    }
  }

  return (
    <Style.Wrapper selected={selected}>
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
    </Style.Wrapper>
  )
}

export default NavBarLinks
