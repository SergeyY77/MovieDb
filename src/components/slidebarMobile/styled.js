import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 4rem;
  left: ${({ open }) => (open ? "0" : "-90%")};
  width: 90%;
  height: 100vh;
  background-color: rgba(3, 37, 65, 0.9);
  backdrop-filter: blur(1.25rem);
  color: white;
  padding-left: 1.375rem;
  padding-top: 1.25rem;
  transition: 0.3s ease;
  z-index: 1002;
`;

export const MenuItem = styled.a`
  cursor: pointer;
  display: block;
  padding-bottom: ${({ $primary }) => ($primary ? "0.9rem" : "0.8rem")};
  font-size: ${({ $primary }) => ($primary ? "1.3rem" : "1rem")};
  color: ${({ $primary }) => ($primary ? "#fff" : "#ccc")};
  font-weight: ${({ $primary }) => ($primary ? "500" : "normal")};
  text-decoration: none;
  margin-top: ${({ $logout }) => ($logout ? "0.9rem" : "0")};
  margin-bottom: ${({ $people }) => ($people ? "0.8rem" : "0")};
`;
