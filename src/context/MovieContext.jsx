import { createContext, useContext, useState, useEffect } from "react";
import { tmdbApi } from "../api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(false);

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

  const loadMore = async () => {
    setLoading(true);
    await fetchMovies(page + 1);
    setLoading(false);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMovies,
        loadMore,
        page,
        setMovies,
        setPage,
        setHasSearched,
        loading,
        hasSearched,
        setLoading,
        autoLoadEnabled,
        setAutoLoadEnabled,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
