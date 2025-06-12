import { createContext, useContext, useState, useEffect } from "react";
import { tmdbApi } from "../api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (pageNumber = 1, query = "") => {
    setLoading(true);
    try {
      const res = await tmdbApi.get(
        `/movie/popular?language=en-US&page=${pageNumber}${
          query ? `&query=${query}` : ""
        }`
      );
      setMovies((prev) =>
        pageNumber === 1 ? res.data.results : [...prev, ...res.data.results]
      );
      setPage(pageNumber);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const loadMore = () => fetchMovies(page + 1);

  const sortMovies = (option) => {
    const sorted = [...movies];
    switch (option) {
      case "Popularity Descending":
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      case "Popularity Ascending":
        sorted.sort((a, b) => a.popularity - b.popularity);
        break;
      case "Rating Descending":
        sorted.sort((a, b) => b.vote_average - a.vote_average);
        break;
      case "Rating Ascending":
        sorted.sort((a, b) => a.vote_average - b.vote_average);
        break;
      case "Release Date Descending":
        sorted.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      case "Release Date Ascending":
        sorted.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        break;
      case "Title (A-Z)":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Title (Z-A)":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setMovies(sorted);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMovies,
        loadMore,
        loading,
        page,
        sortMovies,
        setMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
