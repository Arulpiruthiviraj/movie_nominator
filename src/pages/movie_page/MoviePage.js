import React from "react";
import Movie from "../../components/movie/Movie";
import { connect } from "react-redux";
import "./movie-page.scss";
import spinner from "../../assets/ajax-loader.gif";

const MoviePage = ({
  movie: { allMovies, errorMessage, loading, nominations },
}) => {
  return (
    <div className="movie-page">
      {loading && !errorMessage ? (
        <img className="spinner" src={spinner} alt="Loading spinner" />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <div className="items">
          {allMovies && allMovies.length !== 0
            ? // finding whther movie is already nominated
              allMovies.map((movie) => {
                const alreadyNominatedMovie = nominations.find(
                  (item) => item.imdbID === movie.imdbID
                );
                return (
                  <Movie
                    key={movie.imdbID}
                    movie={movie}
                    nominated={!!alreadyNominatedMovie}
                  />
                );
              })
            : "Search With New Term"}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(MoviePage);
