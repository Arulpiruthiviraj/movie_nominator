import React, { useEffect } from "react";

import Header from "./components/Header/Header";

import Search from "./components/Search/Search";
import { PropTypes } from "prop-types";

import { connect } from "react-redux";
import { searchMovieSuccess } from "./redux/movie/actions";
import "./App.css";
import MoviePage from "./pages/movie_page/MoviePage";
import NominatedMoviePage from "./pages/nominated_movie/NominatedMoviePage";
import Alert from "./components/alert/alert";

const App = ({ searchMovieSuccess }) => {
  useEffect(() => {
    searchMovieSuccess("World");
  }, [searchMovieSuccess]);

  return (
    <div className="App">
      <Header text={"Nominate The Movies"} />
      <Search />
      <p className="App-intro">Click and Nominate 5 of Your Favorite Movies</p>
      <Alert />

      <div className="grid-container">
        <div className={"grid-item"}>
          <MoviePage />
        </div>
        <div className={"grid-item"}>
          <NominatedMoviePage />
        </div>
      </div>
    </div>
  );
};
App.propTypes = {
  searchMovieSuccess: PropTypes.func.isRequired,
};

export default connect(null, { searchMovieSuccess })(App);
