import {
  Main,
  MainContainer,
  PopularMovies,
  MainSort,
  SortTable,
  SortResults,
  SortPopularity,
  MainFilter,
  FilterSort,
  ShowMeFilter,
  ShowMeInnerFilter,
  ShowMeOptions,
  ReleaseFilter,
  RealiseSearch,
  DateFilter,
  InputWrapper,
  InputIcon,
  GenreBox,
  GenreTitle,
  GenreList,
  Genre,
  Certification,
  Language,
  LanguageInner,
  LanguageOptions,
  Section,
  Label,
  Bar,
  Small,
  Big,
  BottomSmall,
  BottomBig,
  Slider,
  Line,
  LeftPoint,
  RightPoint,
  CenterPoint,
  Numbers,
  KeywordsWrapper,
  KeywordsLabel,
  InputContainer,
  KeywordInput,
  DropdownOptions,
  Option,
  MobileSearchBar,
  MobileSearchButton,
  SuggestionsList,
  SuggestionItem,
  SelectedKeyword,
  RemoveIcon,
} from "./styled";
import { useState, useEffect, useRef } from "react";

import {
  sortOptions,
  sortOptions2,
  genreList,
  genreMap,
  USER_SCORE_LABELS,
  VOTES_LABELS,
  RUNTIME_LABELS,
  USER_SCORE_MARKERS,
  VOTES_MARKERS,
  RUNTIME_MARKERS,
} from "./constant";

import sortArrow from "../../assets/icons/main-sort-arrow.svg";
import descendingArrow from "../../assets/icons/main-descending-arrow.svg";
import showMeIcon from "../../assets/icons/filter-show-me.svg";
import calendarIcon from "../../assets/icons/filter-releases-data.svg";
import { useMovies } from "../../context/MovieContext";

import { getKeywords } from "../../api";
import { getMovieData } from "../../api";
import KeywordSearch from "./keywords";

const sortMapping = {
  "Popularity Descending": "popularity.desc",
  "Popularity Ascending": "popularity.asc",
  "Rating Descending": "vote_average.desc",
  "Rating Ascending": "vote_average.asc",
  "Release Date Descending": "release_date.desc",
  "Release Date Ascending": "release_date.asc",
  "Title (A-Z)": "original_title.asc",
  "Title (Z-A)": "original_title.desc",
};

