import React from "react"
import { Container } from "../../common"
import { Button } from "../../UI/button"
import Typewriter from "typewriter-effect"
import CodingUndraw from "../../../assests/illustrations/Intro.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { IntroWrapper, Details, Thumbnail } from "./styles"
import Header from "../../Schema/Header/NavBar"
export const Hero = ({ path }) => {
  return (
    <>
      <IntroWrapper as={Container}>
        <Details>
          <Typewriter
            options={{
              strings: ["Hello World"],
              autoStart: true,
              loop: true,
            }}
          />
          <h2>
            I'm Ilyass <span id="name">BELKASMI</span>, I'm a Software Engineer
            || MERN Stack Developer !
          </h2>
          <Button as={AnchorLink} href="#contactMe">
            Hire Me
          </Button>
        </Details>
        <Thumbnail>
          <img
            src={CodingUndraw}
            alt="I’m Ilyass and I’m a MERNStack engineer!"
          />
        </Thumbnail>
      </IntroWrapper>
    </>
  )
}
