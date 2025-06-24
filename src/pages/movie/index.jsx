import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbApi } from "../../api";
import {
  SubHeader,
  HeaderSubButton,
  SubButton,
  Dropdown,
  Catalog,
  CatalogArrow,
  MainWrapper,
  MainContent,
  MovieBackground,
  MovieImage,
  MovieBlur,
  MovieContainer,
  MovieContent,
  MovieTitle,
  MovieScore,
  MovieScoreLeft,
  UserScore,
  MovieEmojies,
  EmojiIcon,
  MovieScoreRight,
  MiddleLine,
  Vibe1,
  Vibe2,
  Vibe3,
  Vibe4,
  MovieToggles,
  MovieDetails,
  MovieInnerDetails,
  PlayTrailersImg,
  MovieFirstLine,
  GenreTag,
  GenreTags,
  PlayTrailers,
  MovieOverview,
  TagLine,
  OverView,
  MovieOverviewText,
  CustomVoteRing,
  BottomBar,
  MovieImageWrapper,
  Overlay,
  ExpandText,
  MainSubWrapper,
  MainGradient,
} from "./styled";
import InfoIcon from "../../assets/icons/info-icon.svg";
import ArrowDownIcon from "../../assets/icons/main-descending-arrow.svg";
import CryEmoji from "../../assets/icons/emoji-cry.svg";
import SmileEmoji from "../../assets/icons/emoji-smile.svg";
import PlayTrailer from "../../assets/icons/play-trailer.svg";
import minutesToHours from "../../utils/runtime";
import { AiOutlineFullscreen } from "react-icons/ai";
import useMobile from "../../hooks/useMobile";
import { MOVIE_TABS } from "./constant";
import { ACTION_MENU_ITEM } from "../../components/Moives/actionMenu/constant";
import DropdownMenuItem from "./dropdownMenuItem";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isOpen, isSetOpen] = useState(false);
  const [hoveredVideos, setHoveredVideos] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [activeImage, setActiveImage] = useState("image1");
  const isMobile = useMobile();
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  }

  useEffect(() => {
    tmdbApi
      .get(`/movie/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch(console.error);
  }, []);

  const CustomVoteRingBase = ({ ...props }) => {
    const [size, setSize] = useState(window.innerWidth >= 768 ? 4.8 : 3.2);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 48rem)");
      const handler = (e) => setSize(e.matches ? 4.8 : 3.2);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return <VoteRing {...props} size={size} />;
  };
  return (
    <div>
      <SubHeader>
        {MOVIE_TABS.map((tab, index) => (
          <HeaderSubButton key={index}>
            <SubButton
              onMouseEnter={() => isSetOpen(index)}
              onMouseLeave={() => {
                isSetOpen(null);
                setHoveredVideos(false);
              }}
            >
              <Catalog>
                {tab.label}
                <CatalogArrow src={ArrowDownIcon} alt="Arrow Down" />
              </Catalog>

              {isOpen === index && (
                <Dropdown>
                  {tab.subItems.map((item, idx) => (
                    <DropdownMenuItem
                      key={idx}
                      item={item}
                      index={idx}
                      parentIndex={index}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                    />
                  ))}
                </Dropdown>
              )}
            </SubButton>
          </HeaderSubButton>
        ))}
      </SubHeader>
      {isMobile ? (
        <MainWrapper>
          <MovieContainer>
            <MovieBackground
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
            ></MovieBackground>
          </MovieContainer>
          <MovieContent>
            <MovieImage
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              }}
            />
            <MovieTitle>
              {movie.title}
              <span>({movie.release_date?.split("-")[0]})</span>
            </MovieTitle>
            <MovieScore>
              <MovieScoreLeft>
                {movie.vote_average && (
                  <CustomVoteRing
                    percent={movie.vote_average * 10}
                    visible={true}
                    size={2.8}
                  />
                )}
                <UserScore>User Score</UserScore>
                <MovieEmojies>
                  <EmojiIcon
                    src={CryEmoji}
                    alt="cry"
                    $active={activeImage === "image1"}
                    onClick={() => setActiveImage("image1")}
                  />
                  <EmojiIcon
                    src={SmileEmoji}
                    alt="smile"
                    $active={activeImage === "image2"}
                    onClick={() => setActiveImage("image2")}
                  />
                </MovieEmojies>
              </MovieScoreLeft>
              <MiddleLine />
              <MovieScoreRight>
                <Vibe1>What's your</Vibe1>
                <Vibe2>Vibe</Vibe2>
                <Vibe3>?</Vibe3>
                <Vibe4 src={InfoIcon} alt="info" />
              </MovieScoreRight>
            </MovieScore>
            <MovieDetails>
              <MovieInnerDetails>
                <MovieFirstLine>
                  <span>PG</span>
                  <span>
                    {movie.release_date && formatDate(movie.release_date)} (US)
                  </span>
                  <span>
                    {" "}
                    • {movie.runtime && minutesToHours(movie.runtime)}
                  </span>
                  <PlayTrailers>
                    <PlayTrailersImg src={PlayTrailer} alt="play trailer" />
                    Play Trailer
                  </PlayTrailers>
                </MovieFirstLine>
                <GenreTags>
                  {movie.genres?.map((genre, index) => (
                    <GenreTag key={index}>
                      {genre.name} {index < movie.genres.length - 1 && `,`}
                    </GenreTag>
                  ))}
                </GenreTags>
              </MovieInnerDetails>
            </MovieDetails>
            <MovieOverview>
              <TagLine>{movie.tagline}</TagLine>
              <OverView>Overview</OverView>
              <MovieOverviewText>{movie.overview}</MovieOverviewText>
            </MovieOverview>
          </MovieContent>
        </MainWrapper>
      ) : (
        <MainWrapper
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        >
          <MainGradient>
            <MainSubWrapper>
              <MovieImageWrapper>
                <MovieImage>
                  <MovieBlur
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="image"
                  />
                  <Overlay className="overlay">
                    <ExpandText>
                      <AiOutlineFullscreen size={24} color="#fff" />
                      Expand
                    </ExpandText>
                  </Overlay>
                </MovieImage>
              </MovieImageWrapper>
              <MovieContent>
                <MovieTitle>
                  {movie.title}
                  <span>({movie.release_date?.split("-")[0]})</span>
                </MovieTitle>
                <MovieFirstLine>
                  <span>PG</span>
                  <span>
                    {movie.release_date && formatDate(movie.release_date)} (US)
                  </span>
                  <GenreTags>
                    {movie.genres?.map((genre, index) => (
                      <GenreTag key={index}>
                        {genre.name} {index < movie.genres.length - 1 && `,`}
                      </GenreTag>
                    ))}
                  </GenreTags>
                  <span>
                    {" "}
                    • {movie.runtime && minutesToHours(movie.runtime)}
                  </span>
                </MovieFirstLine>
                <MovieScoreLeft>
                  {movie.vote_average && (
                    <CustomVoteRing
                      percent={movie.vote_average * 10}
                      visible={true}
                      size={3.8}
                    />
                  )}
                  <UserScore>User Score</UserScore>
                  <MovieEmojies>
                    <EmojiIcon
                      src={CryEmoji}
                      alt="cry"
                      $active={activeImage === "image1"}
                      onClick={() => setActiveImage("image1")}
                    />
                    <EmojiIcon
                      src={SmileEmoji}
                      alt="smile"
                      $active={activeImage === "image2"}
                      onClick={() => setActiveImage("image2")}
                    />
                  </MovieEmojies>
                  <MovieScoreRight>
                    <Vibe1>What's your</Vibe1>
                    <Vibe2>Vibe</Vibe2>
                    <Vibe3>?</Vibe3>
                    <Vibe4 src={InfoIcon} alt="info" />
                  </MovieScoreRight>
                </MovieScoreLeft>
                <MovieToggles>
                  {ACTION_MENU_ITEM.slice(0, -1).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index}>
                        <Icon />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                  <PlayTrailers>
                    <PlayTrailersImg src={PlayTrailer} alt="play trailer" />
                    Play Trailer
                  </PlayTrailers>
                </MovieToggles>
                <MovieOverview>
                  <TagLine>{movie.tagline}</TagLine>
                  <OverView>Overview</OverView>
                  <MovieOverviewText>{movie.overview}</MovieOverviewText>
                </MovieOverview>
              </MovieContent>
            </MainSubWrapper>
          </MainGradient>
        </MainWrapper>
      )}
      <BottomBar>
        {ACTION_MENU_ITEM.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index}>
              <Icon />
            </div>
          );
        })}
      </BottomBar>
    </div>
  );
}

export default Movie;