const Sidebar = () => {
  const { sortMovies } = useMovies();
  const { setMovies } = useMovies();

  const [showSortResults, setShowSortResults] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions2[0]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const optionRefs = useRef([]);

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  optionRefs.current = [];

  const isSearchEnabled =
    selectedGenres.length > 0 ||
    selectedKeywords.length > 0 ||
    selected !== sortOptions2[0];

  const toggleSortResults = () => {
    setShowSortResults((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };
  const handleSearchClick = () => {
    const genreIds = selectedGenres.map((g) => genreMap[g]).filter(Boolean);
    const sortParam = sortMapping[selected] || "popularity.desc";
    const keywordIds = selectedKeywords.map((k) => k.id).join(",");

    getMovieData({
      page: 1,
      selectedGenres: genreIds,
      sortBy: sortParam,
      keyword: keywordIds,
    }).then((data) => {
      setMovies(data.results || []);
    });
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const renderBars = (count, bigIndexes = []) =>
    Array.from({ length: count }, (_, i) =>
      bigIndexes.includes(i) ? <Big key={i} /> : <Small key={i} />
    );

  const renderBottomBars = (count, bigIndexes = []) =>
    Array.from({ length: count }, (_, i) =>
      bigIndexes.includes(i) ? <BottomBig key={i} /> : <BottomSmall key={i} />
    );

  const renderLabels = (labels) =>
    labels.map((label, idx) => (
      <li
        key={idx}
        style={{
          left: `${(100 / (labels.length - 1)) * idx}%`,
        }}
      >
        {label}
      </li>
    ));

  const renderLabels2 = (labels) =>
    labels.map((label, idx) => {
      let left = `${(100 / (labels.length - 1)) * idx}%`;

      if (idx === 1) left = "31%";
      if (idx === 2) left = "61%";
      if (idx === 3) left = "92%";
      return (
        <li key={idx} style={{ left }}>
          {label}
        </li>
      );
    });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        optionRefs.current[0]?.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % sortOptions2.length;
      optionRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + sortOptions2.length) % sortOptions2.length;
      optionRefs.current[prevIndex]?.focus();
    } else if (e.key === "Enter") {
      handleSelect(sortOptions2[index]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };
  const handleKeywordClick = (item) => {
    if (!selectedKeywords.find((k) => k.id === item.id)) {
      setSelectedKeywords((prev) => [...prev, item]);
    }
    setKeyword("");
    setSuggestions([]);
  };
  const removeKeyword = (id) => {
    setSelectedKeywords((prev) => prev.filter((k) => k.id !== id));
  };

  const triggerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <>
      <Main>
        <PopularMovies>
          <h2>Popular Movies</h2>
        </PopularMovies>
        <MainContainer>
          <MainSort>
            <SortTable onClick={toggleSortResults}>
              <span>Sort</span>
              <img
                src={sortArrow}
                alt="filter-sort"
                style={{
                  transition: "transform 0.3s",
                  transform: showSortResults ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </SortTable>

            {showSortResults && (
              <SortResults>
                <h3>Sort Results By</h3>
                <SortPopularity onClick={() => setIsOpen(!isOpen)}>
                  <span>{selected}</span>
                  <img src={descendingArrow} alt="sort" />
                  {isOpen && (
                    <DropdownOptions>
                      {sortOptions2.map((option, index) => (
                        <Option
                          key={option}
                          ref={(el) => (optionRefs.current[index] = el)}
                          onClick={() => handleSelect(option)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          tabIndex={0}
                        >
                          {option}
                        </Option>
                      ))}
                    </DropdownOptions>
                  )}
                </SortPopularity>
              </SortResults>
            )}
          </MainSort>

          <MainFilter>
            <FilterSort onClick={toggleFilter}>
              <span>Filters</span>
              <img
                src={sortArrow}
                alt="filter-sort"
                style={{
                  transition: "transform 0.3s",
                  transform: showFilter ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </FilterSort>
            {showFilter && (
              <>
                <ShowMeFilter>
                  <ShowMeInnerFilter>
                    <span>Show Me</span>
                    <img src={showMeIcon} alt="question-mark" />
                  </ShowMeInnerFilter>
                  <ShowMeOptions>
                    {sortOptions.map((option, idx) => (
                      <label className="radio-css" key={idx}>
                        <input
                          type="radio"
                          name="choice"
                          defaultChecked={idx === 0}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </ShowMeOptions>
                </ShowMeFilter>

                <ReleaseFilter>
                  <h3>Release Dates</h3>
                  <RealiseSearch>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Search all releases?</span>
                    </label>
                  </RealiseSearch>

                  <DateFilter>
                    <label>
                      <p>from</p>
                      <InputWrapper>
                        <input type="text" placeholder="" />
                        <InputIcon>
                          <img src={calendarIcon} alt="calendar" />
                        </InputIcon>
                      </InputWrapper>
                    </label>

                    <label>
                      <p>to</p>
                      <InputWrapper>
                        <input type="text" defaultValue="11/13/2025" />
                        <InputIcon>
                          <img src={calendarIcon} alt="calendar" />
                        </InputIcon>
                      </InputWrapper>
                    </label>
                  </DateFilter>
                </ReleaseFilter>
                <GenreBox>
                  <GenreTitle>Genres</GenreTitle>
                  <GenreList>
                    {genreList.map((genre) => (
                      <Genre
                        key={genre}
                        onClick={() => toggleGenre(genre)}
                        className={
                          selectedGenres.includes(genre) ? "selected" : ""
                        }
                      >
                        {genre}
                      </Genre>
                    ))}
                  </GenreList>
                </GenreBox>
                <Certification>
                  <p>Certification</p>
                </Certification>

                <Language>
                  <LanguageInner>
                    <p>Language</p>
                    <img src={showMeIcon} alt="question-mark" />
                  </LanguageInner>
                  <LanguageOptions>
                    <p>None Selected</p>
                    <img src={descendingArrow} alt="arrow" />
                  </LanguageOptions>
                </Language>
                <Section>
                  <Label>User Score</Label>
                  <div>
                    <Bar>{renderBars(USER_SCORE_MARKERS, [0, 5, 10])}</Bar>
                    <Slider>
                      <LeftPoint />
                      <Line percentage={100} />
                      <RightPoint />
                    </Slider>
                    <Bar>
                      {renderBottomBars(USER_SCORE_MARKERS, [0, 5, 10])}
                    </Bar>
                  </div>
                  <Numbers>{renderLabels(USER_SCORE_LABELS)}</Numbers>
                </Section>
                <Section>
                  <Label>Minimum User Votes</Label>
                  <div>
                    <Bar>{renderBars(VOTES_MARKERS, [0, 2, 4, 6, 8, 10])}</Bar>
                    <Slider>
                      <Line percentage={20} />
                      <CenterPoint percentage={20} />
                    </Slider>
                    <Bar>
                      {renderBottomBars(VOTES_MARKERS, [0, 2, 4, 6, 8, 10])}
                    </Bar>
                  </div>
                  <Numbers>{renderLabels(VOTES_LABELS)}</Numbers>
                </Section>
                <Section>
                  <Label>Runtime</Label>
                  <div>
                    <Bar>{renderBars(RUNTIME_MARKERS, [0, 8, 16, 24])}</Bar>
                    <Slider>
                      <LeftPoint />
                      <Line percentage={100} />
                      <RightPoint />
                    </Slider>
                    <Bar>
                      {renderBottomBars(RUNTIME_MARKERS, [0, 8, 16, 24])}
                    </Bar>
                  </div>
                  <Numbers>{renderLabels2(RUNTIME_LABELS)}</Numbers>
                </Section>
                <KeywordsWrapper>
                  <KeywordSearch onSelect={handleKeywordClick} />
                </KeywordsWrapper>
              </>
            )}
          </MainFilter>
          <div ref={triggerRef} style={{ height: "1px" }} />

          <MobileSearchBar
            onClick={handleSearchClick}
            disabled={!isSearchEnabled}
            $scrolled={isSticky ? "scrolled" : ""}
          >
            <MobileSearchButton
              onClick={handleSearchClick}
              disabled={!isSearchEnabled}
              $scrolled={isSticky ? "scrolled" : ""}
            >
              <p>Search</p>
            </MobileSearchButton>
          </MobileSearchBar>
        </MainContainer>
      </Main>
    </>
  );
};

export default Sidebar;
