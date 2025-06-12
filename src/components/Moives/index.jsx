import {
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
} from "./styled";
import Option from "../../assets/icons/options.svg";
import ActionDropdown from "./actionMenu";
import VoteRing from "../../shared/ring";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState, useCallback } from "react";
import { useMovies } from "../../context/MovieContext";

const MovieCard = () => {
  const { movies, loadMore, page } = useMovies();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const observerRef = useRef();
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(false);
  const navigate = useNavigate();
  const cardRefs = useRef({});

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const lastElementRef = useCallback(
    (node) => {
      if (!autoLoadEnabled) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [autoLoadEnabled, page, loadMore]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      const anyOpen = Object.values(cardRefs.current).some((ref) => {
        return ref && ref.contains(event.target);
      });

      if (!anyOpen) setOpenDropdownId(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!movies.length) return null;

  return (
    <CardContainer>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          ref={(el) => (cardRefs.current[movie.id] = el)}
          onClick={() => handleCardClick(movie.id)}
          style={{
            zIndex: openDropdownId === movie.id ? 10 : 1,
          }}
        >
          <ImageWrapper
            style={{
              filter: openDropdownId === movie.id ? "blur(20px)" : "none",
            }}
          >
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </ImageWrapper>
          <ActionDropdown open={openDropdownId === movie.id} />

          <Content
            style={{
              filter: openDropdownId === movie.id ? "blur(20px)" : "none",
            }}
          >
            <Options
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdownId(movie.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="glyphicons-basic"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  id="circle-more"
                  d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4ZM10,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,10,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,22,18Z"
                />
              </svg>
            </Options>

            <VoteRing
              percent={movie.vote_average > 0 ? movie.vote_average * 10 : null}
            />

            <Description>
              <Title>{movie.title}</Title>
              <p>
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </Description>

            <Overview>
              <p>{movie.overview}</p>
            </Overview>
          </Content>
        </Card>
      ))}
      <div ref={lastElementRef} style={{ height: "1px" }} />
      <LoadMoreButton
        onClick={() => {
          loadMore();
          setAutoLoadEnabled(true);
        }}
      >
        <LoadMoreText>Load More</LoadMoreText>
      </LoadMoreButton>
    </CardContainer>
  );
};

export default MovieCard;
