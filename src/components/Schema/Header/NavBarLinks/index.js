import React, { useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import * as Style from "./styles"
import { Link } from 'gatsby'

const NavBarLinks = ({ path, LandingPage }) => {
  const [selected, Setselected] = useState(1)

  useEffect(() => {
    SetselectedAnchors()
  }, [path])

  const SetselectedAnchors = () => {
    switch (path) {
      case "/":
        return Setselected(1)
      case "/blog":
        return Setselected(2)
      case "/aboutme":
        return Setselected(4)
      case "/project":
        return Setselected(5)
    }
  }

  return (
    <Style.Wrapper selected={selected}>
      {LandingPage ? <> <li>
        <AnchorLink href="/">Home</AnchorLink>
      </li>
        <li>
          <AnchorLink href="#blog">Blog</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contactMe">contactMe</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#aboutMe">aboutMe</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#project">Projects</AnchorLink>
        </li></> : <><li>
          <Link href="/">Home</Link>
        </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/">contactMe</Link>
          </li>
          <li>
            <Link href="/aboutme">aboutMe</Link>
          </li>
          <li>
            <Link href="/project">Projects</Link>
          </li></>}

    </Style.Wrapper>
  )
}

export default NavBarLinks
