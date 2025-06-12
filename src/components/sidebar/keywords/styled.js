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
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 6px 8px;
  gap: 6px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  min-height: 42px;
  position: relative;
`;

export const KeywordInput = styled.input`
  flex: 1;
  min-width: 7.5rem;
  height: 2rem;
  border: none;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  background: transparent;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10003;
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;
`;

export const SuggestionItem = styled.li`
  width: 100%;
  display: block;
  padding: 0.375rem 0.75rem;
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
  top: 71%;
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
  flex-wrap: wrap;
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
  font-size: 16px;
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
