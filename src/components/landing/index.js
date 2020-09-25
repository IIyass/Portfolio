import React from "react"
import { ContactMe } from "./ContactMe"
import { Hero } from "./Hero"
import { Project } from "./Projects"
import { AboutMe } from "./AboutMe"
import { Blogs } from "./Blogs"
import Footer from "../Footer"
import * as Style from "./styles"
const Landing = () => {
  return (
    <>
      <Style.Wrapper>
        <Hero />
        <AboutMe />
        <Project />
        <Blogs />
        <ContactMe />
      </Style.Wrapper>
      <Footer />
    </>
  )
}
export default Landing
// <SharedComponent
// content={ProjectContent}
// title="Projects"
// illustration={ActivityUndraw}
// order={1}
// />
