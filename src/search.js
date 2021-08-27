import React, { useState } from "react";
import MovieCard from './movie_card.js';

export default function Search() {
  // State for taking input
  const [query, setQuery] = useState("");

  // State for movies
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    // Replace with your API Key
    const apiKey = `${process.env.REACT_APP_API_KEY}`;

    const url =`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
     // console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Black Panther"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {movies.length===0?
      <div className="none">No Movies Found!
      <div><img src="https://c.tenor.com/FcVg5W9zZJQAAAAM/error.gif" alt="not found" />
      </div></div>
      
      :null}
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))
          }
      </div>
    </>
  );
}
