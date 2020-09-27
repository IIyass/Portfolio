import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  justify-content: space-between;
`

export const Details = styled.div`
  flex: 1;
  display: flex;
  justify-content: column;
  flex-direction: column;
  align-items: center;
`

export const Thumbnail = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`
export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
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
