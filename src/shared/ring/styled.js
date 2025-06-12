import styled from "styled-components";

const Consensus = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};

  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    top: -19px;
    left: 8px;
    width: 2.375rem;
    height: 2.375rem;
    align-items: center;
    justify-content: center;
  }
`;

const OuterRing = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "percent",
})`
  width: 2.375rem;
  height: 2.375rem;
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
  width: 2rem;
  height: 2rem;
  background: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  background: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PercentText = styled.span`
  color: white;
  font-size: 0.85rem;
  font-weight: 600;

  span {
    font-size: 0.2rem;
    position: absolute;
    top: 0.5625rem;
  }
`;

export { OuterRing, InnerRing, Circle, PercentText, Consensus };
