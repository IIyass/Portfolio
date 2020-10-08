import styled, { keyframes } from "styled-components"

export const ModelWrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const ModelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
`

export const ModelRouting = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  .svg-inline--fa {
    color: #f9a826;
    font-size: 20px;
  }
  a {
    padding: 0;
  }
`
export const ModelContent = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  img {
    width: 90%;
  }
  h2 {
    font-size: 20pt;
    color: #707070;
  }
`
