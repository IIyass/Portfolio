import React from "react"
import { ContactMe } from "./ContactMe"
import { Hero } from "./Hero"
import { Project } from "./Projects"
import { AboutMe } from "./AboutMe"
import { Blogs } from "./Blogs"
import { Wrapper } from "./styles"
const Landing = () => {
  return (
    <Wrapper>
      <Hero />
      <AboutMe />
      <Project />
      <Blogs />
      <ContactMe />
    </Wrapper>
  )
}
export default Landing
