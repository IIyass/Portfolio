import React from "react"
import { Link } from "gatsby"
import ProjectCards from "../components/ProjectCard"
export const AboutMe = (
  <div>
    <p>
      I am a software engineer, passionate about innovation and new
      technologies. I love high-performance, maintainable and well organized
      code. I'm a Full-Stack developer working in an environment full of
      challenges.
    </p>
    <span id="Phone">0621280720</span>
    <Link to="/aboutMe">More ...</Link>
  </div>
)

export const ProjectContent = (
  <ProjectCards
    name="Twtter clone"
    url="https://github.com/IIyass/Social-Media-Clone"
    description="Twitter clone"
  />
)
