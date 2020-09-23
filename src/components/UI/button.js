import React from "react"
import * as Style from "../../styles"

const Button = props => {
  return (
    <Style.Button>
      <button {...props}></button>
    </Style.Button>
  )
}

export default Button
