import React from "react"
import * as Style from "../styles"

const SharedComponent = ({ illustration, content, title, order }) => {
  return (
    <Style.SharedComponentContainer>
      <Style.ContentContainer order={order}>
        <h1>{title}</h1>
        {content}
      </Style.ContentContainer>
      <img src={illustration} />
    </Style.SharedComponentContainer>
  )
}

export default SharedComponent
