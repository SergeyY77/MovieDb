import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    max-width: 87.5rem;
    margin: 0 auto;
    width: 100%;
    padding: 1.875rem 2.5rem;
  }
`;
