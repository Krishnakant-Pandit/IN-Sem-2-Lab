import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  function addMovie(event) {
    event.preventDefault();
    const trimmedName = movieName.trim();

    if (!trimmedName) return;

    setMovies((currentMovies) => [...currentMovies, trimmedName]);
    setMovieName("");
  }

  function removeMovie(indexToRemove) {
    setMovies((currentMovies) =>
      currentMovies.filter((_, index) => index !== indexToRemove),
    );
  }

  return (
    <main className="movie-card">
      <h1>My Movie List</h1>
      <p className="subtitle">Keep track of movies you want to watch.</p>

      <form className="movie-form" onSubmit={addMovie}>
        <label className="sr-only" htmlFor="movie-name">
          Movie name
        </label>
        <input
          id="movie-name"
          type="text"
          placeholder="Enter a movie name"
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
        />
        <button type="submit">Add movie</button>
      </form>

      {movies.length === 0 ? (
        <p className="empty-message">Your movie list is empty.</p>
      ) : (
        <ul className="movie-list">
          {movies.map((movie, index) => (
            <li className="movie-item" key={`${movie}-${index}`}>
              <span>{movie}</span>
              <button
                className="remove-button"
                type="button"
                onClick={() => removeMovie(index)}
                aria-label={`Remove ${movie}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
