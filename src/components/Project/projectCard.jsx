import React from "react"
import * as Style from "./styles"
import { Button } from "../UI/button"
import { Link } from "gatsby"

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
