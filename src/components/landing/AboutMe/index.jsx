import React from "react"
import { Link } from "gatsby"
import Curriculum from "../../../Files/Curriculum.pdf"
import { Container } from "../../common"
import { Button } from "../../UI/button"
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
          It is a pleasure to have you going through my portfolio. I believe we
          can be a great match if you're looking for a developer who would love
          to work on challenging projects & new Stuff. I love helping founders
          add value to society through technology...
        </p>
        <Style.MoreInfo>
          <Button as={Link} to="/aboutMe">
            More
          </Button>
          <Button as={Link} href={Curriculum} download>
            Curriculum vitæ
          </Button>
        </Style.MoreInfo>
      </Style.Details>
    </AboutWrapper>
  )
}
