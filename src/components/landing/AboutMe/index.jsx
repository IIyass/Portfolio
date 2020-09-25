import React from "react"
import { Container } from "../../common"
import * as Style from "./styles"
import AboutMeUndraw from "../../../assests/illustrations/Aboutme.svg"
import { AboutWrapper } from "./styles"

export const AboutMe = () => {
  return (
    <AboutWrapper id="aboutMe" as={Container}>
      <Style.Thumbnail>
        <img src={AboutMeUndraw} alt="I’m John and I’m a Software engineer!" />
      </Style.Thumbnail>
      <Style.Details>
        <h1>About Me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy.
        </p>
      </Style.Details>
    </AboutWrapper>
  )
}
