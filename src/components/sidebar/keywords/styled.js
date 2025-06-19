import styled from "styled-components";

export const KeywordsWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`;

export const KeywordsLabel = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem 0;
  opacity: 0.8;
`;

export const InputContainer = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: 0.375rem;
  padding-left: 0.25rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  background-color: #fff;
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
  height: 2.375rem;
  &:focus-within {
    border-color: #aee3f5;
  }
`;

export const KeywordInput = styled.input`
  flex: 1;
  height: 33.8px;
  min-width: 7.5rem;
  border: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem 0.25rem 0;
  outline: none;
  background: transparent;
  &::placeholder {
    color: #000;
    opacity: 0.8;
  }
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  margin: 0;
  background-color: #fff;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10003;
  box-sizing: border-box;
  max-height: 12.5rem;
  overflow-y: auto;
`;

export const SuggestionItem = styled.li`
  width: 100%;
  display: block;
  padding: 0.375rem 0.75rem;
  height: 1.875rem;
  cursor: pointer;
  border-radius: 0.5rem 0.5rem 0 0;

  &:hover {
    background-color: #f0f0f0;
  }

  &.highlighted {
    background-color: #01b4e4;
    color: white;
  }
`;

export const KeywordCancel = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 75%;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    fill: #888;
    transition: fill 0.2s;
  }

  &:hover svg {
    fill: #000;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.375rem;
`;
export const TagItem = styled.div`
  background-color: #e5e8ec;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

export const TagRemove = styled.button`
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
    fill: #000;
    transition: fill 0.2s;
  }
  &:hover {
    color: #000;
  }
`;
