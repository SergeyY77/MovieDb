import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 3.75rem;
  left: ${({ open }) => (open ? "0" : "-90%")};
  width: 90%;
  height: 100vh;
  background-color: rgba(24, 54, 74, 0.98);
  color: white;
  padding-left: 1.375rem;
  padding-top: 2rem;
  transition: left 0.3s ease;
  z-index: 1002;
`;

export const MenuItem = styled.a`
  cursor: pointer;
  display: block;
  padding-bottom: ${({ primary }) => (primary ? "0.9rem" : "0.625rem")};
  font-size: ${({ primary }) => (primary ? "1.3rem" : "0.95rem")};
  font-weight: ${({ primary }) => (primary ? "600" : "normal")};
  color: ${({ primary }) => (primary ? "#fff" : "#ccc")};
  font-weight: ${({ primary }) => (primary ? "bold" : "normal")};
  text-decoration: none;
`;
