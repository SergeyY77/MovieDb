import styled from "styled-components";

export const Section = styled.div`
  padding: 0.875rem 1rem 2rem;
  border-bottom: 0.0625rem solid #eee;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

export const LabelItem = styled.div``;

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Small = styled.div`
  width: 0.072rem;
  height: 0.3125rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Big = styled.div`
  width: 0.072rem;
  height: 0.75rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0.125rem;
`;

export const BottomSmall = styled(Small)`
  height: 0.3rem;
`;

export const BottomBig = styled(Big)`
  margin-top: 0.125rem;
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.4rem;
  background: ${({ $percentage }) =>
    `linear-gradient(
      to right,
      #29abe2 ${$percentage}%,
      rgba(178, 179, 180) ${$percentage}%
    )`};
  border-radius: 0.2rem;
`;

export const Point = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #29abe2;
  border-radius: 50%;
  position: absolute;
`;

export const LeftPoint = styled(Point)`
  left: -0.5rem;
`;

export const RightPoint = styled(Point)`
  right: -0.5rem;
`;

export const CenterPoint = styled(Point)`
  left: ${({ $percentage }) => `${$percentage}%`};
  transform: translateX(-50%);
`;

export const Numbers = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  position: relative;
  opacity: 0.5;
  padding: 0;
  margin-top: 0.375rem;

  li {
    position: absolute;
    transform: translateX(-50%);
    font-size: 0.75rem;
  }
`;
