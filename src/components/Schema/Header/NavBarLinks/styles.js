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
      a {
        color: #fff;
      }
    }
  }
`
