import styled from "styled-components"

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Details = styled.div`
  flex: 1;
  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #f9a826;
  }
  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`
