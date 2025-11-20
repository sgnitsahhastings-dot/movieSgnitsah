import React from "react";
import MovieCard from "../components/MovieCard";
import { moviesData } from "../data/moviesData";

const MoviesPage = () => {
  return (
    <div style={styles.container}>
      {moviesData.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    padding: "20px",
  },
};

export default MoviesPage;
