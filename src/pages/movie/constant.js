export const MOVIE_TABS = [
  {
    label: "Overview",
    value: "overview",
    subItems: [
      { label: "Main", value: "main" },
      { label: "Alternative Titles", value: "alternative-titles" },
      { label: "Cast & Crew", value: "cast" },
      { label: "Release Dates", value: "release-dates" },
      { label: "Translations", value: "translations" },
      { label: "Changes", value: "changes", isDivider: "true" },
      { label: "Report", value: "report" },
      { label: "Edit", value: "edit" },
    ],
  },
  {
    label: "Media",
    value: "media",
    subItems: [
      { label: "Backdrops", value: "backdrops", count: 50 },
      { label: "Logos", value: "logos", count: 35 },
      { label: "Posters", value: "posters", count: 255 },
      {
        label: "Videos",
        value: "videos",
        children: [
          { label: "Behind the Scenes", value: "behind", count: 2 },
          { label: "Trailers", value: "trailers", count: 1 },
          { label: "Teasers", value: "teasers", count: 24 },
          { label: "Featurettes", value: "featurettes", count: 9 },
          { label: "Clips", value: "clips", count: 5 },
        ],
      },
    ],
  },
  {
    label: "Fandom",
    value: "fandom",
    subItems: [
      {
        label: "Discussions",
        value: "discussions",
        children: [
          { label: "Overview", value: "overview", count: 0 },
          { label: "General", value: "general", count: 3 },
          { label: "Content Issues", value: "content-issues", count: 2 },
        ],
      },
      { label: "Reviews", value: "reviews" },
    ],
  },
  {
    label: "Share",
    value: "share",
    subItems: [
      { label: "Share Link", value: "share-link" },
      { label: "Facebook", value: "facebook" },
      { label: "Tweet", value: "tweet" },
    ],
  },
];
