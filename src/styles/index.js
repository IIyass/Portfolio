import styled from "styled-components"
import image from "../images/undraw_hacker_mind_6y85.png"
import footer from "../images/footer.svg"
import Hero from "../images/hero.svg"

export const Wrapper = styled.div`
  font-family: Ubuntu;
  max-width: 1200px;
  margin: 0 auto;
  background-image: linear-gradient(to top, #ff7730, #f9a826), url(${Hero});
  background-blend-mode: color;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }

  nav {
    width: 75%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: end;

    li {
      padding-left: 20px;

      a {
        color: #f9a826;
        text-decoration: none;
      }
    }
  }
  transition-duration: 2s;
  .logo {
    width: 130px;
    display: flex;
    font-family: "Philosopher", sans-serif;
    position: relative;
    align-items: center;
    cursor: pointer;
  }
  .YASS {
    transform: translateX(15px);
    transition-duration: 1s;
    width: 70%;
    margin: 0;
    font-size: 40px;
    color: #7b341e;
  }
  .X {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .I1 {
    width: 4px;
    height: 40px;
    transform: rotate(45deg);
    background-color: #f9a826;
    border-radius: 10px;
    transition-duration: 1s;
  }
  .I2 {
    width: 4px;
    height: 40px;
    transform: rotate(-45deg);
    background-color: #f9a826;
    border-radius: 10px;
    transition-duration: 1s;
  }
  .I3 {
    width: 65px;
    height: 4px;
    background-color: #f9a826;
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(10px);
  }

  .logo:hover {
    .I2,
    .I1 {
      transform: rotate(0deg);
      transition-duration: 1s;
      width: 4px;
      height: 25px;
      margin-right: 3px;
    }

    .YASS {
      transition-duration: 1s;
      transform: translate(-13px, -2px);
      font-size: 25px;
    }
    .I3 {
      transform: translate(-45px, -2px);
      transition-duration: 1s;
      opacity: 1;
    }
  }
`

export const SharedComponentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px 0px;
  img {
    width: 35%;
  }
`
export const ContentContainer = styled.div`
  width: 40%;
  order: ${({ order }) => order};
  form {
    display: flex;
    flex-direction: column;
  }
  .Typewriter__wrapper {
    color: white;
    background-color: black;
    font-family: monospace;
  }
  #name {
    color: red;
  }
  p {
    line-height: 2;
    font-family: ubuntu;
    font-weight: 400;
    font-size: 25px;
    margin: 10px 0px;
  }
`

export const Footer = styled.footer`
  background-image: linear-gradient(to top, #ff7730, #f9a826), url(${footer});
  background-blend-mode: color;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Input = styled.div`
  width: 100%;
  margin: 10px 0px;
  p {
    margin: 5px;
  }

  input {
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    padding: 8px;
    color: #f9a826;
    border: ${({ feedback }) =>
      feedback ? "2px solid #E53E3E" : "2px solid #f9a826"};
    border-radius: 5px;
    height: 35px;
    border-bottom-right-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
    border-bottom-left-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
    ::placeholder {
      color: #a0aec0;
    }
  }
  #feedback {
    color: #ffffff;
    margin: 0;
    background-color: #e53e3e;
  }
`
export const Button = styled.div`
  button {
    background-color: #f9a826;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    font-family: Ubuntu;
  }
`

export const Textarea = styled.div`
  width: 100%;

  margin: 10px 0px;
  p {
    margin: 5px;
  }
  textarea {
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    margin: 0;
    border: ${({ feedback }) =>
      feedback ? "2px solid #E53E3E" : "2px solid #f9a826"};
    border-radius: 5px;
    border-bottom-right-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
    border-bottom-left-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
  }
  #feedback {
    color: #ffffff;
    margin: 0;
    background-color: #e53e3e;
    width: 100%;
  }
`

export const Icons = styled.div`
  ul {
    margin: 0;
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    li {
      margin-right: 20px;
    }
  }
  .svg-inline--fa {
    font-size: 30px;
  }
  .svg-inline--fa.fa-github {
    color: black;
  }
  .svg-inline--fa.fa-linkedin-in {
    color: #2867b2;
  }
  .svg-inline--fa.fa-twitter {
    color: #1da1f2;
  }
`

export const ProjectCard = styled.div`
  perspective: 150rem;
  transition: all 1s ease;
  position: relative;
  -moz-perspective: 150rem;
  font-family: Ubuntu;
  width: 100%;
  .Card {
    height: 20rem;
    width: 100%;
    border-radius: 5px;
  }
  .CardFront {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #dd6b20;
    transition: all 1s;
    backface-visibility: hidden;
    border-radius: 15px;
  }
  .CardBack {
    width: 100%;
    position: absolute;
    border-radius: 15px;
    top: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(to right bottom, #f9a826, #ff7730);
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: all 1s;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        border-top: 1px solid rgba(#cbd5e0 0, 0.5);
        border-bottom: 2px solid rgba(#cbd5e0 0, 0.5);
        padding: 10px 0px;
      }
    }
  }
  :hover {
    .CardBack {
      transform: rotateY(0deg);
    }
    .CardFront {
      transform: rotateY(-180deg);
    }
  }

  .CardImage {
    background-size: cover;
    height: 10rem;
    background-image: url(${image});
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    margin: 0;
    top: 6rem;
    text-align: right;
    right: 1rem;
    width: 75%;
  }
  #CardTitle {
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(to right bottom, #f9a826, #ff7730);
    padding: 0.2rem 0.2rem;
    opacity: 0.8;
  }

  .BackButton {
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 10px;
    }
  }

  .CardDetails {
    color: #fff;
    text-align: center;
    padding: 10px;
    padding-top: 35px;
  }
`

export const ProjectLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: auto auto auto;
  row-gap: 20px;
  justify-content: space-evenly;
`
