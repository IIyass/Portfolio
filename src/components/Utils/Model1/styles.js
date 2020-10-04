import styled, { keyframes } from "styled-components"

// import colors from "../../utils/styledComponents/colors"

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.2);
`

const ModalFadeInKeyframes = keyframes`
  0% {
    transform: scale3d(0.1, 0.1, 1);
  }

  55% {
    transform: scale3d(0.55, 0.55, 1);
  }

  75% {
    transform: scale3d(0.75, 0.75, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`

export const Modal = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  width: 70%;
  max-width: 800px;
  animation: ${ModalFadeInKeyframes} 250ms linear;
  overflow-x: auto;
  max-height: 90%;

  .content {
    padding: 30px 80px;
  }
`

export const MobileCancelBtn = styled.button`
  display: none;
  background-color: transparent;
  border: none;

  color: grey;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  padding-top: 15px;
  font-size: 30px;
  cursor: pointer;
  padding-top: 2px;
`

export const ModalHeader = styled.div`
  background-color: red;

  padding: 30px 80px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;

  > h1 {
    margin-bottom: 16px;
    font-size: 34px;
    font-weight: normal;

    color: red;
  }

  > p {
    font-size: 16px;
    color: #fff;
    font-weight: 300;
  }
`
