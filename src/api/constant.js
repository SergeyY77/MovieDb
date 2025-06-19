export const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_BEARER}`,
};

export const APP_API = import.meta.env.VITE_APP_TMDB_API;
