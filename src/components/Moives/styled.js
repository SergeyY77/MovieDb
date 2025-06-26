import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11.375rem, 1fr));
  gap: 2rem;
  padding-top: 3rem;
  padding-left: 1.875rem;

  @media (min-width: 80.125rem) {
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
  }

  @media (max-width: 80.125rem) {
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
  }

  @media (max-width: 68.75rem) {
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
  }

  @media (max-width: 57.5rem) {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }

  @media (max-width: 47.9375rem) {
    grid-template-columns: 1fr;
    padding: 1rem 1.25rem;
    gap: 1rem;
  }
`;

const CardNoteFound = styled.p`
  grid-column: 1 / -1;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.3rem;
  object-fit: cover;
  z-index: ${({ $isOpen }) => ($isOpen ? 10 : 1)};
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);

  @media (min-width: 48rem) {
    position: relative;
    border-radius: 0.5rem;
    min-height: 24.5rem;
    flex-direction: column;
    width: 100%;
  }
`;

const CardHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(1.25rem);
  backdrop-filter: blur(1.25rem);
  width: 100%;
  height: 100%;
  border-radius: 0.3125rem;
  z-index: 1;
  transition: linear 0.1s;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: none;
`;

const ImageWrapper = styled.div`
  img {
    min-width: 100%;
    height: 8.8125rem;
    object-fit: cover;
    display: block;
    cursor: pointer;
    border-radius: 0.3125rem 0 0 0.3125rem;

    @media (min-width: 48rem) {
      height: 17.0625rem;
      width: 100%;
      border-radius: 0.3125rem 0.3125rem 0 0;
      object-position: center;
      object-fit: cover;
    }
  }
`;

const ImagePoster = styled.img`
  width: 5.875rem;
  height: 100%;
`;

const Content = styled.div`
  padding: 0.875rem;
  align-content: center;
  position: relative;

  img {
    display: none;
    pointer-events: none;
  }

  @media (min-width: 48rem) {
    width: 100%;
    padding: 1.625rem 0.625rem 0.75rem;
    display: flex;
    flex-direction: row;
    white-space: normal;

    img {
      display: block;
      position: absolute;
      width: 1.5994rem;
      height: 1.5994rem;
      top: -16.5rem;
      left: 9.0625rem;
      opacity: 0.6;
      cursor: pointer;
      pointer-events: none;
    }
  }
`;
const Options = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "blur",
})`
  display: none;

  @media (min-width: 48rem) {
    position: absolute;
    top: -16.5625rem;
    right: 0.625rem;
    z-index: 1;
    width: 1.5rem;
    height: 1.5rem;
    display: ${(props) => (props.blur ? "none" : "flex")};

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: white;
      opacity: 0.8;
      transition: color 0.2s;
      cursor: pointer;
    }

    &:hover svg {
      color: #01b4e4;
    }
  }
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;

  &:hover {
    color: #01b4e4;
  }
`;

const Description = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0;
  }
`;

const OriginDate = styled.p`
  font-size: 1rem;
  color: #999;
  margin-bottom: 1rem;
`;

const Overview = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  line-height: 1.2rem;

  @media (min-width: 48rem) {
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    padding: 0;
    display: none;
  }
`;

const LoadMoreRef = styled.div`
  height: 0.0625rem;
`;

const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
  width: 100%;
  background: #01b4e4;
  color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover span {
    color: #222;
  }

  @media (min-width: 48rem) {
    width: 100%;
    margin: 0 auto;
    max-width: 63.875rem;
  }
`;
const LoadMoreWrapper = styled.div`
  grid-column: 1 / -1;
`;

const LoadMoreText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

export {
  Card,
  ImageWrapper,
  ImagePoster,
  Content,
  Title,
  OriginDate,
  Description,
  Overview,
  CardContainer,
  LoadMoreRef,
  LoadMoreButton,
  LoadMoreText,
  Options,
  CardHover,
  CardNoteFound,
  LoadMoreWrapper,
};
