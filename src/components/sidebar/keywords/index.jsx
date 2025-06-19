import React, { useState, useEffect, useRef } from "react";
import {
  KeywordsWrapper,
  KeywordsLabel,
  InputContainer,
  KeywordInput,
  SuggestionsList,
  SuggestionItem,
  KeywordCancel,
  TagList,
  TagItem,
  TagRemove,
} from "./styled";
import { getKeywords } from "../../../api";

const KeywordSearch = ({
  keyword,
  setKeyword,
  selectedKeywords,
  setSelectedKeywords,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [wasSearched, setWasSearched] = useState(false);
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const inputContainerRef = useRef(null);
  useEffect(() => {
    if (inputContainerRef.current) {
      inputContainerRef.current.scrollTop =
        inputContainerRef.current.scrollHeight;
    }
  }, [selectedKeywords]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setKeyword(value);
    setWasSearched(true);
    setIsOpen(true);

    if (value.length >= 2) {
      const results = await getKeywords(value);
      setSuggestions(results.slice(0, 6));
      setHighlightedIndex(0);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);

        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRemove = (id) => {
    setSelectedKeywords((prev) => prev.filter((k) => k.id !== id));
  };

  const handleSelect = (item) => {
    if (!selectedKeywords.some((k) => k.id === item.id)) {
      setSelectedKeywords((prev) => [...prev, item]);
    }

    setKeyword("");
    setSuggestions([]);
    setIsOpen(false);
  };
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    switch (e.key) {
      case "ArrowDown":
        setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
        break;

      case "ArrowUp":
        setHighlightedIndex((prev) =>
          prev === 0 ? suggestions.length - 1 : prev - 1
        );
        break;

      case "Enter":
        handleSelect(suggestions[highlightedIndex]);
        break;

      default:
        break;
    }
  };

  return (
    <KeywordsWrapper ref={wrapperRef}>
      <KeywordsLabel>Keywords</KeywordsLabel>
      <InputContainer ref={inputContainerRef}>
        <TagList>
          {selectedKeywords.map((item) => (
            <TagItem key={item.id}>
              {item.name}
              <TagRemove onClick={() => handleRemove(item.id)}>
                <svg
                  viewBox="0 0 512 512"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7z"></path>
                </svg>
              </TagRemove>
            </TagItem>
          ))}
        </TagList>

        <KeywordInput
          ref={inputRef}
          value={keyword}
          type="text"
          placeholder={
            !isFocused && keyword === "" && selectedKeywords.length === 0
              ? "Filter for keywords..."
              : ""
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      {isOpen && wasSearched && (keyword.length >= 2 || keyword === "") && (
        <SuggestionsList>
          {suggestions.length > 0 ? (
            suggestions.map((item, index) => (
              <SuggestionItem
                key={item.id}
                onClick={() => {
                  setKeyword("");
                  handleSelect(item);
                }}
                className={highlightedIndex === index ? "highlighted" : ""}
              >
                {item.name}
              </SuggestionItem>
            ))
          ) : (
            <SuggestionItem disabled>No data found.</SuggestionItem>
          )}
        </SuggestionsList>
      )}
      {(keyword !== "" || selectedKeywords.length > 0) && (
        <KeywordCancel
          onClick={() => {
            setKeyword("");
            setSuggestions([]);
            setWasSearched(true);
            setIsOpen(true);
            setIsFocused(false);
            setSelectedKeywords([]);
            inputRef.current?.focus();
          }}
        >
          <svg
            id="glyphicons-basic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path
              id="menu-close"
              d="M25.83881,23.01038a.5.5,0,0,1,0,.70715l-2.12128,2.12134a.50011.50011,0,0,1-.70709,0L16,18.82837l-7.01044,7.0105a.50011.50011,0,0,1-.70709,0L6.16119,23.71753a.5.5,0,0,1,0-.70715L13.17163,16,6.16119,8.9895a.49982.49982,0,0,1,0-.707L8.28247,6.16113a.5.5,0,0,1,.70709,0L16,13.17163l7.01044-7.0105a.5.5,0,0,1,.70709,0l2.12128,2.12134a.49982.49982,0,0,1,0,.707L18.82843,16Z"
            />
          </svg>
        </KeywordCancel>
      )}
    </KeywordsWrapper>
  );
};

export default KeywordSearch;
