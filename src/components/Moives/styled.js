import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.375rem;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2.875rem;
    padding: 0 0 0 1.875rem;
  }
`;

const Card = styled.div`
  display: flex;
  border: 1px solid #e3e3e3;
  border-radius: 0.3rem;
  object-fit: cover;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    border-radius: 5px !important;
    position: relative;
    border-radius: 8px;
    flex-direction: column;
    width: 182px;
  }
`;

const ImageWrapper = styled.div`
  img {
    min-width: 100%;
    height: 8.8125rem;
    object-fit: cover;
    display: block;
    cursor: pointer;
    border-radius: 5px 0 0 5px;

    @media (min-width: 768px) {
      height: 17.0625rem;
      width: 100%;
      border-radius: 5px 5px 0 0;
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

  @media (min-width: 768px) {
    width: 180px;
    padding: 1.625rem 0.625rem 0.75rem;
    display: flex;
    flex-direction: row;
    white-space: normal;

    img {
      display: block;
      position: absolute;
      width: 25.59px;
      height: 25.59px;
      top: -264px;
      left: 145px;
      opacity: 0.6;
      cursor: pointer;
      z-index: 1;
      pointer-events: none;
    }
  }
`;
const Options = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    top: -265px;
    right: 10px;
    z-index: 999;
    width: 24px;
    height: 24px;

    svg {
      width: 24px;
      height: 24px;
      color: white;
      opacity: 0.6;
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
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
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

    @media (min-width: 768px) {
      color: rgba(0, 0, 0, 0.6);
      margin: 0;
      padding: 0;
      display: none;
    }
  }
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

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    max-width: 63.875rem;
    margin-top: 1.5rem;
  }
`;

const LoadMoreText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
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
  LoadMoreButton,
  LoadMoreText,
  Options,
};
