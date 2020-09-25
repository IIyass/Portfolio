import React from "react"
import Header from "../../Schema/Header/NavBar"
import { Container } from "../../common"
import { Button } from "../../UI/button"
import Typewriter from "typewriter-effect"
import CodingUndraw from "../../../assests/Thumbnail/undraw_coding_6mjf.png"
import Icons from "../../Utils/Icons"
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles"

export const Hero = () => {
  return (
    <>
      <Header />
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
