const MENU_DATA = [
  {
    name: "Movies",
    subMenu: [
      { name: "Popular", href: "https://www.themoviedb.org/movie/popular" },
      {
        name: "Now Playing",
        href: "https://www.themoviedb.org/movie/now-playing",
      },
      { name: "Upcoming", href: "https://www.themoviedb.org/movie/upcoming" },
      { name: "Top Rated", href: "https://www.themoviedb.org/movie/top-rated" },
    ],
  },
  {
    name: "TV Shows",
    subMenu: [
      { name: "Popular", href: "https://www.themoviedb.org/tv/popular" },
      {
        name: "Airing Today",
        href: "https://www.themoviedb.org/tv/airing-today",
      },
      { name: "On TV", href: "https://www.themoviedb.org/tv/on-the-air" },
      { name: "Top Rated", href: "https://www.themoviedb.org/tv/top-rated" },
    ],
  },
  {
    name: "People",
    subMenu: [
      {
        name: "Popular People",
        href: "https://www.themoviedb.org/person/popular",
      },
    ],
  },
  {
    name: "More",
    subMenu: [
      { name: "Discussions", href: "https://www.themoviedb.org/discuss" },
      { name: "Leaderboard", href: "https://www.themoviedb.org/leaderboard" },
      { name: "Support", href: "https://www.themoviedb.org/help" },
      { name: "API", href: "https://developer.themoviedb.org/" },
      { name: "API for Business", href: "https://developer.themoviedb.org/" },
    ],
  },
];

export default MENU_DATA;
