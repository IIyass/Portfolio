import styled from "styled-components"

export const Wrapper = styled.div`
  font-family: CarlMarx;
  max-width: 1200px;
  margin: 0 auto;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    margin: 0;
    padding: 0;
    color: #f9a826;
  }
  nav {
    width: 75%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: end;

    li {
      padding-left: 20px;

      a {
        color: #f9a826;
        text-decoration: none;
      }
    }
  }
`

export const SharedComponentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 40%;
  }
`
export const ContentContainer = styled.div`
  width: 40%;
  order: ${({ order }) => order};
  form {
    display: flex;
    flex-direction: column;
  }
`
