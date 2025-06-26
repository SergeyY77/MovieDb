import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  position: absolute;
  right: 1.9rem;
  width: 1rem;
  height: 1rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.2);
  border-top: 0.125rem solid #333;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
