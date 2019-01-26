import React from "react";
import Movie from "./Movie";

const App = function () {
    return React.createElement("div", {}, [
        React.createElement(
            "div", {
                className: "title-bar"
            },
            React.createElement("h1", {}, "React Movie App")
        ),
        React.createElement(Movie, {
            name: "Aquaman",
            releaseDate: "2018-12-07",
            genre: "Action"
        }),
        React.createElement(Movie, {
            name: "Ultraman",
            releaseDate: "2018-12-15",
            genre: "Action"
        }),
        React.createElement(Movie, {
            name: "Fantastic Beasts: The Crimes of Grindelwald",
            releaseDate: "2018-11-14",
            genre: "Action"
        })
    ]);
};

export default App;