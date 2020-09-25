import styled from "styled-components"

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

export const ProjectLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: auto auto auto;
  row-gap: 20px;
  justify-content: space-evenly;
`
