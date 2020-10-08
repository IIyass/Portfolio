import { createGlobalStyle, keyframes } from "styled-components"
import section1 from "../../assests/illustrations/hero.svg"
import styled from "styled-components"

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

export const Global = createGlobalStyle`
  html {
    font-family: 'Lato';
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    .ReactModal__Content.ReactModal__Content--after-open {
      width:40%;
      height:55%;
     
         position:absolute;
         left:50% !important;
         top:50% !important;
         transform:translate(-50%,-50%) !important;
         padding:10px !important;
        background: #000;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        border-radius: 15px;
        animation: ${ModalFadeInKeyframes} 250ms linear;
        overflow: hidden;
      

  }

  body{
    font-family: 'Lato';
    margin:0;
   
    a {
      text-align: center;
      text-decoration: none;
      padding-top: 20px;
      padding-left: 5px;
      padding-right: 5px;
    }
    h2{
      margin-bottom: 2rem;
      font-size: 35pt;
      color: #707070;
    }
    h1 {
      margin-bottom: 1rem;
      font-size: 26pt;
      color: #f9a826;
    }
    p {
      font-size: 20pt;
      margin: 0;
      margin-bottom: 0.5rem;
      font-weight: normal;
      line-height: 1.3;
      color: #707070;
    }
  
  
  }

}
 
`
