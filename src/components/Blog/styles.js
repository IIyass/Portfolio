import styled from "styled-components"
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
export const BlogLayout = styled.div`
display: grid;
grid-template-columns: 20% 20% 20%;
grid-template-rows: auto auto auto;
row-gap: 4rem;
justify-content: space-evenly;
`

export const Container = styled.div``
export const Card = styled.div`
width:15rem;
height:20rem;
border-radius:10px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
padding:20px 10px;
background-image: linear-gradient(to right , #f6ad55,#f9a826);
transition-duration: 500ms;
cursor:pointer;
h1{
  margin:0;
  color:#707070;
}
:hover{
  transition: all 0.3s ease 0s;
  transform: translateY(-10px);
  transition-duration: 500ms;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
  > div{
    transition:all 0.3s ease 0s;
    transition-duration: 500ms;
    transform: scale(1.2);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
  }

}


`
export const Image = styled.div`
width:100%;
height:12rem;
cursor:pointer;
background-image:${({ image }) => `url(${image})`};
background-size: contain;
background-repeat: no-repeat;
background-position: center;
transition-duration: 500ms;
`
export const Details = styled.p`
margin:0;
width:100%;
font-size:1rem;
`