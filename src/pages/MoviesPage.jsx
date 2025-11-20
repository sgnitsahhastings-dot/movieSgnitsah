import React from "react";
import MovieCard from "../components/MovieCard";
import { moviesData } from "../data/moviesData.js";

const MoviesPage = () => {
  const movies = Array.isArray(moviesData.results)
    ? moviesData.results
    : moviesData;

  return (
    <main className="movies-page">
      <h1 style={{ margin: "18px 0" }}>Movies</h1>

      <section className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};

export default MoviesPage;
