import axios from "axios";
import { HEADERS, APP_API } from "./constant";

export const tmdbApi = axios.create({
  baseURL: `${APP_API}/`,
  headers: HEADERS,
});

const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

export async function getKeywords(keyword) {
  const url = `${APP_API}/search/keyword?api_key=${API_KEY}&query=${encodeURIComponent(
    keyword
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch keywords:", error);
    return [];
  }
}

export default async function getSearchResult(result) {
  const API_KEY = "a8e20cd09d2713e69ef1cd7be2228c4f";
  const url = `${APP_API}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    result
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    return [];
  }
}

export async function getMovieData({
  page = 1,
  selectedGenres = [],
  sortBy = "popularity.desc",
  keyword,
}) {
  let url = `${APP_API}/discover/movie?page=${page}`;

  if (selectedGenres.length > 0) {
    url += `&with_genres=${selectedGenres.join(",")}`;
  }

  if (sortBy) {
    url += `&sort_by=${sortBy}`;
  }

  if (keyword) {
    url += `&with_keywords=${keyword}`;
  }

  try {
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data || [];
  } catch (e) {
    console.error("Fetch error:", e.message);
    return [];
  }
}
