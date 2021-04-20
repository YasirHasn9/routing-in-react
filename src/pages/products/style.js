import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    a {
      color: green;
    }
  }
`;

export const Images = styled.div`
  width: 80%;
  padding: 10%;
  background: #eee;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    width: 200px;
    height: 250px;
    margin: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      padding: 10px;
      border: 2px solid transparent;
      transition: all 0.2s ease-in;
      &:hover {
        border: 2px solid #333;
      }
    }
  }
`;
