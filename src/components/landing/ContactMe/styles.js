import styled from "styled-components"

export const Error = styled.div`
  color: #ffffff;
  margin: 0;
  background-color: #e53e3e;
`

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
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
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
`
