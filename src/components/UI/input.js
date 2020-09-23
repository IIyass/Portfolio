import React from "react"
import * as Style from "../../styles"

const Input = ({ label, feedback, ...props }) => {
  return (
    <Style.Input feedback={feedback}>
      {label && <p>{label}</p>}
      <input {...props}></input>
      {feedback && <p id="feedback">{feedback}</p>}
    </Style.Input>
  )
}

export default Input
