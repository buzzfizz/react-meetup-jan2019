import React from "react";

const Movie = props =>
  React.createElement(
    "div", {
      className: "movie-container"
    },
    [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.releaseDate),
      React.createElement("span", {}, props.genre)
    ]
  );

export default Movie;