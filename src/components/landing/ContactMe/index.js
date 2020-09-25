import React from "react"
import { Container } from "../../common"
import ContactMeForm from "./ContactMeForm"
import ContactMeUndraw from "../../../assests/Thumbnail/undraw_delivery_address_03n0.png"
import * as Style from "./styles"

export const ContactMe = () => (
  <Style.ContactWrapper as={Container}>
    <Style.Details>
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
