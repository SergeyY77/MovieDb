export const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_BEARER}`,
};

export const APP_API = import.meta.env.VITE_APP_TMDB_API;
export const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
