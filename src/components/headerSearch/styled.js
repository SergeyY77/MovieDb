import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 0.875rem;
  @media (min-width: 48rem) {
    margin-left: 0;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SearchImage = styled.img`
  width: 1.5394rem;
  height: 1.5394rem;

  @media (min-width: 48rem) {
    width: 1.82rem;
    height: 1.82rem;
  }
`;

const SearchBar = styled.div`
  position: fixed;
  top: ${({ $isHeaderVisible }) => ($isHeaderVisible ? "3.75rem" : "0")};
  left: 0;
  right: 0;
  width: 100vw;
  background: white;

  border: none;
  height: 2.75rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.15);
  z-index: 1001;
  transition: top 0.3s ease;
  @media (min-width: 48rem) {
    padding: 0.75rem 1rem;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-width: 85.625rem;
  align-items: center;
  position: relative;
  @media (min-width: 48rem) {
    margin: 0 auto;
  }
`;

const SearchInput = styled.input`
  max-width: 87.5rem;
  width: 100%;
  padding: 0.625rem 0 0.625rem 1.625rem;
  font-size: 1rem;
  outline: none;
  border: none;
  color: #888;
  font-style: italic;
  opacity: 0.6;

  &::placeholder {
    color: #888;
    font-style: italic;
    opacity: 0.8;
  }
`;

const InputSearch = styled.img`
  position: relative;
  width: 1.4rem;
  height: 1.4rem;
  left: 1.4375rem;
  color: #888;

  @media (min-width: 48rem) {
  }
`;

export const ResultsList = styled.ul`
  position: absolute;
  top: 91%;
  left: 0;
  width: 100%;
  max-height: 15rem;
  overflow-y: auto;
  background-color: #fff;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  z-index: 1000;
  padding: 0;
  margin: 0.25rem 0 0;
  list-style: none;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
`;

export const ResultItem = styled.li`
  padding: 0.1875rem 2.5rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: normal;
  font-weight: 400;
  color: #333;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  &:not(:last-child) {
    border-bottom: 0.0625rem solid #eee;
  }
`;

export const TagRemove = styled.button`
  position: absolute;
  right: 1.6875rem;
  padding: 0.25rem;
  display: flex;
  margin-left: 0.375rem;
  background: transparent;
  align-items: center;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #555;
  svg {
    width: 0.875rem;
    height: 0.875rem;
    fill: #888;
    transition: fill 0.2s;
  }
  &:hover {
    color: #000;
  }
`;

export {
  Wrapper,
  ToggleButton,
  SearchBar,
  SearchInput,
  SearchImage,
  InputSearch,
  SearchInputWrapper,
};
