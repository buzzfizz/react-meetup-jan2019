import React from "react";
import Movie from "./Movie";
import { BusyContainer } from './busy-container';

const loadCodeAndMovies = () =>
    import('./api').then(({ loadMovies }) => loadMovies());


class App extends React.Component {

    state = {
        showMovies: false,
        isLoading: true,
        appTitle: 'React Movie App',
        movies: []
    }

    componentDidMount() {
        loadCodeAndMovies().then(movies => this.setState({ movies, isLoading: false }));
    }

    toggleMovies = () => {
        this.setState(prevState => ({
            showMovies: !prevState.showMovies
        }))
    }

    render() {
        return (
            <div>
                <div className="title-bar">
                    <h1>{this.state.appTitle}</h1>
                </div>
                <div className="button-container">
                    <button onClick={this.toggleMovies} className="button">
                        {this.state.showMovies ? 'Hide' : 'Show'} Movies
                    </button>
                </div>
                {
                    this.state.showMovies && (
                        <BusyContainer isLoading={this.state.isLoading}>
                            {this.state.movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    name={movie.name}
                                    releaseDate={movie.releaseDate}
                                    description={movie.description}
                                />
                            ))}
                        </BusyContainer>
                    )


                }
            </div>
        );
    }
}
export default App;