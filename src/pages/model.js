import React from "react"
import ModelComponent from "../components/Utils/Modal/Modal"
import { Global } from "../components/layout/styles"
const Model = props => {
  const { message, picture } = props.location.state

  return (
    <>
      <Global />
      <ModelComponent message={message} picture={picture} />
    </>
  )
}
export default Model
