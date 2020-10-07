import styled from "styled-components"
import CovPicture from "../../assests/illustrations/CoverMe.jpeg"
import section1 from "../../assests/illustrations/section3.svg"

export const Wrapper = styled.div`
  background-image: linear-gradient(100deg, #faf4d0, #f9b248), url(${section1});
  background-size: contain;
  background-position: inherit;
  background-repeat: no-repeat;
  background-blend-mode: hard-light;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

export const CovContainer = styled.div`
  width: 40%;
  height: 400px;
  background-image: linear-gradient(100deg, #faf4d0, #f9b248),
    url(${CovPicture});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const Container = styled.div``
