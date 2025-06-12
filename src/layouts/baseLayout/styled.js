import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100svh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    margin-top: 66px;
  }
`;
