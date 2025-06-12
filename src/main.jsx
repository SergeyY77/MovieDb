import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/baseLayout";
import GlobalStyles from "./shared/GlobalStyles";
import HomePage from "./pages/homePage";
import Movie from "./pages/movie";
import { MovieProvider } from "./context/MovieContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <GlobalStyles />

    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movie/:id" element={<Movie />} />
          </Route>
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>
);
