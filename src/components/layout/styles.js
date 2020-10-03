import { createGlobalStyle } from "styled-components"
import section1 from "../../assests/illustrations/hero.svg"
import styled from "styled-components"

export const Global = createGlobalStyle`
  html {
    font-family: 'Lato';
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

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
 
`
