import React from "react"
import * as Style from "../../styles"

const Textarea = ({ label, feedback, ...props }) => {
  return (
    <Style.Textarea feedback={feedback}>
      {label && <p>{label}</p>}
      <textarea {...props}></textarea>
      {feedback && <p id="feedback">{feedback}</p>}
    </Style.Textarea>
  )
}

export default Textarea
