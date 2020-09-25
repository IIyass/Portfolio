import styled from "styled-components"
import footer from "../../assests/illustrations/footer.svg"
export const Footer = styled.footer`
  background-image: linear-gradient(-5deg, #f9b248, #faf4d0), url(${footer});
  background-blend-mode: color;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: inherit;
  p {
    margin: 0;
  }
`
