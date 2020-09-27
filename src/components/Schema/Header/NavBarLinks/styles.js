import styled from "styled-components"
export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  li {
    padding: 2rem 1.5rem;
    :nth-child(${({ selected }) => selected}) {
      background-color: #f9a826;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      a {
        color: #fff;
      }
    }
  }
`
