import styled from "styled-components";

export const GenreBox = styled.div`
  margin-top: 1rem;
  padding: 0 1.375rem;
  border-radius: 0.5rem;
  width: 100%;
  border-bottom: 0.0625rem solid #e3e3e3;
`;

export const GenreTitle = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Genre = styled.span`
  padding: 0.2rem 0.75rem;
  border: 0.0625rem solid #444;
  border-radius: 1rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  &.selected {
    background-color: #29abe2;
    color: white;
    border-color: #29abe2;
  }
  &:hover {
    background-color: #01b4e4;
    color: #ffffff;
  }
`;
