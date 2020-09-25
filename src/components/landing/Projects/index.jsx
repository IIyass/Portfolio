import React from "react"
import { Container } from "../../common"
import * as Style from "./styles"
import ActivityUndraw from "../../../assests/illustrations/Project.svg"

export const Project = () => {
  return (
    <Style.ProjectsWrapper id="projects" as={Container}>
      <Style.Thumbnail>
        <img src={ActivityUndraw} alt="I’m John and I’m a Software engineer!" />
      </Style.Thumbnail>
      <Style.Details>
        <h1>My Projects</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy.
        </p>
      </Style.Details>
    </Style.ProjectsWrapper>
  )
}
