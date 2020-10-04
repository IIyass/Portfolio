import React from "react"
import { Button } from "components/UI"
import Modal from "./index.jsx"
import Header from "./Header"

const subTitle = (
  <p>
    We will be verifying the phone number :{" "}
    <span className="color-primary">+000 123 456 789</span>
  </p>
)

const SimpleModal = props => (
  <Modal onClose={props.onClose} open={props.open}>
    <Header title="Verify your phone number" subTitle={subTitle} />

    <div className="col-xs-12 content text-center">
      <p>
        we have sent you an sms with code to the number above. <br />
        To complete your phone number verification, please enter the 6-digit
        activation code.{" "}
      </p>
    </div>

    <div className="col-xs-12 mb-lg footer">
      <Button className="btn-block" primary>
        Next
      </Button>
    </div>
  </Modal>
)

export default SimpleModal

// ///////// using the Model  //////////////////////

// import Example from '../../components/Modal/Example';

// state = { showModal: false };

// handleShowMessageClick = () => {
//   this.setState({ showModal: true });
//   document.body.style.overflow = "hidden";
// }>>>
// handleCloseModal = () => {
//   this.setState({ showModal: false });
//   document.body.style.overflow = "scroll";
// }

// <button onClick={this.handleShowMessageClick}>ClickHere</button>
// <Example
// onClose={this.handleCloseModal}
// open={this.state.showModal}
// />
