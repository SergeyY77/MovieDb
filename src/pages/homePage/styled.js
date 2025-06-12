import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 30px 40px;
  }
`;
