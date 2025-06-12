import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbApi } from "../../api";
import {
  SubHeader,
  HeaderSubButton,
  Dropdown,
  Catalog,
  DropdownItem,
  ItemCount,
  ItemLabel,
  VideoImage,
  VideoSidebar,
  VideoSidebarItem,
  MainWrapper,
  MainContent,
  MovieBackground,
  MovieImage,
  MovieContainer,
  MovieContent,
  MovieTitle,
  MovieScore,
  MovieScoreLeft,
  UserScore,
  MovieEmojies,
  MovieScoreRight,
  MiddleLine,
  Vibe1,
  Vibe2,
  Vibe3,
  Vibe4,
  MovieToggles,
  MovieDetails,
  MovieInnerDetails,
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
} from "./styled";
import VoteRing from "../../shared/ring";
import InfoIcon from "../../assets/icons/info-icon.svg";
import ArrowDownIcon from "../../assets/icons/main-descending-arrow.svg";
import CryEmoji from "../../assets/icons/emoji-cry.svg";
import SmileEmoji from "../../assets/icons/emoji-smile.svg";
import PlayTrailer from "../../assets/icons/play-trailer.svg";
import minutesToHours from "../../hooks/runtime";
import { actionMenuItems } from "../../components/Moives/actionMenu";
import { AiOutlineFullscreen } from "react-icons/ai";
import useMobile from "../../hooks/useMobile";
import { MOVIE_TABS } from "./constant";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredVideos, setHoveredVideos] = useState(false);
  const [hoveredDiscussions, setHoveredDiscussions] = useState(false);
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
  return (
    <div>
      <SubHeader>
        {MOVIE_TABS.map((tab, index) => (
          <HeaderSubButton key={index}>
            <div
              onMouseEnter={() => setOpen(index)}
              onMouseLeave={() => {
                setOpen(null);
                setHoveredVideos(false);
              }}
              style={{ position: "relative" }}
            >
              <Catalog>
                {tab.label}
                <img src={ArrowDownIcon} alt="Arrow Down" />
              </Catalog>

              {open === index && (
                <Dropdown>
                  {tab.subItems.map((item, idx) => {
                    const hasChildren = Array.isArray(item.children);
                    const isHovered = hoveredItem === `${index}-${idx}`;

                    return (
                      <DropdownItem
                        key={idx}
                        isDivider={item.isDivider}
                        onMouseEnter={() =>
                          hasChildren && setHoveredItem(`${index}-${idx}`)
                        }
                        onMouseLeave={() => hasChildren && setHoveredItem(null)}
                        className={isHovered ? "hovered-nested" : ""}
                      >
                        <ItemLabel>{item.label}</ItemLabel>
                        {item.count !== undefined && (
                          <ItemCount>{item.count}</ItemCount>
                        )}
                        {hasChildren && (
                          <VideoImage>
                            <img src={ArrowDownIcon} alt="arrow" />
                          </VideoImage>
                        )}

                        {isHovered && hasChildren && (
                          <VideoSidebar>
                            {item.children.map((elem, elemIdx) => (
                              <VideoSidebarItem key={elemIdx}>
                                {elem.label}
                                {elem.count !== undefined && (
                                  <ItemCount>{elem.count}</ItemCount>
                                )}
                              </VideoSidebarItem>
                            ))}
                          </VideoSidebar>
                        )}
                      </DropdownItem>
                    );
                  })}
                </Dropdown>
              )}
            </div>
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
            >
              {/* <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="image"
              width="200"
              height="300"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            /> */}
            </MovieBackground>
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
                  />
                )}
                <UserScore>User Score</UserScore>
                <MovieEmojies>
                  <img
                    src={CryEmoji}
                    alt="cry"
                    active={activeImage === "image1"}
                    onClick={() => setActiveImage("image1")}
                  />
                  <img
                    src={SmileEmoji}
                    alt="smile"
                    active={activeImage === "image2"}
                    onClick={() => setActiveImage("image2")}
                  />
                </MovieEmojies>
              </MovieScoreLeft>
              <MiddleLine />
              <MovieScoreRight>
                <Vibe1>What's your</Vibe1>
                <Vibe2>Vibe</Vibe2>
                <Vibe3>?</Vibe3>
                <Vibe4>
                  <img src={InfoIcon} alt="info" />
                </Vibe4>
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
                    <img src={PlayTrailer} alt="play trailer" />
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MovieImageWrapper>
            <MovieImage>
              <img
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
              <span> • {movie.runtime && minutesToHours(movie.runtime)}</span>
            </MovieFirstLine>
            <MovieScoreLeft>
              {movie.vote_average && (
                <CustomVoteRing
                  percent={movie.vote_average * 10}
                  visible={true}
                  size={60}
                />
              )}
              <UserScore>User Score</UserScore>
              <MovieEmojies>
                <img
                  src={CryEmoji}
                  alt="cry"
                  active={activeImage === "image1"}
                  onClick={() => setActiveImage("image1")}
                />
                <img
                  src={SmileEmoji}
                  alt="smile"
                  active={activeImage === "image2"}
                  onClick={() => setActiveImage("image2")}
                />
              </MovieEmojies>
              <MovieScoreRight>
                <Vibe1>What's your</Vibe1>
                <Vibe2>Vibe</Vibe2>
                <Vibe3>?</Vibe3>
                <Vibe4>
                  <img src={InfoIcon} alt="info" />
                </Vibe4>
              </MovieScoreRight>
            </MovieScoreLeft>
            <MovieToggles>
              {actionMenuItems.slice(0, -1).map((item, index) => (
                <div key={index}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
              <PlayTrailers>
                <img src={PlayTrailer} alt="play trailer" />
                Play Trailer
              </PlayTrailers>
            </MovieToggles>
            <MovieOverview>
              <TagLine>{movie.tagline}</TagLine>
              <OverView>Overview</OverView>
              <MovieOverviewText>{movie.overview}</MovieOverviewText>
            </MovieOverview>
          </MovieContent>
        </MainWrapper>
      )}
      <BottomBar>
        {actionMenuItems.map((item, index) => (
          <div key={index}>{item.icon}</div>
        ))}
      </BottomBar>
    </div>
  );
}

export default Movie;
