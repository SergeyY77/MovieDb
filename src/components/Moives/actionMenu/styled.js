import styled from "styled-components";

const ActDropdown = styled.div`
  width: 7.875rem;
  background: white;
  border-radius: 0.375rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 2rem;
  right: -2rem;
  z-index: 2;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;
  align-items: center;
  gap: 0.3125rem;

  span {
    opacity: 0.7;
    font-weight: 600;
  }

  &:hover {
    background-color: rgb(0, 33, 56);
    color: white;
  }

  &:not(:last-child) {
    border-bottom: 0.0625rem solid #e0e0e0;
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export { ActDropdown, MenuItem };
