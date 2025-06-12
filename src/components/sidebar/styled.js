import styled from "styled-components";

export const Main = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainContainer = styled.div`
  padding: 0 1.375rem;
  margin-bottom: 2rem;
  margin-top: 1.25rem;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

export const MainSort = styled.div`
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const SortTable = styled.div`
  width: 100%;
  height: 3.125rem;
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }

  img {
    transform: rotate(90deg);
  }
`;

export const SortResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px 16px;
  width: 100%;
  border-top: 1px solid #eee;

  h3 {
    font-size: 1rem;
    font-weight: 300;
    align-self: flex-start;
    margin-bottom: 0.625rem;
    color: #000;
  }
`;

export const SortPopularity = styled.div`
  width: 100%;
  height: 2.375rem;
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dee2e6;
  border-radius: 0.3rem;
  position: relative;
  z-index: 201;

  span {
    font-size: 0.9rem;
  }

  img {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const DropdownOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 220px;
  overflow-y: auto;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.3rem;
  margin-top: 0.3rem;
  z-index: 11;
  list-style: none;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #bdc4cb;
    color: black;
    transition: 0.3s;
  }

  &:focus {
    background-color: #29abe2;
    color: white;
    border: none;
    outline: none;
  }

  &:focus:hover {
    background-color: #042541;
  }
`;

export const MainFilter = styled.section`
  margin-top: 1rem;
  border: 1px solid #e3e3e3;
  border-radius: 0.3rem;
  width: 100%;
`;

export const FilterSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.125rem;
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #e3e3e3;

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }

  img {
    transform: rotate(90deg);
  }
`;

export const ShowMeFilter = styled.div`
  align-items: center;
  padding: 14px 16px 16px;
  width: 100%;
  border-bottom: 1px solid #eee;
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
    margin-bottom: 0.5rem;

    input[type="radio"] {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(33, 37, 41, 0.2);
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

export const ReleaseFilter = styled.div`
  align-items: center;
  padding: 14px 16px 16px;
  width: 100%;
  border-bottom: 1px solid #eee;

  h3 {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.625rem;
  }
`;

export const RealiseSearch = styled.div`
  margin-bottom: 0.625rem;

  label {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 2px solid #01b4e4;
      background-color: #01b4e4;
      position: relative;
      cursor: pointer;
    }

    input[type="checkbox"]:checked::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0.24rem;
      width: 0.25rem;
      height: 0.5625rem;
      border: solid white;
      border-width: 0 0.15rem 0.15rem 0;
      transform: rotate(38deg);
    }

    span {
      margin-left: 0.25rem;
    }
  }
`;

export const DateFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    display: flex;

    p {
      width: 5.25rem;
      align-self: center;
      color: #a4a4a4;
      font-size: 0.9rem;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 100%;
  background-color: white;
  padding-left: 11px;

  input {
    flex: 1;
    border: none;
    font-size: 0.8rem;
    outline: none;
    height: 2.375rem;
  }
`;

export const InputIcon = styled.div`
  background-color: #d3dbe2;
  padding: 0.5rem 0.5rem 0.5rem 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.375rem 0.375rem 0;

  img {
    width: 1rem;
    height: 1.5rem;
  }
`;

export const GenreBox = styled.div`
  margin-top: 1rem;
  padding: 0 1.375rem;
  border-radius: 0.5rem;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

export const GenreTitle = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Genre = styled.span`
  padding: 0.2rem 0.75rem;
  border: 1px solid #444;
  border-radius: 1rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  &.selected {
    background-color: #29abe2;
    color: white;
    border-color: #29abe2;
  }
  &:hover {
    background-color: #01b4e4;
    color: #ffffff;
  }
`;

export const Certification = styled.div`
  display: flex;
  padding: 14px 16px 16px;
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.6;
  border-bottom: 1px solid #eee;
`;

// Language Section
export const Language = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px 16px;
  font-size: 1rem;
  font-weight: 300;
  border-bottom: 1px solid #eee;
`;

export const LanguageInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
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
    width: 16px;
    height: 16px;
    padding-right: 3px;
  }
`;

export const Section = styled.div`
  padding: 14px 16px 32px;
  border-bottom: 1px solid #eee;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 8px;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Small = styled.div`
  width: 1.15px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Big = styled.div`
  width: 1.15px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 2px;
`;

export const BottomSmall = styled(Small)`
  height: 4.8px;
`;

export const BottomBig = styled(Big)`
  margin-top: 2px;
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
  background: ${({ percentage }) =>
    `linear-gradient(
      to right,
      #29abe2 ${percentage}%,
      rgba(178, 179, 180) ${percentage}%
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
  margin-top: 6px;

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
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  outline: none;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  padding: 8px;
  margin-top: 1px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: absolute;
  z-index: 10003;
  width: 224px;
`;

export const SuggestionItem = styled.li`
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MobileSearchBar = styled.div`
  position: ${(props) =>
    props.disabled ? "relative" : props.scrolled ? "fixed" : "sticky"};
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3.125rem;
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
  font-size: 1rem;
  border: none;
  height: ${(props) => (props.scrolled ? "unset" : "50px")};
  border-radius: ${(props) => (props.scrolled ? "0" : "30px")};
  cursor: pointer;
  transition: border-radius 0.3s ease, height 0.3s ease;

  p {
    font-weight: 600;
    font-size: 1.2rem;
  }

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
  padding: 4px 8px;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 0.3rem;
`;

export const RemoveIcon = styled.span`
  display: flex;
  align-items: center;

  margin-left: 6px;
  cursor: pointer;
  font-weight: bold;
`;
