import React from "react"
import { Container } from "../../common"
import { Button } from "../../UI/button"
import Typewriter from "typewriter-effect"
import CodingUndraw from "../../../assests/illustrations/Intro.svg"
import Icons from "../../Utils/Icons"
import { IntroWrapper, Details, Thumbnail } from "./styles"
import Header from "../../Schema/Header/NavBar"
export const Hero = ({ path }) => {
  return (
    <>
      <Header path={path} />
      <IntroWrapper as={Container}>
        <Details>
          <Typewriter
            options={{
              strings: ["Hello World"],
              autoStart: true,
              loop: true,
            }}
          />
          <p>
            I'm Ilyass <span id="name">BELKASMI</span>, I'm a Software Engineer
            || MERN stack Developer !
          </p>
          <Icons />
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
