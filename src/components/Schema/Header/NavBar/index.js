import React from "react"
import * as Style from "./styles"
import NavBarLinks from "../NavBarLinks"
import { Link } from "gatsby"
import { Container } from "../../../common"

const NavBar = ({ path }) => {
  return (
    <Style.Wrapper as={Container}>
      <Style.Brand as={Link} to="/">
        <div className="logo">
          <div className="X">
            <div className="I1" />
            <div className="I2" />
          </div>
          <p className="YASS">YASS</p>
          <div className="I3" />
        </div>
      </Style.Brand>
      <NavBarLinks path={path} />
    </Style.Wrapper>
  )
}

export default NavBar
