import React from "react";
import Sidebar from "../../components/sidebar";
import MovieCard from "../../components/Moives";
import { Container } from "./styled";

export default function HomePage() {
  return (
    <Container>
      <Sidebar />
      <MovieCard />
    </Container>
  );
}
