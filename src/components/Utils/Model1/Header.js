import React from "react"
import PropTypes from "prop-types"

import * as Style from "./styles"

const Header = ({ title, subTitle }) => (
  <Style.ModalHeader>
    <h1>{title}</h1>
    {subTitle}
  </Style.ModalHeader>
)

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.element,
}

export default Header
