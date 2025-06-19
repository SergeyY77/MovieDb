import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../assets/icons/header-search.svg";
import closeIcon from "../../assets/icons/header-close.svg";
import inputSearch from "../../assets/icons/header-input-search.svg";
import getSearchResult from "../../api";
import {
  Wrapper,
  ToggleButton,
  SearchBar,
  SearchInput,
  SearchImage,
  InputSearch,
  ResultsList,
  ResultItem,
  TagRemove,
  SearchInputWrapper,
} from "./styled";

const SearchToggle = ({ isHeaderVisible }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [placeholder, setPlaceholder] = useState(
    "Search for a movie, tv show, person..."
  );
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setPlaceholder("Search");
    }
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 2) {
      const res = await getSearchResult(value);
      setResults(res);
    } else {
      setResults([]);
    }
  };

  return (
    <Wrapper ref={wrapperRef}>
      <ToggleButton onClick={() => setOpen(!open)}>
        <SearchImage src={open ? closeIcon : searchIcon} alt="SearchIcon" />
      </ToggleButton>

      {open && (
        <SearchBar $isHeaderVisible={isHeaderVisible}>
          <SearchInputWrapper>
            <SearchInput
              ref={inputRef}
              placeholder={placeholder}
              value={query}
              onChange={handleInputChange}
            />
            <InputSearch
              src={inputSearch}
              alt="InputSearch"
              onClick={() => inputRef.current?.focus()}
            />
            {query.length > 0 && (
              <TagRemove
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  inputRef.current?.focus();
                }}
              >
                <svg
                  id="glyphicons-basic"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="#ffff"
                >
                  <path
                    id="menu-close"
                    d="M25.83881,23.01038a.5.5,0,0,1,0,.70715l-2.12128,2.12134a.50011.50011,0,0,1-.70709,0L16,18.82837l-7.01044,7.0105a.50011.50011,0,0,1-.70709,0L6.16119,23.71753a.5.5,0,0,1,0-.70715L13.17163,16,6.16119,8.9895a.49982.49982,0,0,1,0-.707L8.28247,6.16113a.5.5,0,0,1,.70709,0L16,13.17163l7.01044-7.0105a.5.5,0,0,1,.70709,0l2.12128,2.12134a.49982.49982,0,0,1,0,.707L18.82843,16Z"
                  />
                </svg>
              </TagRemove>
            )}
          </SearchInputWrapper>
          {results.length > 0 && (
            <ResultsList>
              {results.slice(0, 6).map((item) => (
                <ResultItem key={item.id}>{item.title || item.name}</ResultItem>
              ))}
            </ResultsList>
          )}
        </SearchBar>
      )}
    </Wrapper>
  );
};

export default SearchToggle;
