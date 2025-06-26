import {
  Main,
  MainContainer,
  PopularMovies,
  PopularMoviesName,
  MainFilter,
  FilterSort,
  ShowFilterImg,
  FilterArrow,
  FilterSortName,
  ShowMeInnerFilterName,
  ShowMeFilter,
  ShowMeInnerFilter,
  ShowMeOptions,
  RadioLabel,
  RadioInput,
  RadioText,
  Certification,
  LanguageName,
  Language,
  LanguageInner,
  LanguageArrow,
  LanguageOptions,
  LanguageOptionsName,
  KeywordsWrapper,
  SearchRef,
  MobileSearchBar,
  MobileSearchButton,
} from "./styled";
import ScoreFilters from "./Scorses";
import ReleaseDateFilter from "./releaseDataFilter";
import { useState, useEffect, useRef } from "react";
import SortDropdown from "./sortDropdown";
import {
  SORT_OPTIONS,
  SORT_OPTIONS2,
  SORT_MAPPING,
  GENRE_MAP,
} from "./constant";
import useMobile from "../../hooks/useMobile";
import sortArrow from "../../assets/icons/main-sort-arrow.svg";
import descendingArrow from "../../assets/icons/main-descending-arrow.svg";
import showMeIcon from "../../assets/icons/filter-show-me.svg";
import { useMovies } from "../../context/MovieContext";
import GenreFilter from "./genre";
import { getMovieData } from "../../api";
import KeywordSearch from "./keywords";

const Sidebar = () => {
  const { setPage, setMovies, setAutoLoadEnabled, setLoading } = useMovies();
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
  const [hasChanges, setHasChanges] = useState(false);

  optionRefs.current = [];
  const isMobile = useMobile();

  const isSearchEnabled = hasChanges && !isLoading;

  useEffect(() => {
    setShowFilter(!isMobile);
  }, [isMobile]);
  const toggleSortResults = () => {
    setShowSortResults((prev) => !prev);
  };

  const handleSelect = (option) => {
    if (option !== selected) {
      setSelected(option);
      setHasSearched(false);
      setHasChanges(true);
    }
    setIsOpen(false);
  };

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  useEffect(() => {
    if (selectedGenres.length > 0 || selectedKeywords.length > 0) {
      setHasChanges(true);
      setHasSearched(false);
    }
  }, [selectedGenres, selectedKeywords]);

  useEffect(() => {
    setHasSearched(false);
  }, [selectedGenres, selectedKeywords, selected]);

  const handleSearchClick = async () => {
    if (!isSearchEnabled || isLoading) {
      return;
    }
    setLoading(true);
    setIsLoading(true);

    if (triggerRef.current) {
      triggerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const genreIds = selectedGenres.map((g) => GENRE_MAP[g]).filter(Boolean);
    const sortParam = SORT_MAPPING[selected] || "popularity.desc";
    const keywordIds = selectedKeywords.map((k) => k.id).join(",");
    try {
      setAutoLoadEnabled(false);
      setPage(1);
      const data = await getMovieData({
        page: 1,
        selectedGenres: genreIds,
        sortBy: sortParam,
        keyword: keywordIds,
      });
      setMovies(data.results || []);
      setHasSearched(true);
      setKeyword("");
      setSuggestions([]);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

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
          <PopularMoviesName>Popular Movies</PopularMoviesName>
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
              <FilterSortName>Filters</FilterSortName>
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
                    <ShowMeInnerFilterName>Show Me</ShowMeInnerFilterName>
                    <ShowFilterImg src={showMeIcon} alt="question-mark" />
                  </ShowMeInnerFilter>
                  <ShowMeOptions>
                    {SORT_OPTIONS.map((option, idx) => (
                      <RadioLabel key={idx}>
                        <RadioInput name="choice" defaultChecked={idx === 0} />
                        <RadioText>{option}</RadioText>
                      </RadioLabel>
                    ))}
                  </ShowMeOptions>
                </ShowMeFilter>
                <ReleaseDateFilter />
                <GenreFilter
                  selectedGenres={selectedGenres}
                  toggleGenre={toggleGenre}
                />
                <Certification>Certification</Certification>
                <Language>
                  <LanguageInner>
                    <LanguageName>Language</LanguageName>
                    <ShowFilterImg src={showMeIcon} alt="question-mark" />
                  </LanguageInner>
                  <LanguageOptions>
                    <LanguageOptionsName>None Selected</LanguageOptionsName>
                    <LanguageArrow src={descendingArrow} alt="arrow" />
                  </LanguageOptions>
                </Language>
                <ScoreFilters />
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
            disabled={!isSearchEnabled || isLoading || hasSearched}
            $scrolled={isSticky ? "$scrolled" : ""}
          >
            <MobileSearchButton
              onClick={handleSearchClick}
              disabled={!isSearchEnabled || isLoading || hasSearched}
              $scrolled={isSticky ? "$scrolled" : ""}
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
