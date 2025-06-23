import {
  RenderLi,
  RenderLi2,
  Main,
  MainContainer,
  PopularMovies,
  MainFilter,
  FilterSort,
  FilterArrow,
  ShowMeFilter,
  ShowMeInnerFilter,
  ShowMeOptions,
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
  SearchRef,
  MobileSearchBar,
  MobileSearchButton,
} from "./styled";

import ReleaseDateFilter from "./releaseDataFilter";
import { useState, useEffect, useRef } from "react";
import SortDropdown from "./sortDropdown";
import {
  SORT_OPTIONS,
  SORT_OPTIONS2,
  GENRE_LIST,
  SORT_MAPPING,
  GENRE_MAP,
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
import { useMovies } from "../../context/MovieContext";
import GenreFilter from "./genre";

import { getMovieData } from "../../api";
import KeywordSearch from "./keywords";

const Sidebar = () => {
  const { setMovies } = useMovies();

  const [showSortResults, setShowSortResults] = useState(false);

  const [showFilter, setShowFilter] = useState(window.innerWidth >= 768);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(SORT_OPTIONS2[0]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const optionRefs = useRef([]);

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  optionRefs.current = [];

  const isSearchEnabled =
    selectedGenres.length > 0 ||
    selectedKeywords.length > 0 ||
    selected !== SORT_OPTIONS2[0];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
    if (!isSearchEnabled || isLoading) return;

    if (triggerRef.current) {
      triggerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsLoading(true);

    const genreIds = selectedGenres.map((g) => GENRE_MAP[g]).filter(Boolean);
    const sortParam = SORT_MAPPING[selected] || "popularity.desc";
    const keywordIds = selectedKeywords.map((k) => k.id).join(",");

    getMovieData({
      page: 1,
      selectedGenres: genreIds,
      sortBy: sortParam,
      keyword: keywordIds,
    }).then((data) => {
      setMovies(data.results || []);
      setIsSticky(false);
      setSelectedGenres([]);
      setSelectedKeywords([]);
      setIsLoading(false);
      setSelected(SORT_OPTIONS2[0]);
      setHasSearched(true);
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
      <RenderLi key={idx} $left={(100 / (labels.length - 1)) * idx}>
        {label}
      </RenderLi>
    ));

  const renderLabels2 = (labels) =>
    labels.map((label, idx) => {
      const positions = ["0%", "31%", "61%", "92%"];
      return (
        <RenderLi2 key={idx} $left={positions[idx] || "0%"}>
          {label}
        </RenderLi2>
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
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex = (index + 1) % SORT_OPTIONS2.length;
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prevIndex =
          (index - 1 + SORT_OPTIONS2.length) % SORT_OPTIONS2.length;
        optionRefs.current[prevIndex]?.focus();
        break;
      }
      case "Enter":
        handleSelect(SORT_OPTIONS2[index]);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
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
    const observer = new IntersectionObserver(([entry]) => {
      if (!isLoading) {
        setIsSticky(!entry.isIntersecting);
      }
    });

    const currentTrigger = triggerRef.current;
    if (currentTrigger) observer.observe(currentTrigger);

    return () => {
      if (currentTrigger) observer.unobserve(currentTrigger);
    };
  }, [isLoading]);

  return (
    <>
      <Main>
        <PopularMovies>
          <h2>Popular Movies</h2>
        </PopularMovies>
        <MainContainer>
          <SortDropdown
            selected={selected}
            isOpen={isOpen}
            showSortResults={showSortResults}
            toggleSortResults={toggleSortResults}
            toggleOpen={() => setIsOpen(!isOpen)}
            handleSelect={handleSelect}
            handleKeyDown={handleKeyDown}
            optionRefs={optionRefs}
            SORT_OPTIONS={SORT_OPTIONS2}
          />

          <MainFilter>
            <FilterSort onClick={toggleFilter}>
              <span>Filters</span>
              <FilterArrow
                src={sortArrow}
                alt="filter-sort"
                $rotated={showFilter}
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
                    {SORT_OPTIONS.map((option, idx) => (
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

                <ReleaseDateFilter />

                <GenreFilter
                  selectedGenres={selectedGenres}
                  toggleGenre={toggleGenre}
                />
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
                      <Line $percentage={100} />
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
                      <Line $percentage={20} />
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
                      <Line $percentage={100} />
                      <RightPoint />
                    </Slider>
                    <Bar>
                      {renderBottomBars(RUNTIME_MARKERS, [0, 8, 16, 24])}
                    </Bar>
                  </div>
                  <Numbers>{renderLabels2(RUNTIME_LABELS)}</Numbers>
                </Section>
                <KeywordsWrapper>
                  <KeywordSearch
                    keyword={keyword}
                    setKeyword={setKeyword}
                    selectedKeywords={selectedKeywords}
                    setSelectedKeywords={setSelectedKeywords}
                  />
                </KeywordsWrapper>
              </>
            )}
          </MainFilter>
          <SearchRef ref={triggerRef} />

          <MobileSearchBar
            onClick={handleSearchClick}
            disabled={!isSearchEnabled || isLoading}
            scrolled={isSticky ? "scrolled" : ""}
          >
            <MobileSearchButton
              onClick={handleSearchClick}
              disabled={!isSearchEnabled || isLoading}
              scrolled={isSticky ? "scrolled" : ""}
            >
              Search
            </MobileSearchButton>
          </MobileSearchBar>
        </MainContainer>
      </Main>
    </>
  );
};

export default Sidebar;
