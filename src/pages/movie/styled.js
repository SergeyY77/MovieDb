import styled from "styled-components";
import VoteRing from "../../shared/ring";
import CustomVoteRingBase from "../../shared/ring";
const SubHeader = styled.div`
  width: 100%;
  height: 2.875rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0 0 0.625rem;
  z-index: 100;
  position: relative;

  @media (min-width: 48rem) {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

const HeaderSubButton = styled.div`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000;
  position: relative;
  z-index: 100;
`;
const SubButton = styled.div`
  position: relative;
`;

const Catalog = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.5rem;
  gap: 0.375rem;
  z-index: 100;
`;

const Dropdown = styled.div`
  background-color: red;
  position: absolute;
  top: 2.125rem;
  left: 0;
  max-height: 18.75rem;
  background-color: #fff;
  border: 0.0625rem solid #ddd;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  z-index: 200;
  border-radius: 0.375rem;
  padding: 0.375rem 0;
`;

const DropdownItem = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.25rem 3rem 0.25rem 1rem;
  width: 100%;
  white-space: nowrap;
  box-sizing: border-box;
  padding-top: ${(props) => (props.isDivider ? "1.25rem" : ".25rem")};

  &:hover {
    background-color: #f4f4f4;
  }
  &.hovered-nested {
    background-color: #01b4e4;
    color: #fff;
  }
`;

const ItemLabel = styled.span``;

const ItemCount = styled.span`
  position: absolute;
  right: 0.5625rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
`;

const VideoImage = styled.div`
  transform: rotate(-90deg);
  position: absolute;
  right: 0.5625rem;
`;

const VideoSidebar = styled(Dropdown)`
  position: absolute;
  top: 0;
  left: 8rem;
`;

const VideoSidebarItem = styled(DropdownItem)`
  color: #333;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  border-bottom: 0.0625rem solid rgba(31.5, 31.5, 31.5, 1);

  @media (min-width: 48rem) {
    width: 100%;
    height: 36.75rem;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position: center;
  }
`;

export const MainGradient = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  background-image: linear-gradient(
    to right,
    rgba(31.5, 31.5, 31.5, 1) calc((50vw - 10.625rem) - 21.25rem),
    rgba(31.5, 31.5, 31.5, 0.84) 50%,
    rgba(31.5, 31.5, 31.5, 0.84) 100%
  );
`;

export const MainSubWrapper = styled.div`
  display: flex;
  max-width: 87.5rem;
  padding: 2.5rem 1.875rem;
  width: 100%;
  z-index: 0;
`;

const MovieContainer = styled.div`
  width: 100%;
  height: auto;
  height: calc(100vw / 2.222222);

  z-index: 1;
`;

const MainContent = styled.div`
  @media (min-width: 48rem) {
  }
`;
const MovieBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  width: 100vw;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      rgba(115.5, 136.5, 157.5, 1) 20%,
      rgba(115.5, 136.5, 157.5, 0) 50%
    );
    z-index: 1;
  }

  @media (min-width: 48rem) {
    position: relative;
    &::after {
      display: none;
    }
  }
`;

const MovieImage = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  width: calc(((100vw / 2.222222) - 2.5rem) / 1.5);
  min-width: calc(((100vw / 2.222222) - 2.5rem) / 1.5);
  height: calc((100vw / 2.222222) - 2.5rem);
  min-height: calc((100vw / 2.222222) - 2.5rem);
  z-index: 4;
  aspect-ratio: calc(2 / 3);
  background-position: 0 0;
  background-size: cover;
  overflow: hidden;
  border-radius: 0.5rem;

  @media (min-width: 48rem) {
    display: flex;
    position: unset;
    flex-direction: row;
    border-radius: 0.3rem;
    max-width: 18.75rem;
    max-height: 28.125rem;
    min-width: 18.75rem;
    min-height: 28.125rem;

    img {
      max-width: 18.75rem;
      max-height: 28.125rem;
      min-width: 18.75rem;
      min-height: 28.125rem;
    }
  }
`;

export const MovieImageWrapper = styled.div`
  position: relative;
  min-width: 18.75rem;
  min-height: 28.125rem;
  overflow: hidden;
  border-radius: 0.75rem;

  &:hover .overlay {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.375rem);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  width: 18.75rem;
  height: 28.125rem;
`;

export const ExpandText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #73889e;

  @media (min-width: 48rem) {
    background-color: transparent;
    padding-left: 2.5rem;
  }
`;
const MovieTitle = styled.h1`
  padding: 1rem 1.25rem;
  gap: 0.3125rem;
  display: flex;
  justify-content: center;
  font-size: calc(0.7rem + 3vw);
  font-weight: 600;
  color: #fff;
  align-items: baseline;

  @media (min-width: 48rem) {
    font-size: 2.2rem;

    span {
      font-size: 2.2rem;
    }
  }

  span {
    font-size: calc(0.2em + 3vw);
    font-weight: 400;
    opacity: 0.8;
  }

  @media (min-width: 48rem) {
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    flex-wrap: wrap;

    @media (min-width: 48rem) {
      span {
        font-size: 2.2rem;
        padding-left: 0.5rem;
      }
    }
  }
`;

const MovieScore = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1.25rem 1rem;
`;

