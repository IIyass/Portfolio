import React from "react"
import { Link } from "gatsby"
import { Container } from "../../common"
import * as Style from "./styles"
import { Button } from "../../UI/button"
import ActivityUndraw from "../../../assests/illustrations/Project.svg"

export const Project = () => {
  return (
    <Style.ProjectsWrapper id="project" as={Container}>
      <Style.Details>
        <div>
          <h1>My Projects</h1>
          <p>
            During my journey through the evolution of the technology, I picked
            my "Must Have" technologies to work with, that includes Javascript,
            Mongodb, NodeJs, ExpressJs, React Js, Restful Web APIs, GraphQl,
            GatsbyJs, HTML5, CSS3 and Bootstrap, Semantic UI, Unit Testing ||
            You can check my projects Here :
          </p>
        </div>
        <Button as={Link} to="/project">
          Projects
        </Button>
      </Style.Details>

      <Style.Thumbnail>
        <img src={ActivityUndraw} alt="I’m John and I’m a Software engineer!" />
      </Style.Thumbnail>
    </Style.ProjectsWrapper>
  )
}
