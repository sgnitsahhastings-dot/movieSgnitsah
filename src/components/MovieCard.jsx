import React from "react";

// Small utility to truncate text
const truncate = (text, n = 110) =>
  text && text.length > n ? text.slice(0, n).trim() + "…" : text || "";

const MovieCard = ({ movie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  // Poster path should be like "/posters/poster1.jpg" (in public/)
  const posterSrc = movie.poster_path || "/posters/placeholder.jpg";

  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img
          src={posterSrc}
          alt={movie.title}
          className="poster"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/posters/placeholder.jpg";
          }}
          loading="lazy"
        />
      </div>

      <div className="movie-meta">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="meta-row">
          <span className="year">{releaseYear}</span>
          <span className="popularity">⭐ {Math.round(movie.popularity)}</span>
        </div>

        <p className="overview">{truncate(movie.overview, 120)}</p>
      </div>
    </article>
  );
};

export default MovieCard;
