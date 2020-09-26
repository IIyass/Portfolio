import React from "react"
import { ContactMe } from "./ContactMe"
import { Hero } from "./Hero"
import { Project } from "./Projects"
import { AboutMe } from "./AboutMe"
import { Blogs } from "./Blogs"
import * as Style from "./styles"
const Landing = ({ path }) => {
  return (
    <Style.Wrapper>
      <Hero path={path} />
      <AboutMe />
      <Project />
      <Blogs />
      <ContactMe />
    </Style.Wrapper>
  )
}
export default Landing
