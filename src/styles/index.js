import styled from "styled-components"

export const Wrapper = styled.div`
  font-family: CarlMarx;
  max-width: 1200px;
  margin: 0 auto;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    margin: 0;
    padding: 0;
    color: #f9a826;
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
    width: 150px;
    display: flex;
    justify-content: end;
    font-family: "Philosopher", sans-serif;
  }
  .YASS {
    transform: translateX(15px);
    transition-duration: 1s;
    width: 70%;
  }
  .X {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: end;
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
      transform: translateX(2px);
    }
  }
`

export const SharedComponentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 40%;
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
    color: #f9a826;
  }
`
