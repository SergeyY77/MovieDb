import styled from "styled-components";

const Consensus = styled.div`
  display: ${(props) => (props.$visible ? "block" : "none")};

  @media (min-width: 48rem) {
    display: flex;
    ${({ $position }) =>
      $position &&
      `
        position: ${$position};
        top: -1.1875rem;
        left: .5rem;
      `}
    width: ${({ $size }) => $size}rem;
    height: ${({ $size }) => $size}rem;
    align-items: center;
    justify-content: center;
  }
`;

const OuterRing = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "percent" && prop !== "$size",
})`
  width: ${({ $size }) => $size}rem;
  height: ${({ $size }) => $size}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ percent }) => {
    let color;
    if (percent < 30) color = "#db2360";
    else if (percent < 70) color = "#d2d531";
    else color = "#21d07a";

    return `conic-gradient(${color} 0% ${percent}%, #423d0f ${percent}% 100%)`;
  }};
`;

const InnerRing = styled.div`
  width: ${({ $size }) => $size * 0.84}rem;
  height: ${({ $size }) => $size * 0.84}rem;
  background: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: relative;
  width: ${({ $size }) => $size * 0.74}rem;
  height: ${({ $size }) => $size * 0.74}rem;
  background: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PercentText = styled.span`
  color: white;
  font-size: ${({ $size }) => $size * 0.36}rem;
  font-weight: 600;

  span {
    font-size: ${({ $size }) => $size * 0.1}rem;
    position: absolute;
    top: ${({ $size }) => $size * 0.2}rem;
  }
`;

export { OuterRing, InnerRing, Circle, PercentText, Consensus };
