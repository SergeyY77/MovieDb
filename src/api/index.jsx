import axios from "axios";
import { headers, APP_API } from "./constant";

export const tmdbApi = axios.create({
  baseURL: `${APP_API}/`,
  headers,
});

const API_KEY = "a8e20cd09d2713e69ef1cd7be2228c4f";

export const getAccountData = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/account/22050539",
      {
        headers,
      }
    );

    if (!res.ok) throw new Error("Failed to fetch account");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Account fetch error:", error);
    return null;
  }
};

export async function getKeywords(keyword) {
  const url = `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${encodeURIComponent(
    keyword
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Keywords:", data);
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch keywords:", error);
    return [];
  }
}

export default async function getSearchResult(result) {
  const API_KEY = "a8e20cd09d2713e69ef1cd7be2228c4f";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
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
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data || [];
  } catch (e) {
    console.error("Fetch error:", e.message);
    return [];
  }
}
