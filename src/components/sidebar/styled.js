import styled from "styled-components";

export const RenderLi = styled.li`
  left: ${({ $left }) => $left}%;
`;

export const RenderLi2 = styled.li`
  left: ${(props) => props.$left};
`;

export const Main = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainContainer = styled.div`
  padding: 0 1.375rem;
  margin-bottom: 2rem;
  margin-top: 1.25rem;

  @media (min-width: 48rem) {
    width: 16.125rem;
    padding: 0;
  }
`;
export const PopularMovies = styled.div`
  margin-left: 1.375rem;
  margin-top: 1rem;
  h2 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 600;
    width: 100%;
  }

  @media (min-width: 48rem) {
    margin-left: 0;
    margin-top: 0;
  }
`;

export const MainFilter = styled.section`
  margin-top: 0.6875rem;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.3rem;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FilterSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.125rem;
  padding: 0.875rem 1rem;
  border-bottom: 0.0625rem solid #e3e3e3;

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const FilterArrow = styled.img`
  transition: transform 0.3s;
  transform: ${({ $rotated }) => ($rotated ? "rotate(90deg)" : "rotate(0deg)")};
  cursor: pointer;
`;

export const ShowMeFilter = styled.div`
  align-items: center;
  padding: 0.875rem 1rem 1rem;
  width: 100%;
  border-bottom: 0.0625rem solid #eee;
`;

export const ShowMeInnerFilter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.1rem;
  margin-bottom: 0.625rem;

  span {
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.7;
  }
`;

export const ShowMeOptions = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;

    input[type="radio"] {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 0.125rem solid rgba(33, 37, 41, 0.2);
      background-color: #fff;
      opacity: 0.25;
      border-radius: 50%;
      margin-right: 0.25rem;
      position: relative;
      cursor: pointer;
      outline: none;
    }

    input[type="radio"]:checked {
      opacity: 1;
      border-color: #29abe2;
      background-color: #29abe2;
    }

    input[type="radio"]:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.5rem;
      height: 0.5rem;
      background: white;
      border-radius: 50%;
      border-color: rgba(33, 37, 41, 0.2);
    }
  }
`;

export const Certification = styled.div`
  display: flex;
  padding: 0.875rem 1rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.8;
  border-bottom: 0.0625rem solid #eee;
`;

export const Language = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.875rem 1rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  border-bottom: 0.0625rem solid #eee;
`;

export const LanguageInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;

  p {
    opacity: 0.7;
  }
`;

export const LanguageOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  height: 2.375rem;
  background-color: #dee2e6;
  border-radius: 0.3125rem;
  cursor: pointer;

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }

  &:hover {
    background-color: gray;
  }

  img {
    width: 1rem;
    height: 1rem;
    padding-right: 0.1875rem;
  }
`;

export const Section = styled.div`
  padding: 0.875rem 1rem 2rem;
  border-bottom: 0.0625rem solid #eee;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

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
  left: ${({ percentage }) => `${percentage}%`};
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
export const KeywordsWrapper = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const KeywordsLabel = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem 0;
`;

export const InputContainer = styled.div``;

export const KeywordInput = styled.input`
  height: 2.375rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  outline: none;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0.5rem;
  margin-top: 0.0625rem;
  background-color: #fff;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  position: absolute;
  z-index: 10003;
  width: 14rem;
`;

export const SuggestionItem = styled.li`
  padding: 0.375rem 0.625rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SearchRef = styled.div`
  height: 0.0625rem;
`;

export const MobileSearchBar = styled.div`
  position: ${(props) =>
    props.disabled ? "relative" : props.scrolled ? "fixed" : "sticky"};
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 2.625rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  z-index: 200;
  transition: all 0.3s ease;
`;

export const MobileSearchButton = styled.button`
  padding: 0.75rem 2rem;
  width: 100%;
  background: #01b4e4;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  height: ${(props) => (props.scrolled ? "unset" : "3.125rem")};
  border-radius: ${(props) => (props.scrolled ? "0" : "1.875rem")};
  cursor: pointer;
  transition: border-radius 0.3s ease, height 0.3s ease;

  &:hover {
    background: #222;
  }

  &:disabled {
    background-color: rgba(228, 228, 228, 0.7);
    color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
    border-radius: 2rem;
    height: 2.75rem;
  }
`;

export const SelectedKeyword = styled.div`
  align-items: center;
  display: flex;
  background: #dee2e6;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 0.3rem;
`;

export const RemoveIcon = styled.span`
  display: flex;
  align-items: center;

  margin-left: 0.375rem;
  cursor: pointer;
  font-weight: bold;
`;
