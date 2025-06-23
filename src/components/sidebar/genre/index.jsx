// GenreFilter.jsx
import React from "react";
import { GenreBox, GenreTitle, GenreList, Genre } from "./styled";
import { GENRE_LIST } from "../constant";

const GenreFilter = ({ selectedGenres, toggleGenre }) => {
  return (
    <GenreBox>
      <GenreTitle>Genres</GenreTitle>
      <GenreList key={selectedGenres.length}>
        {GENRE_LIST.map((genre) => (
          <Genre
            key={genre}
            onClick={() => toggleGenre(genre)}
            className={selectedGenres.includes(genre) ? "selected" : ""}
          >
            {genre}
          </Genre>
        ))}
      </GenreList>
    </GenreBox>
  );
};

export default GenreFilter;
