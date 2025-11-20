import React from "react";

const MovieCard = ({ movie }) => {
  // Extract release year
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  // Short overview (100 chars)
  const shortOverview =
    movie.overview.length > 100
      ? movie.overview.slice(0, 100) + "..."
      : movie.overview;

  return (
    <div className="movie-card" style={styles.card}>
      <img src={movie.poster_path} alt={movie.title} style={styles.poster} />

      <h3 style={styles.title}>{movie.title}</h3>

      <p style={styles.info}>Year: {releaseYear}</p>
      <p style={styles.info}>Popularity: {movie.popularity}</p>

      <p style={styles.overview}>{shortOverview}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "220px",
    padding: "12px",
    borderRadius: "10px",
    background: "#1c1c1c",
    color: "white",
    margin: "10px",
  },
  poster: {
    width: "100%",
    borderRadius: "10px",
  },
  title: {
    margin: "8px 0 4px 0",
    fontSize: "18px",
    fontWeight: "bold",
  },
  info: {
    margin: "3px 0",
    opacity: 0.8,
  },
  overview: {
    marginTop: "8px",
    fontSize: "14px",
    opacity: 0.9,
  },
};

export default MovieCard;
