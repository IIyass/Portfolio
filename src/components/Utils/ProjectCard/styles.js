import styled from "styled-components"
import image from "../../../assests/illustrations/hero.svg"
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
