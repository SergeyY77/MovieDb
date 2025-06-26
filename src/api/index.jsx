import axios from "axios";
import { HEADERS, APP_API, API_KEY } from "./constant";

export const tmdbApi = axios.create({
  baseURL: `${APP_API}/`,
  headers: HEADERS,
});

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
