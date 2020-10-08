import React from "react"
import * as Style from "./styles"
import { Link } from "gatsby"
import image from "../../assests/illustrations/live.svg"

const ProjectCard = ({ name, url, description, topics }) => {
  return (
    <Style.Card>
      <div className="Card">
        <div className="CardFront">
          <div className="CardImage"></div>
          <h1>
            <span id="CardTitle">{name}</span>
          </h1>
          <div className="CardDetails"> {description}</div>
        </div>
        <div className="CardBack">
          <div className="BackButton">
            <Link to={url}>GITHUB REPOSITORY</Link>
            <Link
              to="/model"
              state={{
                modal: true,
                message: "Sorry this app isn't deployed yet !",
                picture: image,
              }}
            >
              Live
            </Link>
          </div>
          <ul>
            {topics.map(e => {
              return <li>{e.node.topic.name}</li>
            })}
          </ul>
        </div>
      </div>
    </Style.Card>
  )
}

export default ProjectCard
