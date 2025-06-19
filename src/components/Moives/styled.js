import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 0 1.375rem;

  @media (min-width: 48rem) {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2.875rem;
    padding: 0 0 0 1.875rem;
    gap: 1.9rem;
  }
`;

const Card = styled.div`
  display: flex;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.3rem;
  object-fit: cover;
  z-index: ${({ $open }) => ($open ? 10 : 1)};

  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  @media (min-width: 48rem) {
    border-radius: 0.3125rem !important;
    position: relative;
    border-radius: 0.5rem;
    flex-direction: column;
    width: 11.375rem;
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
    }
  }
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
    width: 11.25rem;
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
  p {
    font-size: 1rem;
    color: #999;
    margin-bottom: 1rem;
  }

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0;
  }
`;

const Overview = styled.div`
  p {
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
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-bottom: 1.25rem;

  &:hover span {
    color: #222;
  }

  @media (min-width: 48rem) {
    width: 100%;
    margin: 0 auto;
    max-width: 63.875rem;
    margin-top: 1.5rem;
  }
`;

const LoadMoreText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

export {
  Card,
  ImageWrapper,
  Content,
  Title,
  Description,
  Overview,
  CardContainer,
  LoadMoreRef,
  LoadMoreButton,
  LoadMoreText,
  Options,
  CardHover,
};
