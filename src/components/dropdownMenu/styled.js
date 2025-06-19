import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  gap: 2rem;
  background-color: #052541;
`;

export const MenuItem = styled.div`
  position: relative;
  color: white;
  cursor: pointer;

  .sub-menu {
    display: none;
  }
  &:hover .sub-menu {
    display: block;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: white;
`;

export const SubMenu = styled.div`
  width: 8.625rem;

  position: absolute;
  top: 1.25rem;
  left: -0.75rem;
  background: white;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  z-index: 1000;
  min-width: 8.75rem;
  font-weight: 500;
`;

export const SubMenuItem = styled.a`
  display: block;
  padding: 0.36rem 1rem;
  font-size: 0.9rem;
  color: #000;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
  }
`;
