import styled from "styled-components";

export const MainSort = styled.div`
  border: 0.0625rem solid #e3e3e3;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const SortTable = styled.div`
  width: 100%;
  height: 3.125rem;
  padding: 0.875rem 1rem;
  border-bottom: 0.0625rem solid #e3e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const SortImage = styled.img`
  transition: transform 0.3s ease;
  transform: ${({ $showSortResults }) =>
    $showSortResults ? "rotate(90deg)" : "rotate(0deg)"};
  cursor: pointer;
`;

export const SortResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem 1rem;
  width: 100%;
  border-top: 0.0625rem solid #eee;

  h3 {
    font-size: 1rem;
    font-weight: 300;
    align-self: flex-start;
    margin-bottom: 0.625rem;
    color: #000;
  }
`;

export const SortPopularity = styled.div`
  width: 100%;
  height: 2.375rem;
  padding: 0.875rem 1rem;
  border-bottom: 0.0625rem solid #e3e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dee2e6;
  border-radius: 0.3rem;
  position: relative;
  z-index: 201;

  span {
    font-size: 0.9rem;
  }

  img {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const DropdownOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 13.75rem;
  overflow-y: auto;
  background: white;
  border: 0.0625rem solid #ddd;
  border-radius: 0.3rem;
  margin-top: 0.3rem;
  z-index: 11;
  list-style: none;
  padding: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const Option = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #bdc4cb;
    color: black;
    transition: 0.3s;
  }

  &:focus {
    background-color: #29abe2;
    color: white;
    border: none;
    outline: none;
  }

  &:focus:hover {
    background-color: #042541;
  }
`;
