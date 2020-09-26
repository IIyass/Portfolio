import React from "react"
import { Container } from "../../common"
import ContactMeForm from "./ContactMeForm"
import ContactMeUndraw from "../../../assests/illustrations/Contactme.svg"
import * as Style from "./styles"

export const ContactMe = () => (
  <Style.ContactWrapper id="contactMe" as={Container}>
    <Style.Details>
      <h1>Contact Me</h1>
      <ContactMeForm />
    </Style.Details>
    <Style.Thumbnail>
      <img
        src={ContactMeUndraw}
        alt="I’m John and I’m a Backend & Devops engineer!"
      />
    </Style.Thumbnail>
  </Style.ContactWrapper>
)
