import styled from "styled-components";

const ActDropdown = styled.div`
  width: 126px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 2rem;
  right: -5rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;
  align-items: center;
  gap: 5px;

  span {
    font-weight: 600;
  }

  &:hover {
    background-color: rgb(0, 33, 56);
    color: white;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export { ActDropdown, MenuItem };
