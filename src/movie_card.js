import React from 'react';

export default function MovieCard({movie}) {

    return    (<div className="card">
    <img
      className="card-img"
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title + "image"}
    />
    <div className="card-content">
      <h3 className="card-title">{movie.title}</h3>
      <p>
        <small>Release Date : {movie.release_date}</small>
      </p>
      <p>
        <small>Rating : {movie.vote_average}/10</small>
      </p>
      <p className="card-desc">{movie.overview}</p>
    </div>
  </div>)

}