import styled from "styled-components"

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  p {
    color: #707070;
    margin-bottom: 1rem;
    font-size: 26pt;
  }

  .Typewriter__wrapper {
    color: #41ff00;
    font-size: 30pt;
    background-color: black;
    font-family: "VT323", monospace;
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`
