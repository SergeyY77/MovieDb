import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 14px;
  @media (min-width: 768px) {
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
`;

const SearchBar = styled.div`
  position: fixed;
  top: ${({ isHeaderVisible }) => (isHeaderVisible ? "60px" : "0")};
  left: 0;
  right: 0;
  width: 100vw;
  background: white;
  padding: 12px 16px;
  border: none;
  height: 44px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 1001; // чуть выше хедера
  transition: top 0.3s ease;
`;

const SearchInput = styled.input`
  position: absolute;
  width: 100%;
  padding: 10px 0 10px 53px;
  font-size: 16px;
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
  left: 1.375rem;
  color: #888;
`;

export const ResultsList = styled.ul`
  position: absolute;
  top: 91%;
  left: 0;
  width: 100%;
  max-height: 15rem;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 1000;
  padding: 0;
  margin: 0.25rem 0 0;
  list-style: none;
  box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
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
    border-bottom: 1px solid #eee;
  }
`;

export const TagRemove = styled.button`
  position: absolute;
  right: 40px;
  padding: 4px;
  display: flex;
  margin-left: 6px;
  background: transparent;
  align-items: center;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #555;
  svg {
    width: 14px;
    height: 14px;
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
};
