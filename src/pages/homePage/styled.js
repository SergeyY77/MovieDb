import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 48rem) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 87.5rem;
    margin: 0 auto;
    width: 100%;
    padding: 1.875rem 2.5rem;
  }
`;
