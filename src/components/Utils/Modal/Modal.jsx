import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { faTimesCircle, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Style from "./styles"

const Modal = ({ message, picture }) => (
  <Style.ModelWrapper>
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <Style.ModelContainer>
          {modal ? (
            <Style.ModelRouting>
              <Link to={closeTo}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </Style.ModelRouting>
          ) : (
            <header>
              <h1>Live</h1>
            </header>
          )}
          <Style.ModelContent>
            <img src={picture} />
            <h2>{message}</h2>
          </Style.ModelContent>
        </Style.ModelContainer>
      )}
    </ModalRoutingContext.Consumer>
  </Style.ModelWrapper>
)

export default Modal
