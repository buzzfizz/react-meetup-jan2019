import React from "react";

const Movie = props => (
  <div className="movie-container">
    <h1>{props.name}</h1>
    <h2>{props.releaseDate}</h2>
    <p><i>{props.description}</i></p>
  </div>
)

export default Movie;