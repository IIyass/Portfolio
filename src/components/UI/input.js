import styled from "styled-components"

export const Input = styled.input.attrs(props => ({
  type: props.type,
  size: 10,
}))`
 
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    padding: 8px;
    color: #f9a826;
    border: ${({ feedback }) =>
      feedback ? "2px solid #E53E3E" : "2px solid #f9a826"};
    border-radius: 5px;
    height: 35px;
    border-bottom-right-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
    border-bottom-left-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
    ::placeholder {
      color: #a0aec0;
    }
  }

`