const MovieScoreLeft = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 0.5rem;

  @media (min-width: 48rem) {
    margin: 0 0 1rem 0;
  }
`;
const CustomVoteRing = styled(CustomVoteRingBase)`
  position: unset;

  @media (min-width: 48rem) {
    position: relative;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default CustomVoteRing;
const UserScore = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;

  @media (min-width: 48rem) {
    width: 2.45rem;
    line-height: 1.6rem;
  }
`;

const MovieEmojies = styled.div`
  margin-left: 0.3125rem;
  width: 3.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const EmojiIcon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, z-index 0.2s;
  &:hover {
    transform: scale(1.2);
    ${(props) =>
      props.$active
        ? `
    z-index: 2;
  `
        : `
    z-index: 1;
  `}
  }

  &:last-child {
    position: absolute;
    left: 1rem;
  }
`;

const MiddleLine = styled.div`
  width: 0.0625rem;
  height: 1.5rem;
  background-color: #fff;
  opacity: 0.5;
`;

const MovieScoreRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  gap: 0.1875rem;

  @media (min-width: 48rem) {
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    border-radius: 2rem;
    background-color: #052541;
    transition: transform 0.3s ease;
    cursor: pointer;
    height: 2.5rem;

    :hover {
      transition-duration: 150ms;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Vibe1 = styled.span``;

const Vibe2 = styled.span`
  text-decoration: underline;
  text-decoration-color: #29abe2;
  text-decoration-thickness: 0.125rem;
`;

const Vibe3 = styled.span``;

const Vibe4 = styled.span`
  display: flex;
  align-items: center;
`;

const MovieToggles = styled.div`
  display: flex;
  gap: 1rem;
  div {
    position: relative;
    width: 2.875rem;
    height: 2.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    background-color: #052541;

    svg {
      fill: #fff;
      width: 0.7rem;
      height: 0.7rem;
    }
    &:hover span {
      opacity: 1;
      transform: translateY(0);
    }

    @media (min-width: 48rem) {
    }
  }
  span {
    position: absolute;
    bottom: -2.5rem;
    font-size: 0.625rem;
    background-color: #052541;
    color: #fff;
    padding: 0.4rem 0.6rem;
    border-radius: 0.375rem;
    font-size: 0.7rem;
    white-space: nowrap;
    opacity: 0;
    transform: translateY(0.3125rem);
    transition: all 0.2s ease;
    pointer-events: none;
    z-index: 1;
  }
`;

const MovieDetails = styled.div`
  padding: 0.625rem;
  background-color: #687b8f;
  border-top: 0.0625rem solid #546575;
  border-bottom: 0.0625rem solid #546575;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 48rem) {
    padding: 1.25rem;
    background-color: transparent;
    border: none;
  }
`;

const MovieInnerDetails = styled.div`
  color: #fff;
  align-items: center;
`;

const PlayTrailers = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    transition: transform 0.2s ease-in-out;
  }

  @media (min-width: 48rem) {
    color: #fff;

    &:hover {
      color: gray;

      img {
        color: gray;
      }
    }
  }
`;

const MovieFirstLine = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  span:first-child {
    border: 0.0625rem solid #fff;
    padding: 0.0625rem 0.25rem;
    border-radius: 0.125rem;
    opacity: 0.7;
  }

  @media (min-width: 48rem) {
    color: #fff;
    margin-bottom: 1.5rem;
  }
`;

const GenreTag = styled.p`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const GenreTags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MovieOverview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  color: #fff;
  @media (min-width: 48rem) {
    padding: 1.25rem 0 0 0;
  }
`;

const TagLine = styled.h2`
  opacity: 0.7;
  font-size: 1.1rem;
  font-weight: 400;
  font-style: italic;
`;

const OverView = styled.h3`
  margin: 0.625rem 0 0.5rem;
  font-weight: 600;
  font-size: 1.3rem;
`;

const MovieOverviewText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  opacity: 0.8;
  margin-bottom: 0.625rem;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.125rem;
  background-color: rgba(3, 37, 65, 0.8);
  backdrop-filter: blur(1.25rem);
  color: #ffffff;
  z-index: 10;
  margin-bottom: 0;
  transition: padding-bottom 0.3s;

  div {
    cursor: pointer;
  }
  @media (min-width: 48rem) {
    display: none;
  }
`;

export {
  SubHeader,
  HeaderSubButton,
  SubButton,
  Dropdown,
  Catalog,
  DropdownItem,
  ItemLabel,
  ItemCount,
  VideoImage,
  VideoSidebar,
  VideoSidebarItem,
  MainWrapper,
  MovieBackground,
  MovieImage,
  MovieContainer,
  MainContent,
  MovieContent,
  MovieTitle,
  MovieScore,
  MovieScoreLeft,
  MovieScoreRight,
  UserScore,
  MovieEmojies,
  EmojiIcon,
  MiddleLine,
  CustomVoteRing,
  Vibe1,
  Vibe2,
  Vibe3,
  Vibe4,
  MovieToggles,
  MovieDetails,
  MovieInnerDetails,
  PlayTrailers,
  GenreTag,
  GenreTags,
  MovieFirstLine,
  MovieOverview,
  TagLine,
  OverView,
  MovieOverviewText,
  BottomBar,
};
