import styled from "styled-components"

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  justify-content: space-between;
  #name {
    color: #b7791f;
    font-weight: 700;
  }
  a {
    padding: 15px;
  }
`

export const Details = styled.div`
  flex: 1;
  .Typewriter__wrapper {
    font-family: VT323;
    color: #41ff00;
    font-size: 40pt;
    font-weight: 700;
    background-color: black;
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`
