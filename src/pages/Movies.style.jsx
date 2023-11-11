import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  justify-content: center;
  margin: 20px;
  margin-left: 20px;
`;

export const DetailInfo = styled.div`
  display: flex;
  margin-left: 200px;
  margin-top: 50px;

  p {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }
`;

export const DetailPoster = styled.img`
  width: 300px;
  height: 450px;
`;
