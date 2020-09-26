import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0;
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
    color: "#707070";
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`

// import styled from "styled-components"

// export const ContentContainer = styled.div`
//   width: 40%;
//   order: ${({ order }) => order};
//   form {
//     display: flex;
//     flex-direction: column;
//   }
//   .Typewriter__wrapper {
//     color: white;
//     background-color: black;
//     font-family: monospace;
//   }
//   #name {
//     color: red;
//   }
//   p {
//     line-height: 2;
//     font-family: ubuntu;
//     font-weight: 400;
//     font-size: 25px;
//     margin: 10px 0px;
//   }
// `

// export const ProjectLayout = styled.div`
//   display: grid;
//   grid-template-columns: 20% 20% 20%;
//   grid-template-rows: auto auto auto;
//   row-gap: 20px;
//   justify-content: space-evenly;
// `
