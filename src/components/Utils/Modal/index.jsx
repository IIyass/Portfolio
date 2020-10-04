import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import {
  faTimesCircle,
  faHome,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import image from "../../../assests/illustrations/live.svg"
import * as Style from "./styles"

const Modal = () => (
  <Style.ModelWrapper>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <Style.ModelContainer>
          {modal ? (
            <Style.ModelRouting>
              <FontAwesomeIcon as={Link} to={closeTo} icon={faTimesCircle} />
              <FontAwesomeIcon icon={faHome} />
              {/* <Link to="/">Go back to the homepage</Link> */}
              {/* <Link to={closeTo}>Close</Link> */}
            </Style.ModelRouting>
          ) : (
            <header>
              <h1>Live</h1>
            </header>
          )}
          <Style.ModelContent>
            <img src={image} />
            <h2>Sorry, this app isn't deployed yet </h2>
          </Style.ModelContent>
        </Style.ModelContainer>
      )}
    </ModalRoutingContext.Consumer>
  </Style.ModelWrapper>
)

export default Modal
