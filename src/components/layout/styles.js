import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  html {
    font-family: 'Ubuntu', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    body {
      margin: 0;
      padding: 0;
      font-family: 'Ubuntu', sans-serif;
      color: ${({ theme }) =>
        theme === "light" ? "hsla(0, 0%, 0%, 0.8)" : "#fff"};
      background-color: ${({ theme }) =>
        theme === "light" ? "#fff" : "#212121"};
      transition: .3s all;
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }
    a {
      text-decoration: none;
    }
    input, textarea, button {
      &:focus {
        outline: none;
      }
    }
  }
`
