import styled from "styled-components"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #000;
    text-decoration: none;
  }
`

export const Brand = styled.div`
  .logo {
    height: 50px;
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
  .I1,
  I2 {
    width: 4px;
    height: 40px;
    transform: rotate(45deg);
    background-color: #f9a826;
    border-radius: 10px;
    transition-duration: 1s;
  }
  .I1 {
    transform: rotate(45deg);
  }
  .I2 {
    transform: rotate(-45deg);
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
